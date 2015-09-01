import {templateHandler} from 'templateHandler'
import User from 'user'
import Post from 'post'
import {controller} from 'controller'


function userHomeController(userName, app) {

    Post.getAllPostsByAuthor(userName).then(function (posts) {
        if (posts && posts.length > 0) {


            localStorage.setItem('blog', userName);
            controller.navbarController();
            //console.log(posts)
            posts[0].active = true;

            templateHandler.loadDataTemplate('templates/home.html', '#template-container', {posts: posts})
        } else {
            templateHandler.loadDataTemplate('templates/user-about.html', '#template-container', {username: userName})
        }
    }, function (error) {
        app.notFound()
    });
}

export {userHomeController}
