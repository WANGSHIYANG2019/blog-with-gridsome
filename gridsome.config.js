// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  // rules: [
  //   {
  //     test: /\.(scss|sass|css)$/,
  //     use: [
  //       {
  //         loader: "style-loader"
  //       }, {
  //         loader: "css-loader",
  //         options: {
  //           sourceMap: true,
  //         },
  //       }
  //     ]
  //   }
  // ],
  plugins: [{
    use: '@gridsome/source-filesystem',
    options: {
      typeName: 'BlogPost',
      path: './content/blog/**/*.md',
    }
  }, {
    use: '@gridsome/source-strapi',
    options: {
      apiURL: process.env.GRIDSOME_API_URL,
      queryLimit: 1000, //Defaults to 100
      contentTypes: ['post', 'tag'],
      singleTypes: ['general'],
    }
  }],
  templates: {//根据内容类型创造模板
    StrapiPost: [
      {
        path: '/post/:id',
        component: './src/templates/Post.vue'
      }
    ],
    StrapiTag: [
      {
        path: '/tag/:id',
        component: './src/templates/Tag.vue'
      }
    ]
  }
}
