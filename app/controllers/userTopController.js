import {templateHandler} from 'templateHandler'
import {controller} from 'controller'
import Post from 'post'


function userTopController(authorName){
    //console.log(userName)

    Post.getTopNPostsByViews(10, authorName).then(function (posts) {

        if(posts && posts.length> 0){
            localStorage.setItem('blog',JSON.stringify({username: posts[0].authorName, name: posts[0].author}));
            //console.log(posts)

        }

        controller.navbarController()

        templateHandler.loadDataTemplate('templates/top.html', '#template-container', { posts: posts });
    }, function (err) {
        console.log(err);
    });
}

export {userTopController}