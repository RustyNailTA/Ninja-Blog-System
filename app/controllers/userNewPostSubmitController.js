import {templateHandler} from 'templateHandler'
import {testDB} from 'testDB'
import User from 'user'
import Post from 'post'
import {utilities} from 'utilities'



function userNewPostSubmitController(userName, title, content, tags, app){

    var selectedUser = User.current().attributes,
        author = selectedUser.username;

    var tagsArray = utilities.tagsSplitter(tags);
    console.log(tagsArray)


    function sendPost(){
        Post.create(title, content, tagsArray, author)
    }


    if (selectedUser) {
        templateHandler.loadDataTemplate('templates/user-new-post-submit.html',
            '#template-container',
            {username: author,
            title: title,
            content: content,
            tags: tagsArray},
            sendPost)


    } else {
        //console.log(window.location)
        window.location.hash = '#/login-please'
    }
}

export {userNewPostSubmitController}