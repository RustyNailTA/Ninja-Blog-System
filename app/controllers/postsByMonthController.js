import {templateHandler} from 'templateHandler'
import Post from 'post'
import {controller} from 'controller'
import {utilities} from 'utilities'

function postsByMonthController(month, year, postsPerPage, pageNumber, app) {
    pageNumber = pageNumber || 1;
    postsPerPage = postsPerPage || 5;

    Post.getAllPosts().then(function (posts) {
        Post.getPostsMonths().then(function (results) {
            Post.getAllPostsPagingMontnAndYear(month, year, postsPerPage, pageNumber).then(function (posts) {
                posts.archiveDates = results;

                templateHandler.loadDataTemplate('templates/all.html', '#template-container', {posts: posts}, utilities.fbShareHandler);
                var pagesCount = posts.pagesCount;
                utilities.makeActivePageBtn(pageNumber, pagesCount)
            }, function (err) {
                app.notFound()
            });
        });
    }, function (err) {
        app.notFound();
    });
}

export {postsByMonthController}
