var path=require('path');
var webpack=require('webpack');
var HtmlWebpackPlugin=require('html-webpack-plugin');


module.exports={
	entry:path.resolve(__dirname,'app/index.jsx'),
	output:{
		filename:'bundle.js'
	},
	resolve:{
		extensions: [".js", ".json",'.jsx']
	},
	module:{
		rules:[
			{test:/\.(js|jsx)$/,exclude:/node-modules/,
				use:{
					loader:'babel-loader',query:{
						presets:["es2015",'react']
					}
				},
			},
			{test:/\.less$/,exclude:/node-modules/,
			use:['style-loader','css-loader',
				{loader:'postcss-loader',
					options:{
						ident:'postcss-ident',
						plugins:function (){
							return [require("autoprefixer")({
								browsers:['last 100 versions']
							})]
						}
					}
				},'less-loader']
			}
		]
	},
	plugins: [
   		new HtmlWebpackPlugin({
   			title:'react test',
   			filename:'index.html',
   			template:__dirname + '/app/index.tpl.html',
   			inject:'body'
   		})
  	]
}
