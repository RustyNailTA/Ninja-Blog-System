import {templateHandler} from 'templateHandler'
import fbApi from 'fbApi'
import User from 'user'
import Post from 'post'
import {controller} from 'controller';

function loginErrorController() {
    var currentUser = User.current();

    templateHandler.loadDataTemplate('templates/login-error.html', '#template-container', currentUser.attributes);
}

export {loginErrorController}

