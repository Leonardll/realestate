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
      NEXT_PUBLIC_BAYU_API : 'd479d654acmshfb02f70b2d2ed30p13e263jsn2b6928d6945c',
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
