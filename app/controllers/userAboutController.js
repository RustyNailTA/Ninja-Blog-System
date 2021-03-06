import {templateHandler} from 'templateHandler'
import User from 'user'
import {controller} from 'controller'

function userAboutController(username, app) {
    User.getUserByUsername(username).then(function (user) {
        if (user) {
            localStorage.setItem('blog', JSON.stringify({username: user.username, name: user.name}));

            function userAboutEmailButtonController(){
                $('#about-email-label').hide();
                $('#about-email-info').on('click', function () {
                    $('#about-email-label').toggle(500);
                })
            }

            controller.navbarController();
            templateHandler.loadDataTemplate('templates/user-about.html', '#template-container', user, userAboutEmailButtonController);
        } else {
            app.notFound();
        }
    }, function (error) {
        app.notFound()
    });
}

export {userAboutController}
