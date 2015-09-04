import {templateHandler} from 'templateHandler'
import {testDB} from 'testDB'
import {controller} from 'controller'
import Post from 'post'

function homeController(app) {
    Post.getLatestNPosts(5).then(function (posts) {
       // console.log(posts)

        if(posts && post.length > 0){
            posts[0].active = true;
            templateHandler.loadDataTemplate('templates/home.html', '#template-container', { posts: posts });
        } else{
            templateHandler.loadDataTemplate('templates/home.html', '#template-container', {posts: [{title: 'No post yet!', active: true}]});
        }
    }, function (err) {
       app.notFound();
    });
}

export {homeController}
