const fs = require("fs")
const { graphql } = require("gatsby")

exports.onPreBootstrap = ({ reporter }) => {
  const contentPath = `${__dirname}/content/projects`

  // Check if content directory exists.
  if (!fs.existsSync(contentPath)) {
    reporter.warn(`The ${contentPath} directory is missing. Creating it now...`)
    fs.mkdirSync(contentPath, { recursive: true })
  }
}
exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  actions.setWebpackConfig({
    devtool: "eval-source-map",
  })
  if (getConfig().mode === "production") {
    actions.setWebpackConfig({
      devtool: false,
    })
  }
}
exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type Project implements Node    {
      id: ID!
      locale:String!
      title: String!
      body: String!
      sourceCode:String
      technologies:[String!]
      url: String
      coverImage: File @fileByRelativePath
      images: [File]
    }
  `)
}

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  // Check for "Mdx" type so that other files (e.g. images) are exluded
  if (node.internal.type === `Mdx`) {
    // Use path.basename
    // https://nodejs.org/api/path.html#path_path_basename_path_ext
    const name = path.basename(node.fileAbsolutePath, `.mdx`)

    // Check if post.name is "index" -- because that's the file for default language
    // (In this case "en")
    const isDefault = name === `index`

    // Find the key that has "default: true" set (in this case it returns "en")
    const defaultKey = findKey(locales, o => o.default === true)

    // Files are defined with "name-with-dashes.lang.mdx"
    // name returns "name-with-dashes.lang"
    // So grab the lang from that string
    // If it's the default language, pass the locale for that
    const lang = isDefault ? defaultKey : name.split(`.`)[1]

    createNodeField({ node, name: `locale`, value: lang })
    createNodeField({ node, name: `isDefault`, value: isDefault })
  }
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

//work but block project
exports.onCreateNode = async ({
  node,
  actions,
  getNode,
  createNodeId,
  createContentDigest,
  getNodesByType,
}) => {}
exports.onCreateNode = async (
  { node, actions, getNode, createNodeId, createContentDigest },
  themeOptions
) => {
  if (node.internal.type === "Mdx") {
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
        coverImage: node.frontmatter.coverImage,
        sourceCode: node.frontmatter.sourceCode,
        parent: node.id,
        locale: node.fields.locale,
        technologies: node.frontmatter.technologies,
        internal: {
          type: nodeType,
          contentDigest: createContentDigest(node.internal.contentDigest),
        },
      })
    }
  }
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage  } = actions
  // Check if the page is a localized 404
  if (page.path.match(/^\/[a-z]{2}\/404\/$/)) {
    const oldPage = { ...page }
    // Get the language code from the path, and match all paths
    // starting with this code (apart from other valid paths)
    const langCode = page.path.split(`/`)[1]
    page.matchPath = `/${langCode}/*`
    // Recreate the modified page
    deletePage(oldPage)
    createPage(page)
  }
}
