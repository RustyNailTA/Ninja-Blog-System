System.config({
	transpiler: "babel",
	map: {
		babel: "lib/babel-core/browser.js",
		"babel-runtime": "lib/babel-runtime",
		"core-js": "lib/core-js",
		jquery: 'lib/jquery.min.js',
		parse: 'lib/parse-latest.js',
		sammy: 'lib/sammy.js',
		handlebars: 'lib/handlebars.js',
		bootstrap: 'lib/bootstrap.min.js',
		fbApi: 'scripts/facebookApi.js',
		user: 'scripts/user.js',
		post: 'scripts/post.js',
		app: 'app/app.js',
		controller: 'app/controller.js',
		templateHandler: 'app/helpers/templateHandler.js',
		CONSTRAINTS: 'app/helpers/CONSTRAINTS.js',
		validator: 'app/helpers/validator.js',
		utilities: 'app/helpers/utilities.js'
	}
});
