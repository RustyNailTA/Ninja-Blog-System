import {controller} from 'controller';
import {templateHandler} from 'templateHandler'
import fbApi from 'fbApi'
import User from 'user'
import Post from 'post'
import {utilities} from 'utilities'
import {Parse as Parse} from 'parse'

//import 'handlebars';
//import 'sammy';
//import 'handlebars';
//import 'jquery';
//import 'bootstrap';


function app() {
    utilities.hideDropdown();
    //console.log('Enter app');
    //console.log(Sammy);

    (function (Parse) {
        Parse.initialize("by6R7kv1sgAk4lRHRQHZkSGogK9ow8JdZAcLNk55",
            "uJcZm7i4Xvc11Zs9R8mEAHBxS3zVwdATQnEtSbuB");
    })(Parse);


    //Post.getAllPostsByAuthor('klati').then(function (posts) {
    //    console.log('By author (klati): ');
    //    console.log(posts);
    //}, function (err) {
    //    console.log(`Could not fetch posts: ${err.message}`);
    //});
    //
    //Post.getAllPostsByTag('tag1').then(function (posts) {
    //    console.log('By tag (tag1): ');
    //    console.log(posts);
    //}, function (err) {
    //    console.log(`Could not fetch posts: ${err.message}`);
    //});
    //
    //Post.getAllPostsByTagOrAuthor('ivko').then(function (posts) {
    //    console.log('By TagOrAuthor (ivko): ');
    //    // there's a post with one author ivko, no tag matches but still one result
    //    console.log(posts);
    //}, function (err) {
    //    console.log(`Could not fetch posts: ${err.message}`);
    //});
    //
    //Post.getAllPostsByTagAndAuthor('ivko').then(function (posts) {
    //    console.log('By TagAndAuthor (ivko): ');
    //    // no results, matches only one post but there is no ivko tag
    //    console.log(posts);
    //}, function (err) {
    //    console.log(`Could not fetch posts: ${err.message}`);
    //});

    //localStorage.setItem('blog',JSON.stringify({username: "", name: ""}))


    var app = $.sammy('#main-content', function () {

        //console.log('After Sammy');

        this.notFound = function () {
            // console.log('not found')
            controller.notFoundController();
            controller.navbarController()

        };


        this.get('#/', function () {

            //var selector = this.params['page'];
            //console.log(selector)
            localStorage.setItem('blog',JSON.stringify({username: "", name: ""}))
            controller.navbarController()


            controller.authenticationController();

            controller.homeController();
        });

        this.get('#/home', function () {
            localStorage.setItem('blog',JSON.stringify({username: "", name: ""}))
            controller.navbarController()

            controller.authenticationController();
            controller.homeController();

        });

        this.get('#/top', function () {
            localStorage.setItem('blog',JSON.stringify({username: "", name: ""}));
            controller.navbarController()

            controller.topController();
            controller.authenticationController();

        });

        this.get('#/all', function () {
            localStorage.setItem('blog',JSON.stringify({username: "", name: ""}));
            controller.navbarController()

            controller.allController();
            controller.authenticationController();

        });

        this.get('#/all-posts', function () {

            var year = this.params['year'];
            var month = this.params['month'];

            if(month && year){
                controller.postsByMonthController();
                controller.navbarController()
            }else{

                localStorage.setItem('blog',JSON.stringify({username: "", name: ""}));
                controller.navbarController()
            }

            //console.log(month + '' + year)


            controller.allController();
            controller.authenticationController();

        });


        this.get('#/all-users', function () {
            localStorage.setItem('blog',JSON.stringify({username: "", name: ""}))
            controller.navbarController()



            controller.allUsersController();
            controller.authenticationController();

        });

        this.get('#/about', function () {
            localStorage.setItem('blog',JSON.stringify({username: "", name: ""}))
            // alert('about')
            controller.navbarController()

            controller.aboutController();
            controller.authenticationController();

        });

        this.get('#/login-error', function () {
            localStorage.setItem('blog',JSON.stringify({username: "", name: ""}))
            // alert('about')
            controller.navbarController()

            controller.aboutController();
            // controller.login();

        });

        this.get('#/login', function () {
            localStorage.setItem('blog',JSON.stringify({username: "", name: ""}))
            controller.navbarController()

            controller.loginController();
            controller.authenticationController();

        });

        this.get('#/login-please', function () {
            localStorage.setItem('blog',JSON.stringify({username: "", name: ""}))
            controller.navbarController()

            controller.notLoggedController();
            controller.authenticationController();

        });

        this.get('#/register', function () {
            localStorage.setItem('blog',JSON.stringify({username: "", name: ""}))
            controller.navbarController()

            controller.registerController();
            controller.authenticationController();

        });

        this.get('#/register-successful', function () {

            controller.registrationSuccessfulControllers();
            controller.authenticationController();

        });

        this.get('#/registration-error', function () {

           // controller.registrationSuccessfulControllers();
            controller.authenticationController();

        });

        this.get('#/search-results', function () {
            localStorage.setItem('blog',JSON.stringify({username: "", name: ""}))
            var request = this.params['request'];

            controller.searchResultsController(request, this);
            controller.authenticationController();

        });

        this.get('#/:user', function () {
            // alert('param')
            var selector = this.params['user'];

           // localStorage.setItem('blog', selector)


            // console.log(selector)
            // alert(selector + this.params['home'])

            controller.userHomeController(selector, this);
            controller.authenticationController();
        });

        this.get('#/:user/home', function () {
            var selector = this.params['user'];



            // console.log(selector)
            // alert(selector + this.params['home'])

            controller.userHomeController(selector, this);
            controller.authenticationController();

        });

        this.get('#/:user/about', function () {
            // alert('About user')

            var userName = this.params['user']
           // localStorage.setItem('blog', userName)

            controller.authenticationController();
            controller.userAboutController(userName, this);


        });

        this.get('#/:user/logout', function () {
            // alert('About user')

            var userName = this.params['user']
            //controller.userAboutController(userName, this);

            localStorage.setItem('blog',JSON.stringify({username: "", name: ""}));


            controller.logOutController();

        });

        this.get('#/:user/top', function () {
            var selector = this.params['user'];

            controller.userTopController( selector);
            controller.authenticationController();

        });

        this.get('#/:user/all', function () {

            var selector = this.params['user'];



            controller.userAllController( selector);
            controller.authenticationController();

        });

        this.get('#/:user/new-post', function () {

            var selector = this.params['user'];



            controller.userNewPostController();
            controller.authenticationController();
        })

        ;
        this.get('#/:user/new-post-submit', function () {

            var selector = this.params['user'];



            var title = this.params.title,
                content = this.params.content,
                tags = this.params.tags,
                author = this.params.user;

            console.log(title + ' ' + content + ' ' + tags + ' ' + author)

            controller.userNewPostSubmitController(author, title, content, tags, this);
            controller.authenticationController();
        });

        this.get('#/:user/settings', function () {

           // var selector = this.params['user'];

           // localStorage.setItem('blog', selector)

            var userName = this.params['user']
            controller.userSettingsController(userName, this);
            controller.authenticationController();

        });

        this.get('#/:user/settings-blog', function () {

            var selector = this.params['user'];

            //localStorage.setItem('blog', selector)

            controller.userSettingsBlogController();
            controller.authenticationController();

        });

        this.get('#/:user/settings-personal', function () {
            var selector = this.params['user'];

            //localStorage.setItem('blog', selector)

            controller.userSettingsPersonalController(this);
            controller.authenticationController();

        });

        this.get('#/:user/:postId', function () {

            var user = this.params['user'],
                postID = this.params['postId'];

           // localStorage.setItem('blog', user)
            // console.log(selector)
            // alert(selector + this.params['home'])

            controller.userSinglePostFullVIewCntroller(user, postID, this);
            controller.authenticationController();

        });
    });

    app.run('#/')

    return app;
}

export {app};

