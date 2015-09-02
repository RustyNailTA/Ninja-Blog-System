var expect = require('chai').expect,
Post = require('../scripts/post.js');

describe('Post', function () {
	describe('#create()', function() {
		it('should be a function', function () {
			expect(Post.create).to.be.a('function');
		});

		it('Should throw an error when the title of the post is null', function() {
			function nullTitleTest() {
				var post = Post.create(null, 'This post is for testing purposes', '<h1></h1>', 'keisy');
			}

			expect(nullTitleTest).to.throw();
		});

		it('Should throw an error when the title of the post is undefined', function() {
			function undefinedTitleTest() {
				var post = Post.create(undefined, 'This post is for testing purposes', '<h1></h1>', 'keisy');
			}

			expect(undefinedTitleTest).to.throw();
		});

		it('Should throw an error when the title of the post is an empty string', function() {
			function emptyStringTitleTest() {
				var post = Post.create('', 'This post is for testing purposes.', '<h1></h1>', 'keisy');
			}

			expect(emptyStringTitleTest).to.throw();
		});

		it('Should throw an error when the the content has less than 200 symbols', function() {
			function shortContentTest() {
				var post = Post.create('JavaScript', 'This post is for testing purposes', '<h1></h1>', 'keisy');
			}

			expect(shortContentTest).to.throw();
		});

		it('Should not throw an error when the the content has 200 symbols or more', function() {
			function longContentTest() {
				var post = Post.create('JavaScript', 
					'This post is for testing purposes and it contains more than 200 symbols including the spaces but trimmed in the end. :):):):):) :):):):):) :):):):):) :):):):):) :):):):):) :):):):):) :):):):):) :):):):):) :):):):):) :):):):):)',
				'<h1></h1>', 'keisy');
			}

			expect(longContentTest).not.to.throw();
		});
	});

    describe('#getAllPostsByAuthor()', function () {
	    it('should be a function', function () {
		    expect(Post.getAllPostsByAuthor).to.be.a('function');
	    });
    });

    describe('#getAllPostsByTag()', function () {
	    it('should be a function', function () {
		    expect(Post.getAllPostsByTag).to.be.a('function');
	    });
    });

    describe('#getAllPostsByTagAndAuthor()', function () {
	    it('should be a function', function () {
		    expect(Post.getAllPostsByTagAndAuthor).to.be.a('function');
	    });
    });

    describe('#getAllPostsByTagOrAuthor()', function () {
	    it('should be a function', function () {
		    expect(Post.getAllPostsByTagOrAuthor).to.be.a('function');
	    });
    });
});
