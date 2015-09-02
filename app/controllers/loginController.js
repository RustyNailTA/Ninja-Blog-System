import {templateHandler} from 'templateHandler'
import fbApi from 'fbApi'
import User from 'user'
import Post from 'post'
import {CONSTRAINTS} from 'CONSTRAINTS'
import {validator} from 'validator'
import {controller} from 'controller'
import {Parse as Parse} from 'parse'



function loginController() {

    fbApi.init();

    function dataVerification() {
        var $userName = $('#inputUserName'),
            $password = $('#inputPassword'),
            $submitButton = $('#btn-login-submit'),
            $submitTooltipContainer = $('#btn-registration-submit-tooltip-container'),
            $registrationForm = $('#login-form');

        $registrationForm.on('mouseover', function () {
            var correctUserName = $userName.hasClass('input-correct'),
                correctPassword = $password.hasClass('input-correct');

            //console.log('form')

            if (correctUserName && correctPassword) {
                $submitButton.removeClass('disabled')
                    .prop('disabled', false);

                $submitTooltipContainer.attr({
                    'data-original-title': 'Ready to go!'
                });
            } else {
                $submitButton.addClass('disabled')
                    .prop('disabled', true);

                $submitTooltipContainer.attr({
                    'data-original-title': 'All fields are required!'
                });
            }
        });

        validator.registrationValidator.validateInput($userName, CONSTRAINTS.USER_NAME_PATTERN);
        $userName.attr({
            'data-toggle': 'tooltip',
            title: 'User name must between 5 and 25 characters long and contain only a-z A-Z 0-9 and _ and . (no empty spaces)!'
        });


        validator.registrationValidator.validateInput($password, CONSTRAINTS.PASSWORD_PATTERN);
        $password.attr({
            'data-toggle': 'tooltip',
            title: 'Password must contain minimum 8 characters at least 1 Alphabet and 1 Number!'
        });


        $submitTooltipContainer.attr({
            'data-toggle': 'tooltip',
            'data-original-title': 'All fields are required!'
        });

        $('[data-toggle="tooltip"]').tooltip();
    }

    function loginHandler() {
        var $submitButton = $('#btn-login-submit');

        var $loginCredentials = $('#btn-login-credentials');

        var $fbLoginButton = $('#btn-login-submit-fb');

        $loginCredentials.on('click', function () {
            //console.log('test');
            $('.login-form').toggle(500);
        })

        dataVerification();

        $submitButton.on('click', function () {
            var userName = $('#inputUserName').val(),
                password = $('#inputPassword').val();

            User.logIn(userName, password).then(function (user) {
                // console.log(user.get('username') + ' logged in!');
                //console.log('etoooo');
                //console.log(user.get('username'));

                localStorage.setItem('blog',JSON.stringify({username: user.attributes.username, name: user.attributes.name}));

                controller.navbarController()


                templateHandler.loadDataTemplate('templates/login-success.html', '#template-container', user.attributes, controller.authenticationController)
            }, function (error) {
                //console.log(error.message + ' ' +  userName +  ' ' + password);
                window.location.hash = '#/login-error'
                templateHandler.loadDataTemplate('templates/login-error.html', '#template-container', error)
            });
        });

        $fbLoginButton.on('click', function () {
            //console.log('test');
            var name = '';
            Parse.FacebookUtils.logIn(null, {
                success: function (user) {
                    //var fbUser = {attributes: {}};

                    function getFbUser(user) {
                        FB.api('/me', function (response) {
                            //fbUser.attributes.username = response.name;
                            //fbUser.attributes.id = response.id;
                            //fbUser.attributes.user = user.attributes;

                            user.set('name', response.name);
                            user.save();

                            //console.log(response.name);
                            //localStorage.setItem("user", JSON.stringify(fbUser))

                            if (!user.existed()) {

                                templateHandler.loadDataTemplate('templates/login-success.html', '#template-container', user.attributes, controller.authenticationController)
                            } else {

                                templateHandler.loadDataTemplate('templates/login-success.html', '#template-container', user.attributes, controller.authenticationController)
                            }
                        });
                    }

                    //console.log($(user));

                    getFbUser(user);
                },
                error: function (user, error) {
                    window.location.hash = '#/login-error'
                    templateHandler.loadDataTemplate('templates/login-error.html', '#template-container', error)
                }
            });


            FB.getLoginStatus(function (response) {
                if (response.status === 'connected') {
                    // user logged in and linked to app
                    // handle this case HERE
                }
            });
        })
    }

    templateHandler.loadStaticTemplate('templates/login.html', '#template-container', loginHandler)
}

export
{
    loginController
}
