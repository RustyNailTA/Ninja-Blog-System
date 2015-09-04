import {templateHandler} from 'templateHandler'
import fbApi from 'fbApi'
import User from 'user'
import Post from 'post'
import {controller} from 'controller'
import {Parse as Parse} from 'parse'

function logOutController() {
    var currentUser = User.current();
    User.logOut();
    localStorage.setItem('blog', JSON.stringify({username: "", name: ""}));

    controller.navbarController();

    if (localStorage.getItem('user')) {
        currentUser = JSON.parse(localStorage.getItem('user'));
        localStorage.removeItem('user');
    }

    if (currentUser) {
        templateHandler.loadDataTemplate('templates/logout-success.html', '#template-container', currentUser.attributes)
        templateHandler.loadStaticTemplate('templates/login-panel.html', '#template-navigation-log')
    }
}

export {logOutController}

