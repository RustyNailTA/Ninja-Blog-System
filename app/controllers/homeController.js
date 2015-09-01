import {templateHandler} from 'templateHandler'
import {testDB} from 'testDB'
import {controller} from 'controller'
import Post from 'post'



function homeController(){

    //TODO: GET ONLY LAST 5 POSTS
    Post.getAllPosts().then(function (posts) {
        posts[0].active=true;

        console.log(posts[0])
        templateHandler.loadDataTemplate('templates/home.html', '#template-container', { posts: posts });
    }, function (err) {
        console.log(err);
    });
}

export {homeController}

