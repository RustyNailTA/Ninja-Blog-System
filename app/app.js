import {controller} from 'controller';
import {templateHandler} from 'templateHandler'
import db from 'db'
import User from 'user'
import Post from 'post'

//import 'handlebars';
//import 'sammy';
//import 'handlebars';
//import 'jquery';
//import 'bootstrap';


function app() {
    //console.log('Enter app');
    //console.log(Sammy);

    db.init();

    //User.create('ivko', 'bivko', 'ivko@bivko.com');

   // var currentUser = User.current();

    //var post = Post.create('hello world I am ninja', 'Hello guys. Some post here.',
    //['tag1', 'tag2', 'tag3'], currentUser.get('username'));

    //console.log(currentUser.getPostCount());

    var app = $.sammy('#main-content', function () {

        //console.log('After Sammy');

        this.notFound = function(){
           // console.log('not found')
            controller.notFoundController();
        };


        this.get('#/', function () {
            controller.homeController();
        });

        this.get('#/home', function () {
            controller.homeController();
        });

        this.get('#/top', function () {
           controller.topController();
        });

        this.get('#/all', function () {
           controller.allController();
        });

        this.get('#/about', function () {
           // alert('about')
           controller.aboutController();
        });

        this.get('#/login', function () {
            controller.loginController();
        });

        this.get('#/login-please', function () {
            controller.notLoggedController();
        });

        this.get('#/register', function () {
            controller.registerController();
        });

        this.get('#/register-successful', function () {
            controller.registrationSuccessfulControllers();
        });

        this.get('#/:param', function () {
           // alert('param')
           var selector = this.params['param'];
            controller.allocatorController(selector, this);
           // console.log(selector)
         // this.notFound();

            //this.partial('templates/item_detail.template');
        });

        this.get('#/:user/home', function () {
            var selector = this.params['user'];
           // console.log(selector)
           // alert(selector + this.params['home'])

            controller.userHomeController(selector, this);
        });
        this.get('#/:user/about', function () {
           // alert('About user')

            var userName = this.params['user']
            controller.userAboutController(userName, this);
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

        this.get('#/:user/new-blog', function () {
            controller.userNewBlogController();
        });

        this.get('#/:user/settings', function () {
            var userName = this.params['user']
           controller.userSettingsController(userName, this);
        });

        this.get('#/:user/settings-blog', function () {
           controller.userSettingsBlogController();
        });

        this.get('#/:user/settings-personal', function () {
          controller.userSettingsPersonalController();
        });

        this.get('#/:user/:postId', function () {
            var user = this.params['user'],
                postID = this.params['postId'];
            // console.log(selector)
           // alert(selector + this.params['home'])

            controller.userSinglePostFullVIewCntroller(user, postID, this);
        });
    });

    app.run('#/')

    return app;
}

export {app};
