import {templateHandler} from 'templateHandler'
import User from 'user'
import Post from 'post'
import {controller} from 'controller';
import {utilities} from 'utilities'


function userSinglePostFullVIewCntroller(authorName, postId, app) {

    Post.getPostByAuthorAndId(authorName, postId).then(function (post) {

        if(post){
            var views = post.attributes.views + 1;

            post.set('views', views);
            post.save();

            localStorage.setItem('blog',JSON.stringify({username: post.attributes.authorName, name: post.attributes.author}));
            templateHandler.loadDataTemplate('templates/postFullView.html', '#template-container', post.attributes,  utilities.fbShareHandler);
            controller.navbarController()
        }else{
            app.notFound()
        }

    }, function (err) {
        app.notFound()
    });
}

export {userSinglePostFullVIewCntroller}

