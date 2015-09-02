import {templateHandler} from 'templateHandler'
import {testDB} from 'testDB'
import User from 'user'
import Post from 'post'
import {utilities} from 'utilities'
import {controller} from 'controller'



function userNewPostSubmitController(userName, title, content, tags, app) {

    var selectedUser = User.current(),

        author = selectedUser.attributes.name,
        authorName = userName;
    //console.log('NEW POST');
    //console.log(author);
    //console.log(selectedUser);

    console.log(selectedUser);
    var tagsArray = utilities.tagsSplitter(tags);
    //console.log(tagsArray)


    function sendPost() {
        Post.create(title, content, tagsArray, author, authorName)
    }


    if (selectedUser) {

        localStorage.setItem('blog',JSON.stringify({username: selectedUser.attributes.username, name: selectedUser.attributes.name}));


        controller.navbarController();

        templateHandler.loadDataTemplate('templates/user-new-post-submit.html',
            '#template-container',
            {
                authorName: authorName,
                username: author,
                title: title,
                content: content,
                tags: tagsArray
            },
            sendPost)


    } else {
        //console.log(window.location)
        window.location.hash = '#/login-please'
    }
}

export
{
    userNewPostSubmitController
}
