import {templateHandler} from 'templateHandler'
import User from 'user'
import Post from 'post'
import {controller} from 'controller'


function userHomeController(userName, app) {



    Post.getLatestNPosts(3, userName).then(function (posts) {

        console.log(posts)



        if (posts && posts.length > 0) {


            localStorage.setItem('blog', JSON.stringify({username: posts[0].authorName, name: posts[0].author}));
            controller.navbarController();
           // console.log(posts[0]);
            posts[0].active = true;

            templateHandler.loadDataTemplate('templates/home.html', '#template-container', {posts: posts})
        } else {
            User.getUserByUsername(userName).then(function (user) {
                if (user) {

                    localStorage.setItem('blog',JSON.stringify({username: user.username, name: user.name}));

                    controller.navbarController();
                    templateHandler.loadDataTemplate('templates/home.html', '#template-container', {posts: [{title: 'No post yet!', active: true}]})
                } else {
                    app.notFound();
                }
            }, function (error) {
                app.notFound()
            });

        }

    }, function (err) {
        console.log(err);
    });
}

export {userHomeController}
