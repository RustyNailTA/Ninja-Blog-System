userNewPostSubmitController

import {templateHandler} from 'templateHandler'
import {testDB} from 'testDB'
import User from 'user'
import Post from 'post'


function userNewPostSubmitController(userName, title, content, tags, app){

    var selectedUser = User.current().attributes,
        author = selectedUser.username;


    function sendPost(){
        Post.create(title, content, tags, author)
    }


    if (selectedUser) {
        templateHandler.loadDataTemplate('templates/user-new-post-submit.html',
            '#template-container',
            {username: author,
            title: title,
            content: content,
            tags: tags},
            sendPost)


    } else {
        //console.log(window.location)
        window.location.hash = '#/login-please'
    }
}

export {userNewPostSubmitController}