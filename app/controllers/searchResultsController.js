import {controller} from 'controller'
import {templateHandler} from 'templateHandler'
import {testDB} from 'testDB'
import User from 'user'
import Post from 'post'
import {utilities} from 'utilities'




function searchResultsController(data, postsPerPage, pageNumber, app){

    pageNumber = pageNumber || 1;
    postsPerPage = postsPerPage || 5;

    var request = utilities.tagsSplitter(data)[0];

    pageNumber = pageNumber || 1;
    postsPerPage = postsPerPage || 5;

    Post.getAllPostsPagingAuthorOrTag(request, postsPerPage, pageNumber).then(function (posts) {
        templateHandler.loadDataTemplate('templates/search-results.html', '#template-container', {posts: posts, request: request}, utilities.fbShareHandler);
        var pagesCount = posts.pagesCount;
        utilities.makeActivePageBtn(pageNumber, pagesCount)
    }, function (err) {
        app.notFound()
    });
}

export {searchResultsController}
