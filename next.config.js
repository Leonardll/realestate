const path = require('path')

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
    images: {
      domains: ['bayut-production.s3.eu-central-1.amazonaws.com'],
    },
    env:{
      NEXT_PUBLIC_BAYU_API : '8e90a4bc31msh0dc9fb6b55bb4f3p1becf6jsn6efb58d8b025',
    },
    module: {
      rules: [
        //...
        {
          test: /\.(png|jp(e*)g|svg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'images/[hash]-[name].[ext]',
              },
            },
          ],
        },
      ],
    },
}
