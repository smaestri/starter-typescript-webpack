module.exports = {
    entry : './app/old.ts',
    debug: true,
    resolve: {
        extensions: ['', '.ts', '.js', '.html']
    },
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { 
                test: /\.ts$/,
                loader: 'ts-loader'
            },
        ]
    },
    
    devServer: {
        historyApiFallback: true
      }
}