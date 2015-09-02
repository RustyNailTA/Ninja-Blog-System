import {templateHandler} from 'templateHandler'
import {testDB} from 'testDB'
import User from 'user'
import {controller} from 'controller'

function userAboutController(username, app) {
    User.getUserByUsername(username).then(function (user) {
        if (user) {

            localStorage.setItem('blog',JSON.stringify({username: user.username, name: user.name}));

            controller.navbarController();
            templateHandler.loadDataTemplate('templates/user-about.html', '#template-container', user)
        } else {
            app.notFound();
        }
    }, function (error) {
        app.notFound()
    });
}

export {userAboutController}
