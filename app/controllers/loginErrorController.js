import {templateHandler} from 'templateHandler'
import {testDB} from 'testDB'
import fbApi from 'fbApi'
import User from 'user'
import Post from 'post'
import {controller} from 'controller';

function loginErrorController(){
   // console.log('Login Error')
    var currentUser = User.current();

        templateHandler.loadDataTemplate('templates/login-error.html', '#template-container', currentUser.attributes)
    //}else {
    //    templateHandler.loadStaticTemplate('templates/login-panel.html', '#template-navigation-log')
    //}


}

export {loginErrorController}

