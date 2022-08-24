const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  console.log("create page on root")
   createPage({
      path: "/haha/*",
      component: path.resolve("./src/template/community.js")
  })
};