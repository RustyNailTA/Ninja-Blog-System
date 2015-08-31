import { Parse as Parse } from 'parse';

var User = Parse.User.extend({
    getPostCount: function () {
        // TODO: SELECT COUNT(*) FROM Posts WHERE username = User.get('username')
        return 42;
    },
    getPosts: function () {
        // TODO: SELECT * FROM Posts WHERE username = User.get('username')
        return [{
            postId: 1,
            title: 'foo',
            content: 'bar',
        }, {
            postId: 2,
            title: 'bar',
            content: 'foo',
        }];
    }
}, {
    create: function (username, password, email) {
        var user = new User();

        user.set('username', username);
        user.set('password', password)
        user.set('email', email);
        user.set('links', []);

        return new Promise(function (resolve, reject) {
            user.signUp().then(function (user) {
                resolve(user);
            }, function (error) {
                reject(error);
            });
        });
    },
    getAllUsers: function () {
        var queryObject = new Parse.Query(User);
        return new Promise(function (resolve, reject) {
            queryObject.find().then(function (results) {
                var users = results.map(function (user) {
                    return user.attributes;
                });

                resolve(users);
            }, function (error) {
                reject(error);
            });
        });
    }


});

export default User;
