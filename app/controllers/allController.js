import {templateHandler} from 'templateHandler'
import {testDB} from 'testDB'
import Post from 'post'
import {controller} from 'controller'
import {utilities} from 'utilities'


function allController(postsPerPage, pageNumber) {

    pageNumber = pageNumber || 1;
    postsPerPage = postsPerPage || 5;

    Post.getAllPostsPaging(postsPerPage, pageNumber).then(function (posts) {
        templateHandler.loadDataTemplate('templates/all.html', '#template-container', {posts: posts}, utilities.fbShareHandler);
        var pagesCount = posts.pagesCount;
        utilities.makeActivePageBtn(pageNumber, pagesCount)
    }, function (err) {

    });
    Post.getAllPosts().then(function (posts) {
        //templateHandler.loadDataTemplate('templates/all.html', '#template-container', { posts: posts }, utilities.fbShareHandler);
    }, function (err) {
        console.log(err);
    })
}

export
{
    allController
}
