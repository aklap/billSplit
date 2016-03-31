var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack/hot/only-dev-server',
        './app.js'
    ],
    output: {
        path: __dirname, 
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['react-hot', 'babel-loader?presets[]=react,presets[]=es2015'],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ]
};