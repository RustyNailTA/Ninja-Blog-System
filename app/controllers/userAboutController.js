import {templateHandler} from 'templateHandler'
import {testDB} from 'testDB'
import User from 'user'

function userAboutController(userName, app){


    User.getAllUsers().then(function (users) {
        // console.log(users)

        var selectedUser = _.find(users, function (user) {
            // console.log(user.posts);
            return user.username === userName;
        });

        console.log(selectedUser)

        if (selectedUser) {

            templateHandler.loadDataTemplate('templates/user-about.html', '#template-container', selectedUser)

        } else {
            // console.log('error')
            app.notFound()
        }
    }, function (err) {
        console.log(err);
        app.notFound()

    })
}

export {userAboutController}