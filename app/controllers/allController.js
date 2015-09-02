import {templateHandler} from 'templateHandler'
import {testDB} from 'testDB'
import Post from 'post'
import {controller} from 'controller'
import {utilities} from 'utilities'



function allController() {
    Post.getAllPosts().then(function (posts) {
        templateHandler.loadDataTemplate('templates/all.html', '#template-container', { posts: posts }, utilities.fbShareHandler);
    }, function (err) {
        console.log(err);
    })
}

export {allController}
