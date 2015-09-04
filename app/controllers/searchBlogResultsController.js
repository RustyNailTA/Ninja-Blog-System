import {controller} from 'controller'
import {templateHandler} from 'templateHandler'
import {testDB} from 'testDB'
import User from 'user'
import Post from 'post'
import {utilities} from 'utilities'

function searchBlogResultsController(author, data, postsPerPage, pageNumber, app) {
    pageNumber = pageNumber || 1;
    postsPerPage = postsPerPage || 5;

    var request = utilities.tagsSplitter(data)[0];

    User.getUserByUsername(author).then(function (user) {
        if (user) {
            localStorage.setItem('blog', JSON.stringify({username: user.username, name: user.name}));
            controller.navbarController();

            Post.getAllPostsPagingAuthorAndTag(author, request, postsPerPage, pageNumber).then(function (posts) {
                var username,
                    name,
                    pagesCount = posts.pagesCount;

                if (posts && posts.length > 0) {
                    username = posts[0].authorName;
                    name = posts[0].author;
                }

                templateHandler.loadDataTemplate('templates/search-results.html',
                    '#template-container',
                    {
                        posts: posts,
                        request: request,
                        blog: {
                            username: username,
                            name: name
                        }
                    },
                    utilities.fbShareHandler);
                utilities.makeActivePageBtn(pageNumber, pagesCount)
            }, function (err) {
                app.notFound()
            });
        } else {
            app.notFound();
        }
    }, function (error) {
        app.notFound()
    });
}

export {searchBlogResultsController}