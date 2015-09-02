import {controller} from 'controller'
import {templateHandler} from 'templateHandler'
import {testDB} from 'testDB'
import User from 'user'
import Post from 'post'
import {utilities} from 'utilities'



function searchResultsController(data, app){

    var request = utilities.tagsSplitter(data)[0];

    localStorage.setItem('blog',JSON.stringify({username: "", name: ""}))
    controller.navbarController()

    Post.getAllPostsByTagOrAuthor(request).then(function (posts) {
        templateHandler.loadDataTemplate('templates/search-results.html', '#template-container',  {posts: posts, request: request})

    }, function (err) {
        app.notFound();
        console.log(`Could not fetch posts: ${err.message}`);
    });
}

export {searchResultsController}
