import { Parse as Parse } from 'parse';

var User = Parse.User.extend({}, {
    create: function (username, password, email) {
        if (!username) {
            throw new Error('Invalid username provided.');
        }

        if (!password) {
            throw new Error('Invalid password provided.');
        }

        if (!email) {
            throw new Error('Invalid email provided.');
        }

        var user = new User();

        user.set('username', username);
        user.set('password', password)
        user.set('email', email);
        user.set('links', []);
        user.set('name', username);

        return new Promise(function (resolve, reject) {
            user.signUp().then(function (user) {
                resolve(user);
            }, function (error) {
                reject(error);
            });
        });
    },
    getAllUsers: function () {
        var query = new Parse.Query(User);
        return new Promise(function (resolve, reject) {
            query.find().then(function (results) {
                var users = results.map(function (user) {
                    return user.attributes;
                });

                resolve(users);
            }, function (error) {
                reject(error);
            });
        });
    },
    getUserByUsername: function (username) {
        var query = new Parse.Query(User);

        query.equalTo("username", username);

        return new Promise(function (resolve, reject) {
            query.first().then(function (results) {

               if(results){
                   resolve(results.attributes)
               }else{
                   reject();
               }
            }, function (error) {
                reject(error);
            });
        });
    }
});

export default User;
