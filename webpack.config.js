
module.exports = {

    module : {
        rules : [
            {
                
                test : /\.s[ac]ss$/,
                use : ['style-loader', 'css-loader' , 'sass-loader']
            },
            // {
            //     test: /\.(png|svg|jpg|jpeg|gif)$/i,
            //     type: 'asset/resource',
            // }

        ]
    },

}
