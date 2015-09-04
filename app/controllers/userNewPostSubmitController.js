import {templateHandler} from 'templateHandler'
import User from 'user'
import Post from 'post'
import {utilities} from 'utilities'
import {controller} from 'controller'
import {validator} from 'validator'


function userNewPostSubmitController(userName, title, content, tags, app) {

    var secureTitle = title, //validator.textInputValidator.scriptTagValidator(title),
        secureContent = validator.textInputValidator.scriptTagValidator(content),
        secureTags = validator.textInputValidator.scriptTagValidator(tags);

    var selectedUser = User.current(),

        author = selectedUser.attributes.name,
        authorName = userName;

    console.log(selectedUser);
    var tagsArray = utilities.tagsSplitter(secureTags);

    function sendPost() {
        Post.create(secureTitle, secureContent, tagsArray, author, authorName)
    }

    if (selectedUser) {

        localStorage.setItem('blog', JSON.stringify({
            username: selectedUser.attributes.username,
            name: selectedUser.attributes.name
        }));
        controller.navbarController();

        if (validator.textInputValidator.contentLengthValidator(content)) {
            templateHandler.loadDataTemplate('templates/user-new-post-submit.html',
                '#template-container',
                {
                    authorName: authorName,
                    username: author,
                    title: secureTitle,
                    content: secureContent,
                    tags: tagsArray
                },
                sendPost)
        } else {
            alert('Post content must be at least 200 symbols! /n  (white spaces incl :P)');
            window.history.back();
        }

    } else {
        //console.log(window.location)
        window.location.hash = '#/login-please'
    }
}

export
{
    userNewPostSubmitController
}
