module.exports = {
  plugins: [`gatsby-plugin-styled-components`, `gatsby-plugin-sass`,{
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: "UA-130870802-1",
      // Puts tracking script in the head instead of the body
      head: false,
      // Setting this parameter is optional
      anonymize: true,
      // Setting this parameter is also optional
      respectDNT: true,
      // Avoids sending pageview hits from custom paths
      exclude: ["/preview/**", "/do-not-track/me/too/"],
      // Enables Google Optimize using your container Id
      optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
      // Any additional create only fields (optional)
      sampleRate: 5,
      siteSpeedSampleRate: 10,
    },
  },]
};
