/*
* @Author: Zhang Guohua
* @Date:   2020-04-09 16:51:19
* @Last Modified by:   zgh
* @Last Modified time: 2020-04-09 17:38:48
* @Description: create by zgh
* @GitHub: Savour Humor
*/

const path = require('path')


module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
  	entry: {
  		app: './src/index.js'
  	},
  	devServer: {
     contentBase: './dist'
    },
    devtool: 'inline-source-map',
    output: {
      	filename: '[name].bundle.js',
      	path: path.resolve(__dirname, 'dist')
    }
}