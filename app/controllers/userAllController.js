import {templateHandler} from 'templateHandler'
import Post from 'post'
import User from 'user'
import {controller} from 'controller'
import {utilities} from 'utilities'

function userAllController(author, postsPerPage, pageNumber, app) {
    pageNumber = pageNumber || 1;
    postsPerPage = postsPerPage || 5;

    User.getUserByUsername(author).then(function (user) {
        if (user) {
            localStorage.setItem('blog', JSON.stringify({username: user.username, name: user.name}));
            controller.navbarController();

            Post.getAllPostsPagingAuthor(author, postsPerPage, pageNumber).then(function (posts) {
                var username,
                    name,
                    pagesCount = posts.pagesCount;

                if (posts && posts.length > 0) {
                    username = posts[0].authorName;
                    name = posts[0].author;
                }

                templateHandler.loadDataTemplate('templates/all.html',
                    '#template-container',
                    {
                        posts: posts,
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

export
{
    userAllController
}

