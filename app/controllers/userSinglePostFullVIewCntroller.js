import {templateHandler} from 'templateHandler'
import {testDB} from 'testDB'

function userSinglePostFullVIewCntroller(userName, postIdd, app) {

    var selectedUser = _.find(testDB.users, function (user) {
        // console.log(user.posts);
        return user.username === userName;
    });

    var selectedPost = _.find(testDB.posts, function (post) {
        return post.id == postIdd
    })


    if (selectedUser && selectedPost) {
        var userPosts = selectedPost;
        templateHandler.loadDataTemplate('templates/postFullView.html', '#template-container', userPosts)

    } else {
        console.log('error')
        app.notFound()
    }

    templateHandler.loadDataTemplate('templates/postFullView.html', '#template-container', post)
}

export {userSinglePostFullVIewCntroller}

