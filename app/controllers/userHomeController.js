import {templateHandler} from 'templateHandler'
import {testDB} from 'testDB'
import User from 'user'
import {controller} from 'controller'




function userHomeController(userName, app){
   User.getUserByUserName(userName).then(function (user) {
       if(user){
           localStorage.setItem('blog', user.username)
           controller.navbarController();
           templateHandler.loadDataTemplate('templates/user-about.html', '#template-container', user)
       } else{
           app.notFound();
       }
    }, function (error) {
        app.notFound()
    });
}

export {userHomeController}
