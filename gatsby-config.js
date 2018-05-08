module.exports = {
  plugins: [`gatsby-plugin-netlify-cms`,
    {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/blog`,
      name: "markdown-pages",
    },
  },
  `gatsby-transformer-remark`,
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-plugin-sass`,
    options: {
      precision: 8,
    },
  },
  ],
};
