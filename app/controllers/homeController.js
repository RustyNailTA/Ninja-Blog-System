import {templateHandler} from 'templateHandler'
import {testDB} from 'testDB'
import {controller} from 'controller'
import Post from 'post'

function homeController() {
    Post.getLatestNPosts(5).then(function (posts) {
        console.log(posts)

        posts[0].active = true;
        templateHandler.loadDataTemplate('templates/home.html', '#template-container', { posts: posts });
    }, function (err) {
        console.log(err);
    });
}

export {homeController}
