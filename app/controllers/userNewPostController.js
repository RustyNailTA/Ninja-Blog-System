import {templateHandler} from 'templateHandler'
import User from 'user'
import Post from 'post'
import {controller} from 'controller'

function userNewPostController(userName, app){
    var selectedUser = User.current().attributes;

    if (selectedUser) {
        function launchTrumbowyg(){
            $('#content').trumbowyg();
        }

        localStorage.setItem('blog',JSON.stringify({username: selectedUser.username, name: selectedUser.name}));

        controller.navbarController();
        templateHandler.loadDataTemplate('templates/user-new-post.html', '#template-container', selectedUser, launchTrumbowyg)
    } else {
        window.location.hash = '#/login-please'
    }
}

export {userNewPostController}