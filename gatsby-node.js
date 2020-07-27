const slugify = require('@sindresorhus/slugify');
const fs = require("fs")

exports.onPreBootstrap = ({ reporter }) => {
  const  contentPath  ="/content/projects"

  // Check if content directory exists.
  if (!fs.existsSync(contentPath)) {
    reporter.warn(`The ${contentPath} directory is missing. Creating it now...`)
    fs.mkdirSync(contentPath, { recursive: true })
  }
}
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    devtool: 'eval-source-map',
  })
}
exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type Project implements Node @dontInfer {
      id: ID!
      title: String!
      excerpt(pruneLength: Int = 150): String
      slug: String!
      body: String!
      technologies:[String]
      url: String!
      image: File @fileByRelativePath
    }
  `)
}

// Helper to resolve mdx fields.
const mdxResolverPassthrough = fieldName => async (
  source,
  args,
  context,
  info
) => {
  const type = info.schema.getType(`Mdx`)
  const mdxNode = context.nodeModel.getNodeById({
    id: source.parent,
  })
  const resolver = type.getFields()[fieldName].resolve
  return await resolver(mdxNode, args, context, {
    fieldName,
  })
}

exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    Project: {
      body: {
        resolve: mdxResolverPassthrough(`body`),
      },
    },
  })
}

exports.onCreateNode = async (
  { node, actions, getNode, createNodeId, createContentDigest },
  themeOptions
) => {
  if (node.internal.type !== "Mdx") {
    return
  }

  const parent = getNode(node.parent)
  if (parent.sourceInstanceName !== `project`) {
    return
  }

  const nodeType = `Project`

  // Create Post nodes from Mdx nodes.
  if (nodeType) {
    actions.createNode({
      id: createNodeId(`${nodeType}-${node.id}`),
      title: node.frontmatter.title,
      excerpt: node.frontmatter.excerpt,
      slug:node.frontmatter.slug || 
      slugify(parent.relativeDirectory),
      image: node.frontmatter.image,
      url: node.frontmatter.url,
      parent: node.id,
      technologies:node.frontmatter.technologies,
      internal: {
        type: nodeType,
        contentDigest: createContentDigest(node.internal.contentDigest),
      },
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter }, themeOptions) => {
  const result = await graphql(`
    query {
      allProject(sort: { fields: title, order: DESC }) {
        projects: nodes {
          id
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic(`There was an error fetching projects.`, result.errors)
  }

  const { projects } = result.data.allProject

  // Create project pages.
  projects.forEach(project => {
    actions.createPage({
      path: project.slug,
      component: require.resolve(`./src/templates/project-query.js`),
      context: {
        id: project.id,
      },
    })
  })

  
}

