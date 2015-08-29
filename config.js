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
		parse: 'node_modules/parse/build/parse-latest.js',
		sammy: 'bower_components/sammy/lib/sammy.js',
		handlebars: 'bower_components/handlebars/handlebars.js',
		bootstrap: 'bower_components/bootstrap/dist/js/bootstrap.js',
		db: 'scripts/db.js',
		user: 'scripts/user.js',
		post: 'scripts/post.js',
		app: 'app/app.js',
		controller: 'app/controller.js',
		templateHandler: 'app/helpers/templateHandler.js',
		testDB: 'app/helpers/testDB.js'
	}
});
