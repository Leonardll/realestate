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
      NEXT_PUBLIC_BAYU_API : '1601d9b5f2msh29a3578e98c051fp126b5djsnc6a5004d881c',
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
