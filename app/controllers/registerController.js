import {templateHandler} from 'templateHandler'
import db from 'db'
import User from 'user'
import Post from 'post'

function registerController() {


    function dataVerification() {

        var CONSTRAINTS = {
            USER_NAME_PATTERN: /^[.a-zA-Z0-9_-]{5,25}$/,
            EMAIL_PATTERN: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
            PASSWORD_PATTERN: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        };


        function validateInput(element, pattern) {
            element.on('focusout', function () {
                var $this = $(this);

                var isCorrect = pattern.test($this.val());

                if (isCorrect) {
                    $this.removeClass('input-incorrect');
                    $this.addClass('input-correct');
                } else {
                    $this.addClass('input-incorrect');
                    $this.removeClass('input-correct');
                }
            })
                .on('focus', function () {
                    var $this = $(this);
                    $this.removeClass('input-correct');
                    $this.removeClass('input-incorrect');
                })
        }

        function validateAllImputs() {
            $('#registration-form').on('mouseover', function () {

                //console.log('input')
                var userName = $('#inputUserName'),
                    email = $('#inputEmail'),
                    password = $('#inputPassword'),
                    passwordConfirmed = $('#inputConfirmPassword'),
                    termsAccepted = $('#termsAccepted').prop('checked');

                if (termsAccepted &&
                    ((!userName.hasClass('input-incorrect') && userName.val() != '') &&
                    (!email.hasClass('input-incorrect') && userName.val() != '') &&
                    (!userName.hasClass('input-incorrect') && userName.val() != '') &&
                    (!userName.hasClass('input-incorrect') && userName.val() != '') &&
                    (password.val() != '') && (password.val() === passwordConfirmed.val()))) {

                    $('#btn-registration-submit').prop('disabled', false).removeClass('disabled');
                } else {
                    $('#btn-registration-submit').prop('disabled', true).addClass('disabled');
                }
            })
        }

        $('#inputUserName').attr({
            'data-toggle': 'tooltip',
            title: 'User name must between 5 and 25 characters long and contain only a-z A-Z 0-9 and _ and . (no empty spaces)!'
        });
        validateInput($('#inputUserName'), CONSTRAINTS.USER_NAME_PATTERN);

        $('#inputEmail').attr({
            'data-toggle': 'tooltip',
            title: 'Email must be valid!'
        });
        validateInput($('#inputEmail'), CONSTRAINTS.EMAIL_PATTERN);

        $('#inputPassword').attr({
            'data-toggle': 'tooltip',
            title: 'Password must contain minimum 8 characters at least 1 Alphabet and 1 Number!'
        });
        validateInput($('#inputPassword'), CONSTRAINTS.PASSWORD_PATTERN);

        $('#btn-registration-submit').attr({
            'data-toggle': 'tooltip',
            title: 'All fields are required!'
        });


        $('[data-toggle="tooltip"]').tooltip();

        validateAllImputs();
    }

    function registrationHandler() {

        dataVerification();
        $('#btn-registration-submit').on('click', function () {
            var userName = $('#inputUserName').val(),
                email = $('#inputEmail').val(),
                password = $('#inputPassword').val(),
                passwordConfirmesion = $('#inputConfirmPassword').val();


            User.create(userName,password, email);

            var data = {
                username: userName,
                email: email
            };

           // alert(email)


            templateHandler.loadDataTemplate('templates/registrationSuccessful.html', '#template-container', data)
        })
    }

    templateHandler.loadStaticTemplate('templates/register.html', '#template-container', registrationHandler)

}

export {registerController}
