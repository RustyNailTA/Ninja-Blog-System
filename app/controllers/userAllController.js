import {templateHandler} from 'templateHandler'
import {testDB} from 'testDB'
import {controller} from 'controller'
import Post from 'post'
import {utilities} from 'utilities'




function userAllController(userName, app){
    //console.log(userName)
    Post.getAllPostsByAuthor(userName).then(function (posts) {
       // console.log(posts)

        if(posts && posts.length > 0){
            localStorage.setItem('blog',JSON.stringify({username: posts[0].authorName, name: posts[0].author}));
            console.log(posts)
        }

        controller.navbarController()

        templateHandler.loadDataTemplate('templates/all.html', '#template-container', { posts: posts }, utilities.fbShareHandler);
    }, function (err) {
        //console.log(err);
    })
}

export {userAllController}
