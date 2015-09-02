import { Parse as Parse } from 'parse';

var Post = Parse.Object.extend('Post', {}, {
    create: function (title, content, tags, author, authorName) {
        tags = tags || [];

        var post = new Post();
        content = content.trim();

        if (!title) {
            throw new Error('Invalid title provided.');
        }

        post.set('title', title);
        post.set('content', content);
        post.set('tags', tags);
        post.set('author', author);
        post.set('views', 0);
        post.set('likes', 0);
        post.set('authorName', authorName);

        return new Promise(function (resolve, reject) {
            post.save().then(function (post) {
                resolve(post);
            }, function (error) {
                reject(error);
            });
        });
    },
    getAllPosts: function () {
        var query = new Parse.Query(Post);

        return new Promise(function (resolve, reject) {
            query.find().then(function (results) {
                var posts = results.map(function (post) {
                  var currPost = post.attributes;
                    currPost.id = post.id;
                    currPost.createdAt = post.createdAt.toLocaleDateString();
                    return currPost;
                });

                resolve(posts);
            }, function (error) {
                reject(error);
            });
        });
    },
    getAllPostsByAuthor: function (authorName) {
        var query = new Parse.Query(Post);

        query.equalTo("authorName", authorName);

        return new Promise(function (resolve, reject) {
            query.find().then(function (results) {
                var posts = results.map(function (post) {
                    var currPost = post.attributes;
                    currPost.id = post.id;
                    currPost.createdAt = post.createdAt.toLocaleDateString();

                    return currPost;
                });

                resolve(posts);
            }, function (error) {
                reject(error);
            });
        });
    },
    getAllPostsByTag: function (tagName) {
        var query = new Parse.Query(Post);

        query.equalTo("tags", tagName);

        return new Promise(function (resolve, reject) {
            query.find().then(function (results) {
                var posts = results.map(function (post) {
                    var currPost = post.attributes;
                    currPost.id = post.id;
                    currPost.createdAt = post.createdAt.toLocaleDateString();

                    return currPost;
                });

                resolve(posts);
            }, function (error) {
                reject(error);
            });
        });
    },
    getAllPostsByTagAndAuthor: function (tagName, authorName) {
        var query = new Parse.Query(Post);

        query.equalTo("tags", tagName);
        query.equalTo("authorName", authorName);

        return new Promise(function (resolve, reject) {
            query.find().then(function (results) {
                var posts = results.map(function (post) {
                    var currPost = post.attributes;
                    currPost.id = post.id;
                    currPost.createdAt = post.createdAt.toLocaleDateString();

                    return currPost;
                });

                resolve(posts);
            }, function (error) {
                reject(error);
            });
        });
    },
    getAllPostsByTagOrAuthor: function (key) {
        var tagQuery = new Parse.Query(Post);
        tagQuery.equalTo("tags", key);

        var authorQuery = new Parse.Query(Post);
        authorQuery.equalTo("authorName", key);

        var tagAndAuthorQuery = new Parse.Query.or(tagQuery, authorQuery);

        return new Promise(function (resolve, reject) {
            tagAndAuthorQuery.find().then(function (results) {
                var posts = results.map(function (post) {
                    var currPost = post.attributes;
                    currPost.id = post.id;
                    currPost.createdAt = post.createdAt.toLocaleDateString();

                    return currPost;
                });

                resolve(posts);
            }, function (error) {
                reject(error);
            });
        });
    },
    getTopNPostsByViews: function (n, authorName) {
        var query = new Parse.Query(Post);

        if(authorName){
            query.equalTo("authorName", authorName);
        }

        query.descending("views");
        query.limit(n);

        return new Promise(function (resolve, reject) {
            query.find().then(function (results) {
                var posts = results.map(function (post) {
                    var currPost = post.attributes;
                    currPost.id = post.id;
                    currPost.createdAt = post.createdAt.toLocaleDateString();

                    return currPost;
                });

                resolve(posts);
            }, function (error) {
                reject(error);
            });
        });
    },
    getLatestNPosts: function (n, author) {
        var query = new Parse.Query(Post);

        if(author){
            query.equalTo("authorName", author);
        }

        query.descending("createdAt");
        query.limit(n);

        return new Promise(function (resolve, reject) {
            query.find().then(function (results) {
                var posts = results.map(function (post) {
                    var currPost = post.attributes;
                    currPost.id = post.id;
                    currPost.createdAt = post.createdAt.toLocaleDateString();

                    return currPost;
                });

                resolve(posts);
            }, function (error) {
                reject(error);
            });
        });
    },
    getPostByAuthorAndId: function (postAuthor, postId) {
        var query = new Parse.Query(Post);

            query.equalTo("authorName", postAuthor);
            query.equalTo("objectId", postId);

        return new Promise(function (resolve, reject) {
            query.first().then(function (result) {

                var post = result;
                if(post){
                    post.attributes.createdAt = result.createdAt.toLocaleDateString();
                }

                resolve(post);
            }, function (error) {
                reject(error);
            });
        });
    }

});

export default Post;
