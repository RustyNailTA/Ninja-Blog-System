import {templateHandler} from 'templateHandler'
import {testDB} from 'testDB'
import Post from 'post'

function allController() {
    Post.getAllPosts().then(function (posts) {
        templateHandler.loadDataTemplate('templates/all.html', '#template-container', { posts: posts });
    }, function (err) {
        console.log(err);
    })
}

export {allController}
