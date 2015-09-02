import {templateHandler} from 'templateHandler'
import User from 'user'
import Post from 'post'
import {controller} from 'controller';


function userSinglePostFullVIewCntroller(authorName, postId, app) {

    Post.getPostByAuthorAndId(authorName, postId).then(function (post) {

        if(post){
            localStorage.setItem('blog',JSON.stringify({username: post.authorName, name: post.author}));
            //console.log(posts)

        }

        controller.navbarController()

        templateHandler.loadDataTemplate('templates/postFullView.html', '#template-container', post);
    }, function (err) {
        console.log(err);
    });
}

export {userSinglePostFullVIewCntroller}

