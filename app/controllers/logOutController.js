import {templateHandler} from 'templateHandler'
import {testDB} from 'testDB'
import fbApi from 'fbApi'
import User from 'user'
import Post from 'post'
import {controller} from 'controller'
import {Parse as Parse} from 'parse'

function logOutController(){
    //console.log('At log out')
    var currentUser = User.current();
   // console.log(currentUser);
    User.logOut();
    localStorage.setItem('blog',JSON.stringify({username: "", name: ""}))

    controller.navbarController()


    if(localStorage.getItem('user')){
        currentUser = JSON.parse(localStorage.getItem('user'));
        localStorage.removeItem('user');

    }




    //name = currentUser.get('username');
    //console.log(currentUser.attributes);
    //console.log(name)
    if(currentUser){

        templateHandler.loadDataTemplate('templates/logout-success.html', '#template-container', currentUser.attributes)
        templateHandler.loadStaticTemplate('templates/login-panel.html', '#template-navigation-log')
    }
    //else {
    //    templateHandler.loadStaticTemplate('templates/login-panel.html', '#template-navigation-log')
    //}
}

export {logOutController}

