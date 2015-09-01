import {templateHandler} from 'templateHandler'
import {testDB} from 'testDB'
import {controller} from 'controller'
import Post from 'post'



function topController() {

    //TODO: GET ONLY TOP 10 POSTS (SOTRED BY RATING)
    Post.getAllPosts().then(function (posts) {
        templateHandler.loadDataTemplate('templates/top.html', '#template-container', { posts: posts });
    }, function (err) {
        console.log(err);
    });
}

export {topController}
