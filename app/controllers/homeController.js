import {templateHandler} from 'templateHandler'
import {controller} from 'controller'
import Post from 'post'

function homeController(app) {
    Post.getLatestNPosts(5).then(function (posts) {

        if(posts && posts.length > 0){
            posts[0].active = true;
            templateHandler.loadDataTemplate('templates/home.html', '#template-container', { posts: posts });
        } else{
            templateHandler.loadDataTemplate('templates/home.html', '#template-container', {posts: [{title: 'No posts yet!', active: true}]});
        }
    }, function (err) {
       app.notFound();
    });
}

export {homeController}
