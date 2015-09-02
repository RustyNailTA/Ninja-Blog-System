import {templateHandler} from 'templateHandler'
import fbApi from 'fbApi'
import User from 'user'
import Post from 'post'
import {CONSTRAINTS} from 'CONSTRAINTS'
import {validator} from 'validator'
import {controller} from 'controller'


function registerController() {

    function dataVerification() {
        var $userName = $('#inputUserName'),
            $email = $('#inputEmail'),
            $password = $('#inputPassword'),
            $passwordConfirmed = $('#inputConfirmPassword'),
            $terms = $('#termsAccepted'),
            $submitButton = $('#btn-registration-submit'),
            $submitTooltipContainer = $('#btn-registration-submit-tooltip-container'),
            $registrationForm = $('#registration-form');

        $registrationForm.on('mouseover', function () {
            var termsAccepted = $terms.prop('checked'),
                correctUserName = $userName.hasClass('input-correct'),
                correctEmail = $email.hasClass('input-correct'),
                correctPassword = $password.hasClass('input-correct'),
                correctPasswordConfirmed = $password.val() === $passwordConfirmed.val();

            if (
                termsAccepted &&
                correctUserName &&
                correctEmail &&
                correctPassword &&
                correctPasswordConfirmed
            ) {
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

        validator.registrationValidator.validateInput($email, CONSTRAINTS.EMAIL_PATTERN);
        $email.attr({
            'data-toggle': 'tooltip',
            title: 'Email must be valid!'
        });

        validator.registrationValidator.validateInput($password, CONSTRAINTS.PASSWORD_PATTERN);
        $password.attr({
            'data-toggle': 'tooltip',
            title: 'Password must contain minimum 8 characters at least 1 Alphabet and 1 Number!'
        });

        validator.registrationValidator.validatePasswordConfirmed($passwordConfirmed, $password);
        $passwordConfirmed.attr({
            'data-toggle': 'tooltip',
            title: 'This field must match the password above!'
        });

        $submitButton.prop('disabled', true);

        $submitTooltipContainer.attr({
            'data-toggle': 'tooltip',
            'data-original-title': 'All fields are required!'
        });

        $('[data-toggle="tooltip"]').tooltip();
    }

    function registrationHandler() {
        var $submitButton = $('#btn-registration-submit');

        dataVerification();

        $submitButton.on('click', function () {
            var userName = $('#inputUserName').val(),
                email = $('#inputEmail').val(),
                password = $('#inputPassword').val();
            //
            //var data = {
            //    username: userName,
            //    email: email
            //};



            User.create(userName, password, email).then(function (user) {
               // user.set('name', userName);
                //console.log(user.get('username') + ' registered!');

                localStorage.setItem('blog',JSON.stringify({username: user.attributes.username, name: user.attributes.name}));
                //localStorage.setItem('blog', JSON user.attributes.username)
                templateHandler.loadDataTemplate('templates/registrationSuccessful.html', '#template-container', user.attributes)
            }, function (error) {
                //console.log(error.message);
                templateHandler.loadDataTemplate('templates/registration-error.html', '#template-container', error)
                window.location.hash = '#/registration-error'

            });



           // templateHandler.loadDataTemplate('templates/registrationSuccessful.html', '#template-container', data)
        })
    }

    templateHandler.loadStaticTemplate('templates/register.html', '#template-container', registrationHandler);
}

export {registerController}
