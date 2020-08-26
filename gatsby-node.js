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
    type Project implements Node  {
      id: ID!
      title: String!
      body: String!
      sourceCode:String
      technologies:[String!]
      url: String
      images: [File]
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
      images: node.frontmatter.images,
      url: node.frontmatter.url,
      sourceCode:node.frontmatter.sourceCode,
      parent: node.id,
      technologies:node.frontmatter.technologies,
      internal: {
        type: nodeType,
        contentDigest: createContentDigest(node.internal.contentDigest),
      },
    })
   
  }
}
 

