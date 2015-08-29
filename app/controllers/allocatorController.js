import {templateHandler} from 'templateHandler'
import {testDB} from 'testDB'
import {controller} from 'controller';


function allocatorController(selector, app) {

    //console.log('Allocator')


    var selectedUser = _.find(testDB.users, function (user) {
       // console.log(user.posts);
        return user.username === selector;
    });

    var selectedPost = _.find(testDB.posts, function (post) {
        return post.id == selector
    })

    if (selectedUser) {
        var userPosts = {
            posts: selectedUser.posts
        };
        templateHandler.loadDataTemplate('templates/user-about.html', '#template-container', userPosts)

    } else if (selectedPost) {
        //console.log(selectedPost)
        controller.singlePostFullVIewController(selectedPost)
    }
    else {
        //console.log('error')
        app.notFound()
    }
}

export {allocatorController}
