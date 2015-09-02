import { Parse as Parse } from 'parse';

var Post = Parse.Object.extend('Post', {}, {
    create: function (title, content, tags, author, authorName) {
        tags = tags || [];

        var post = new Post();

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
                    return post.attributes;
                });

                resolve(posts);
            }, function (error) {
                reject(error);
            });
        });
    },
    getAllPostsByAuthor: function (authorName) {
        var query = new Parse.Query(Post);

        query.equalTo("author", authorName);

        return new Promise(function (resolve, reject) {
            query.find().then(function (results) {
                var posts = results.map(function (post) {
                    return post.attributes;
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
                    return post.attributes;
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
        query.equalTo("author", authorName);

        return new Promise(function (resolve, reject) {
            query.find().then(function (results) {
                var posts = results.map(function (post) {
                    return post.attributes;
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
        authorQuery.equalTo("author", key);

        var tagAndAuthorQuery = new Parse.Query.or(tagQuery, authorQuery);

        return new Promise(function (resolve, reject) {
            tagAndAuthorQuery.find().then(function (results) {
                var posts = results.map(function (post) {
                    return post.attributes;
                });

                resolve(posts);
            }, function (error) {
                reject(error);
            });
        });
    }
});

export default Post;
