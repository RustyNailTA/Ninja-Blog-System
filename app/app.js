import {controller} from 'controller';
import {templateHandler} from 'templateHandler'
import db from 'db'
import User from 'user'
import Post from 'post'
import {utilities} from 'utilities'

//import 'handlebars';
//import 'sammy';
//import 'handlebars';
//import 'jquery';
//import 'bootstrap';


function app() {
    utilities.hideDropdown();
    //console.log('Enter app');
    //console.log(Sammy);

    db.init();

    Post.getAllPostsByAuthor('klati').then(function (posts) {
        console.log('By author (klati): ');
        console.log(posts);
    }, function (err) {
        console.log(`Could not fetch posts: ${err.message}`);
    });

    Post.getAllPostsByTag('tag1').then(function (posts) {
        console.log('By tag (tag1): ');
        console.log(posts);
    }, function (err) {
        console.log(`Could not fetch posts: ${err.message}`);
    });

    Post.getAllPostsByTagOrAuthor('ivko').then(function (posts) {
        console.log('By TagOrAuthor (ivko): ');
        // there's a post with one author ivko, no tag matches but still one result
        console.log(posts);
    }, function (err) {
        console.log(`Could not fetch posts: ${err.message}`);
    });

    Post.getAllPostsByTagAndAuthor('ivko').then(function (posts) {
        console.log('By TagAndAuthor (ivko): ');
        // no results, matches only one post but there is no ivko tag
        console.log(posts);
    }, function (err) {
        console.log(`Could not fetch posts: ${err.message}`);
    });

    var app = $.sammy('#main-content', function () {

        //console.log('After Sammy');

        this.notFound = function(){
           // console.log('not found')
            controller.notFoundController();
        };


        this.get('#/', function () {

            //var selector = this.params['page'];
            //console.log(selector)

            controller.authenticationController();

            controller.homeController();
        });

        this.get('#/home', function () {
            controller.authenticationController();
            controller.homeController();

        });

        this.get('#/top', function () {
           controller.topController();
            controller.authenticationController();

        });

        this.get('#/all', function () {
           controller.allController();
            controller.authenticationController();

        });

        this.get('#/all-posts', function () {
           controller.allController();
            controller.authenticationController();

        });
        this.get('#/all-users', function () {
           controller.allUsersController();
            controller.authenticationController();

        });

        this.get('#/about', function () {
           // alert('about')
           controller.aboutController();
            controller.authenticationController();

        });

        this.get('#/login-error', function () {
            // alert('about')
            controller.aboutController();
           // controller.login();

        });

        this.get('#/login', function () {
            controller.loginController();
            controller.authenticationController();

        });

        this.get('#/login-please', function () {
            controller.notLoggedController();
            controller.authenticationController();

        });

        this.get('#/register', function () {
            controller.registerController();
            controller.authenticationController();

        });

        this.get('#/register-successful', function () {
            controller.registrationSuccessfulControllers();
            controller.authenticationController();

        });

        this.get('#/search-results', function () {
            var value = this.params['request']

            console.log(value + 'rrrr')
            //controller.registrationSuccessfulControllers();
            //controller.authenticationController();

        });

        this.get('#/:param', function () {
           // alert('param')
           var selector = this.params['param'];
            controller.allocatorController(selector, this);
            controller.authenticationController();

            // console.log(selector)
         // this.notFound();

            //this.partial('templates/item_detail.template');
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
            controller.userAboutController(userName, this);
            controller.authenticationController();

        });

        this.get('#/:user/logout', function () {
           // alert('About user')

            var userName = this.params['user']
            //controller.userAboutController(userName, this);

            controller.logOutController();

        });

        this.get('#/:user/top', function () {
            //alert('top')
            $('#template-container').load('templates/top.html');
            // TODO: create page controller

        });

        this.get('/:user/#all', function () {
            $('#template-container').load('templates/all.html');
            // TODO: create page controller
        });

        this.get('#/:user/new-post', function () {
            controller.userNewPostController();
            controller.authenticationController();
        })

        ;this.get('#/:user/new-post-submit', function () {
            var title = this.params.title,
                content = this.params.content,
                tags = this.params.tags,
                author = this.params.user;

            console.log(title + ' ' + content + ' ' + tags  +' ' + author)

            controller.userNewPostSubmitController( author, title, content, tags, this);
            controller.authenticationController();
        });

        this.get('#/:user/settings', function () {
            var userName = this.params['user']
           controller.userSettingsController(userName, this);
            controller.authenticationController();

        });

        this.get('#/:user/settings-blog', function () {
           controller.userSettingsBlogController();
            controller.authenticationController();

        });

        this.get('#/:user/settings-personal', function () {
          controller.userSettingsPersonalController();
            controller.authenticationController();

        });

        this.get('#/:user/:postId', function () {
            var user = this.params['user'],
                postID = this.params['postId'];
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
