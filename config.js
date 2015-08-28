System.config({
	transpiler: "babel",
	babelOptions: {
		optional: [
			"runtime"
		]
	},
	map: {
		babel: 'node_modules/babel-core/browser.js',
		jquery: 'bower_components/jquery/dist/jquery.js',
		express: 'bower_components/express/index.js',
		sammy: 'bower_components/sammy/lib/sammy.js',
		handlebars: 'bower_components/handlebars/handlebars.js',
		bootstrap: 'bower_components/bootstrap/dist/js/bootstrap.js',
		test: '/scripts/test.js',
		app: 'app/app.js',
		controller: 'app/controller.js',
		templateHandler: 'app/helpers/templateHandler.js'
	}
});