searchResultsController

import {templateHandler} from 'templateHandler'
import {testDB} from 'testDB'
import User from 'user'
import Post from 'post'
import {utilities} from 'utilities'



function searchResultsController(data, app){

    var request = utilities.tagsSplitter(data)[0];

    Post.getAllPostsByTagOrAuthor(request).then(function (posts) {
        templateHandler.loadDataTemplate('templates/search-results.html', '#template-container',  {posts: posts, request: request})

    }, function (err) {

        app.notFound();
        console.log(`Could not fetch posts: ${err.message}`);
    });


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

export {searchResultsController}
