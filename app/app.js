import {controller} from 'controller';
import {templateHandler} from 'templateHandler'
import fbApi from 'fbApi'
import User from 'user'
import Post from 'post'
import {utilities} from 'utilities'
import {Parse as Parse} from 'parse'
import {CONSTRAINTS} from 'CONSTRAINTS'

function app() {
    utilities.hideDropdown();
    utilities.handlebarsRegisterHelpers();

    (function (Parse) {
        Parse.initialize("by6R7kv1sgAk4lRHRQHZkSGogK9ow8JdZAcLNk55",
            "uJcZm7i4Xvc11Zs9R8mEAHBxS3zVwdATQnEtSbuB");
    })(Parse);

    var app = $.sammy('#main-content', function () {
        this.notFound = function () {
            controller.notFoundController();
            controller.navbarController()
        };

        this.get('#/', function () {
            localStorage.setItem('blog', JSON.stringify({username: "", name: ""}))
            controller.navbarController();
            controller.authenticationController();
            controller.homeController(this);
        });

        this.get('#/home', function () {
            localStorage.setItem('blog', JSON.stringify({username: "", name: ""}))
            controller.navbarController()

            controller.authenticationController();
            controller.homeController(this);

        });

        this.get('#/top', function () {
            localStorage.setItem('blog', JSON.stringify({username: "", name: ""}));
            controller.navbarController();
            controller.topController(this);
            controller.authenticationController();
        });

        this.get('#/all', function () {
            localStorage.setItem('blog', JSON.stringify({username: "", name: ""}));
            controller.navbarController();
            controller.allController();
            controller.authenticationController();
        });

        this.get('#/all-posts', function () {
            var year = this.params['year'],
                month = this.params['month'],
                page = 1;

            localStorage.setItem('blog', JSON.stringify({username: "", name: ""}));

            if (month && year) {
                controller.postsByMonthController(month, year, CONSTRAINTS.POSTS_PER_PAGE, page, this);
            } else {

                controller.allController(CONSTRAINTS.POSTS_PER_PAGE, page, this);
            }

            controller.navbarController();
            controller.authenticationController();
        });

        this.get('#/all-posts/:page', function () {
            var page = parseInt(this.params['page']);

            localStorage.setItem('blog', JSON.stringify({username: "", name: ""}));
            controller.allController(CONSTRAINTS.POSTS_PER_PAGE, page, this);
            controller.navbarController();
            controller.authenticationController();
        });

        this.get('#/search-results', function () {
            var request = this.params['request'];
            var page = 1;

            localStorage.setItem('blog', JSON.stringify({username: "", name: ""}));
            controller.navbarController();

            controller.searchResultsController(request, CONSTRAINTS.POSTS_PER_PAGE, page, this);
            controller.authenticationController();
        });

        this.get('#/search-results/:page', function () {
            var page = parseInt(this.params['page']),
                request = this.params['request'];

            localStorage.setItem('blog', JSON.stringify({username: "", name: ""}));
            controller.navbarController();

            controller.searchResultsController(request, CONSTRAINTS.POSTS_PER_PAGE, page, this);
            controller.authenticationController();
        });

        this.get('#/all-users', function () {
            localStorage.setItem('blog', JSON.stringify({username: "", name: ""}));
            controller.navbarController();

            controller.allUsersController();
            controller.authenticationController();
        });


        this.get('#/about', function () {
            localStorage.setItem('blog', JSON.stringify({username: "", name: ""}));
            controller.navbarController();

            controller.aboutController();
            controller.authenticationController();

        });

        this.get('#/login-error', function () {
            localStorage.setItem('blog', JSON.stringify({username: "", name: ""}));
            controller.navbarController();

            controller.aboutController();
        });

        this.get('#/login', function () {
            localStorage.setItem('blog', JSON.stringify({username: "", name: ""}));
            controller.navbarController();

            controller.loginController();
            controller.authenticationController();
        });

        this.get('#/login-please', function () {
            localStorage.setItem('blog', JSON.stringify({username: "", name: ""}));
            controller.navbarController();

            controller.notLoggedController();
            controller.authenticationController();
        });

        this.get('#/register', function () {
            localStorage.setItem('blog', JSON.stringify({username: "", name: ""}));
            controller.navbarController();

            controller.registerController();
            controller.authenticationController();
        });

        this.get('#/register-successful', function () {
            controller.registrationSuccessfulControllers();
            controller.authenticationController();
        });

        this.get('#/registration-error', function () {
            controller.authenticationController();
        });

        this.get('#/:user', function () {
            var selector = this.params['user'];

            controller.userHomeController(selector, this);
            controller.authenticationController();
        });

        this.get('#/:user/home', function () {
            var selector = this.params['user'];

            controller.userHomeController(selector, this);
            controller.authenticationController();
        });

        this.get('#/:user/about', function () {
            var userName = this.params['user'];

            controller.authenticationController();
            controller.userAboutController(userName, this);
        });

        this.get('#/:user/logout', function () {
            var userName = this.params['user'];

            localStorage.setItem('blog', JSON.stringify({username: "", name: ""}));

            controller.logOutController();
        });

        this.get('#/:user/top', function () {
            var selector = this.params['user'];

            controller.userTopController(selector);
            controller.authenticationController();
        });

        this.get('#/:user/all-posts', function () {
            var user = this.params['user'];
            var year = this.params['year'];
            var month = this.params['month'];
            var page = 1;

            if (month && year) {
                controller.postsByMonthController(user, year, month);
            } else {
                controller.userAllController(user, CONSTRAINTS.POSTS_PER_PAGE, page, this);
            }

            controller.navbarController();
            controller.authenticationController();
        });

        this.get('#:user/all-posts/:page', function () {
            var user = this.params['user'];
            var page = parseInt(this.params['page']);

            controller.userAllController(user, CONSTRAINTS.POSTS_PER_PAGE, page, this);
            controller.navbarController();
            controller.authenticationController();
        });

        this.get('#/:user/new-post', function () {
            var selector = this.params['user'];

            controller.userNewPostController();
            controller.authenticationController();
        });

        this.get('#/:user/new-post-submit', function () {
            var selector = this.params['user'],
                title = this.params.title,
                content = this.params.content,
                tags = this.params.tags,
                author = this.params.user;

            controller.userNewPostSubmitController(author, title, content, tags, this);
            controller.authenticationController();
        });

        this.get('#/:user/settings', function () {
            var userName = this.params['user'];

            controller.userSettingsController(userName, this);
            controller.authenticationController();
        });

        this.get('#/:user/settings-blog', function () {
            var selector = this.params['user'];

            controller.userSettingsBlogController(selector);
            controller.authenticationController();
        });

        this.get('#/:user/settings-personal', function () {
            var selector = this.params['user'];

            controller.userSettingsPersonalController(this);
            controller.authenticationController();
        });

        this.get('#/:user/user-settings-personal-submit', function () {
            var name = this.params.name,
                about = this.params.about,
                avatar = this.params.avatar,
                gitHub = this.params.gitHub,
                telerikAcademy = this.params.telerikAcademy,
                googlePlus = this.params.googlePlus,
                linkedIn = this.params.linkedIn,
                flickr = this.params.flickr,
                twitter = this.params.twitter,
                skype = this.params.skype;

            controller.userSettingsSubmitController(name, about, avatar, gitHub, telerikAcademy, googlePlus, linkedIn, flickr, twitter, skype, this);
            controller.authenticationController();
        });

        this.get('#/:user/search-results', function () {
            var request = this.params['request'],
                username = this.params['user'];

            controller.searchBlogResultsController(username, request, this);
            controller.authenticationController();
        });

        this.get('#/:user/search-results', function () {
            var request = this.params['request'],
                username = this.params['user'];

            var page = 1;

            controller.searchBlogResultsController(username, request, CONSTRAINTS.POSTS_PER_PAGE, page, this);
            controller.authenticationController();
        });

        this.get('#/:user/search-results/:page', function () {
            var page = parseInt(this.params['page']),
                request = this.params['request'],
                username = this.params['user'];

            controller.searchBlogResultsController(username, request, CONSTRAINTS.POSTS_PER_PAGE, page, this);
            controller.authenticationController();
        });


        this.get('#/:user/:postId', function () {
            var user = this.params['user'],
                postID = this.params['postId'];

            controller.userSinglePostFullVIewCntroller(user, postID, this);
            controller.authenticationController();
        });
    });

    app.run('#/');

    return app;
}

export {app};

