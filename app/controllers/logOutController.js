import {templateHandler} from 'templateHandler'
import {testDB} from 'testDB'
import db from 'db'
import User from 'user'
import Post from 'post'
import {controller} from 'controller';

function logOutController(){
    console.log('At log out')
    var currentUser = User.current();
   // console.log(currentUser);

    User.logOut();
    //name = currentUser.get('username');
    //console.log(currentUser.attributes);
    //console.log(name)

    if(currentUser){
        templateHandler.loadDataTemplate('templates/logout-success.html', '#template-container', currentUser.attributes)
    }else {
        templateHandler.loadStaticTemplate('templates/login-panel.html', '#template-navigation-log')
    }


}

export {logOutController}

