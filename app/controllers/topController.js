import {templateHandler} from 'templateHandler'
import {testDB} from 'testDB'
import {controller} from 'controller'
import Post from 'post'

function topController(app {
    Post.getTopNPostsByViews(10).then(function (posts) {
        templateHandler.loadDataTemplate('templates/top.html', '#template-container', { posts: posts });
    }, function (err) {
        app.notFound();
    });
}

export {topController}
