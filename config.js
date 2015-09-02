System.config({
	transpiler: "babel",
	map: {
		babel: "node_modules/babel-core/browser.js",
	    "babel-runtime": "node_modules/babel-runtime",
	    "core-js": "node_modules/core-js",
		jquery: 'bower_components/jquery/dist/jquery.js',
		parse: 'node_modules/parse/build/parse-latest.js',
		sammy: 'bower_components/sammy/lib/sammy.js',
		handlebars: 'bower_components/handlebars/handlebars.js',
		bootstrap: 'bower_components/bootstrap/dist/js/bootstrap.js',
		fbApi: 'scripts/facebookApi.js',
		user: 'scripts/user.js',
		post: 'scripts/post.js',
		app: 'app/app.js',
		controller: 'app/controller.js',
		templateHandler: 'app/helpers/templateHandler.js',
		testDB: 'app/helpers/testDB.js',
		CONSTRAINTS: 'app/helpers/CONSTRAINTS.js',
		validator: 'app/helpers/validator.js',
		utilities: 'app/helpers/utilities.js'
	}
});
