const path = require('path')
const { whenProd, getPlugin, pluginByName} = require('@craco/craco')

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        },
        configure: (webpackConfig) => {
            let cdn = {
                js: []
            }
            whenProd(() => {
                webpackConfig.externals = {
                  react: 'React',
                  'react-dom': 'ReactDOM'
                }
                cdn = {
                  js: [
                    'https://cdnjs.cloudflare.com/ajax/libs/react/18.1.0/umd/react.production.min.js',
                    'https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.1.0/umd/react-dom.production.min.js',
                  ]
                }
            })

            const {isFound, match} = getPlugin(
                webpackConfig,
                pluginByName('HtmlWebpackPlugin')
            )
            if(isFound){
                match.userOptions.files = cdn
            }
            return webpackConfig
        }
    }
}