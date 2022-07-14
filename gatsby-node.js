const fs = require("fs");

const initializePlugin = async (args, pluginOptions) => {
  const contentPath = `${__dirname}/content/projects`;

  // Check if content directory exists.
  if (!fs.existsSync(contentPath)) {
    args.reporter.warn(
      `The ${contentPath} directory is missing. Creating it now...`
    );
    fs.mkdirSync(contentPath, { recursive: true });
  }
};
exports.onPreBootstrap = async (args, pluginOptions) => {
  await initializePlugin(args, pluginOptions);
};
exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  actions.setWebpackConfig({
    devtool: "eval-source-map",
  });
  if (getConfig().mode === "production") {
    actions.setWebpackConfig({
      devtool: false,
    });
  }
};
exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type Project implements Node  @infer  {
      id: ID!
      locale:String!
      title: String!
      body: String!
      repoLink:String
      demoLink:String
      technologies:[String!]
      description:String
      coverImage: File @fileByRelativePath
      images: [File]   @fileByRelativePath
      moreInfo:Boolean!  
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
    return resolver(mdxNode, args, context, {
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

exports.onCreateNode = async ({
  node,
  actions,
  getNode,
  createNodeId,
  createContentDigest,
}) => {
  if (node.internal.type === "Mdx") {
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
        moreInfo:
          node.frontmatter.moreInfo === null ||
          node.frontmatter.moreInfo === undefined
            ? true
            : node.frontmatter.moreInfo,
        technologies: node.frontmatter.technologies,
        internal: {
          type: nodeType,
          contentDigest: createContentDigest(node.internal.contentDigest),
        },
      });
    }
  }
};