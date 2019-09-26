const path = require('path');

module.exports = {
	entry: {
		index: ['./src/js/index.js'],
		page1: ['./src/js/page1.js'],
		page2: ['./src/js/page2.js']
	},
	output: {
		path: path.resolve(__dirname, './static'),
		filename: 'js/[name]-bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	}
};
