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

        user.signUp(null, {
            error: function (user, error) {
                throw new Error(`Could not create user: ${error.message}` +
                ` (${error.code}).`);
            }
        })

        return user;
    }
});

export default User;