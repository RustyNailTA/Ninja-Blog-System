import {templateHandler} from 'templateHandler'
import {testDB} from 'testDB'
import {controller} from 'controller'
import Post from 'post'



function topController() {
    Post.getTopNPostsByViews(10).then(function (posts) {
        templateHandler.loadDataTemplate('templates/top.html', '#template-container', { posts: posts });
    }, function (err) {
        console.log(err);
    });
}

export {topController}
