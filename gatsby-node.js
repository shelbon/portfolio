const fs = require('fs');
const { graphql } = require('gatsby');
const path = require('path');

exports.onPreBootstrap = ({ reporter }) => {
  const contentPath = `${__dirname}/content/projects`;

  // Check if content directory exists.
  if (!fs.existsSync(contentPath)) {
    reporter.warn(
      `The ${contentPath} directory is missing. Creating it now...`,
    );
    fs.mkdirSync(contentPath, { recursive: true });
  }
};
exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  actions.setWebpackConfig({
    devtool: 'eval-source-map',
  });
  if (getConfig().mode === 'production') {
    actions.setWebpackConfig({
      devtool: false,
    });
  }
};
exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type Project implements Node   {
      id: ID!
      locale:String!
      title: String!
      body: String!
      repoLink:String
      demoLink:String
      technologies:[String!]
      coverImage: File @fileByRelativePath
      images: [File]   @fileByRelativePath
    } `);
};

// Helper to resolve mdx fields.
const mdxResolverPassthrough =
  (fieldName) => async (source, args, context, info) => {
    const type = info.schema.getType(`Mdx`);
    const mdxNode = context.nodeModel.getNodeById({
      id: source.parent,
    });
    const resolver = type.getFields()[fieldName].resolve;
    return await resolver(mdxNode, args, context, {
      fieldName,
    });
  };

exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    Project: {
      body: {
        resolve: mdxResolverPassthrough(`body`),
      },
    },
  });
};

// work but block project
exports.onCreateNode = async ({
  node,
  actions,
  getNode,
  createNodeId,
  createContentDigest,
  getNodesByType,
}) => {};
exports.onCreateNode = async (
  { node, actions, getNode, createNodeId, createContentDigest },
  themeOptions,
) => {
  if (node.internal.type === 'Mdx') {
    const parent = getNode(node.parent);
    if (parent.sourceInstanceName !== `project`) {
      return;
    }

    const nodeType = `Project`;

    // Create Project  nodes from Mdx nodes.
    if (nodeType) {
      actions.createNode({
        id: createNodeId(`${nodeType}-${node.id}`),
        title: node.frontmatter.title,
        description: node.frontmatter.description,
        images: node.frontmatter.images,
        url: node.frontmatter.url,
        coverImage: node.frontmatter.coverImage,
        repoLink: node.frontmatter.repoLink,
        demoLink: node.frontmatter.demoLink,
        parent: node.id,
        locale: node.fields.locale,
        technologies: node.frontmatter.technologies,
        internal: {
          type: nodeType,
          contentDigest: createContentDigest(
            node.internal.contentDigest,
          ),
        },
      });
    }
  }
};
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  if (page.path.includes('home')) {
    deletePage(page);
    createPage({
      ...page,
      context: {
        ...page.context,
        regex: `/cv([_\\\\-\\\\.][a-zÀ-ÿ]*)*([_\\\\-\\\\.]${page.context.locale})$/i`,
      },
    });
  }
};
