import {controller} from 'controller';
import {templateHandler} from 'templateHandler'
//import 'handlebars';
//import 'sammy';
//import 'handlebars';
//import 'jquery';
//import 'bootstrap';


function app() {
    console.log('Enter app');
    //console.log(Sammy);

    var app = $.sammy('#main-content', function () {

        console.log('After Sammy');

        this.get('/', function () {
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
           controller.aboutController();
        });

        this.get('#/login', function () {
            controller.loginController();
        });

        this.get('#/register', function () {
            controller.registerController();
        });

        this.get('#/:user', function () {
            $('#template-container').load('templates/home.html');
            // TODO: create page controller
        });

        this.get('#/:user/home', function () {
            $('#template-container').load('templates/home.html');
            // TODO: create page controller
        });

        this.get('#/:user/top', function () {
            $('#template-container').load('templates/top.html');
            // TODO: create page controller
        });

        this.get('#/:user/all', function () {
            $('#template-container').load('templates/all.html');
            // TODO: create page controller
        });

        this.get('#//:user/about', function () {
            controller.userAboutController();
        });

        this.get('#//:user/new-blog', function () {
            controller.userNewBlogController();
        });

        this.get('#//:user/settings', function () {
           controller.userSettingsController();
        });

        this.get('#//:user/settings-blog', function () {
           controller.userSettingsBlogController();
        });

        this.get('#//:user/settings-personal', function () {
          controller.userSettingsPersonalController();
        });
    });

    app.run('/#')
}

export {app};





