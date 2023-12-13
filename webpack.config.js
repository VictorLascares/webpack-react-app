const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const rulesForStyles = {
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
}
const rulesForJavascript = {
    test: /\.js$/,
    loader: 'babel-loader',
    options: {
        presets: [
            [
                '@babel/preset-react',
                {
                    runtime: 'automatic' // default 'classic'
                }
            ]

        ]
    }
} 

module.exports = (env, argv) => {
    const { mode } = argv;
    const isProduction = mode === 'production'
    return {
        // entry: './src/index.js'
        output: {
            filename: isProduction ? '[name].[contenthash].js' : 'main.js',
            path: path.resolve(__dirname, 'build')
        },
        plugins: [
            new HtmlWebpackPlugin({ template: 'src/index.html' })
        ],
        module: {
            rules: [
                rulesForJavascript,
                rulesForStyles
            ]
        },
        devServer: {
            // open: true, // abrirnos el navegador
            port: 3000,
            // overlay: true, // abrir un overlay con los errores
            compress: true
        },
        devtool: 'source-map'
    }
}