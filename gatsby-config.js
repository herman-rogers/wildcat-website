module.exports = {
  siteMetadata: {
    title: 'Wildcat Stable Coin',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true,
      },
    },
    {
      resolve: `gatsby-plugin-less`,
      options: {
        lessOptions: {
          modifyVars: {
            'layout-body-background': '#ffffff',
            'layout-header-background': '#fef4e8',
            'layout-header-padding': '0',
            'layout-header-height': '80px',
          },
          javascriptEnabled: true,
        },
      },
    },
    'gatsby-plugin-styled-components',
  ],
};
