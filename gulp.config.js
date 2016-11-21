module.exports = function(){

	var basePaths = {
		root: "./",
		node: "./node_modules/",
		bower: "./bower_components/",
		develop: "./develop/",
		build: "./assets/",
		pug_config: "./pug.config.json"
	};

	var paths = {
		pug: {
			config: basePaths.pug_config,
			src: [
				basePaths.develop + "pug_files/*.pug" 
			],
			watch: [
				basePaths.develop + "pug_files/**/*.pug",
				basePaths.pug_config
			],
			dest: basePaths.root
		},
		sass: {
			src: [
				basePaths.develop + "sass/main.sass" 
			],
			watch: [
				basePaths.develop + "sass/**/*.sass"
			],
			dest: basePaths.build + "css"
		},
		js: {
			name: 'main.js',
			src: [
				basePaths.node + "jquery/dist/jquery.min.js",
				basePaths.node + "materialize-css/dist/js/materialize.min.js",
				basePaths.develop + "js/main.js"
			],
			watch: [
				basePaths.develop + "js/**/*.js"
			],
			dest: basePaths.build + "js"
		},
		assets: {
			base: basePaths.build,
			src:[
				basePaths.develop + "data{,/**/*}",
				basePaths.develop + "images{,/**/*}",
				basePaths.develop + "fonts{,/**/*}"
			],
			watch:[
				basePaths.develop + "data{,/**/*}",
				basePaths.develop + "images{,/**/*}",
				basePaths.develop + "fonts{,/**/*}"
			],
			cleanSrc:[
				basePaths.build + "data",
				basePaths.build + "images",
				basePaths.build + "fonts"
			],
			dest: basePaths.build
		}
	};

	return paths;
}