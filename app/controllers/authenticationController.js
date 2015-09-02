import {templateHandler} from 'templateHandler'
import {testDB} from 'testDB'
import fbApi from 'fbApi'
import User from 'user'
import Post from 'post'
import {controller} from 'controller';

function authenticationController() {
    //console.log('At authentication')

    var currentUser;
    //
    if (localStorage.getItem('user')) {
        currentUser = JSON.parse(localStorage.getItem('user'));
    } else {
        currentUser = User.current();
    }
    //name = currentUser.get('username');

    //console.log(currentUser.attributes)
    //console.log(name)

    if (currentUser) {

        templateHandler.loadDataTemplate('templates/user-panel.html', '#template-navigation-log', currentUser.attributes)
        localStorage.setItem('currentLogged', currentUser.attributes.name)

    } else {

        templateHandler.loadStaticTemplate('templates/login-panel.html', '#template-navigation-log')
    }
}

export {authenticationController}
