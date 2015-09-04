import {templateHandler} from 'templateHandler'
import User from 'user'
import Post from 'post'
import {utilities} from 'utilities'
import {controller} from 'controller'
import {validator} from 'validator'

function userSettingsSubmitController(name, about, avatar, gitHub, telerikAcademy, googlePlus, linkedIn, flickr, twitter, skype, app) {

    var ecureName = validator.textInputValidator.scriptTagValidator(name || ''),
        ecureAbout = validator.textInputValidator.scriptTagValidator(about || ''),
        ecureAvatar = validator.textInputValidator.scriptTagValidator(avatar || ''),
        ecureGitHub = validator.textInputValidator.scriptTagValidator(gitHub || ''),
        ecureTelerikAcademy = validator.textInputValidator.scriptTagValidator(telerikAcademy || ''),
        ecureGooglePlus = validator.textInputValidator.scriptTagValidator(googlePlus || ''),
        ecureLinkedIn = validator.textInputValidator.scriptTagValidator(linkedIn || ''),
        ecureFlickr = validator.textInputValidator.scriptTagValidator(flickr || ''),
        ecureTwitter = validator.textInputValidator.scriptTagValidator(twitter || ''),
        ecureSkype = validator.textInputValidator.scriptTagValidator(skype || '');

    var selectedUser = User.current();

    function updaeUserSettings(user) {
        var links = user.get('links');

        if (name) {
            user.set('name', ecureName)
        }
        if (about) {
            user.set('about', ecureAbout)
        }
        if (avatar) {
            user.set('avatar', ecureAvatar)
        }
        if (gitHub) {
            links.gitHub = ecureGitHub;
        }
        if (telerikAcademy) {
            links.telerikAcademy = ecureTelerikAcademy;
        }
        if (googlePlus) {
            links.googlePlus = ecureGooglePlus;
        }
        if (linkedIn) {
            links.linkedIn = ecureLinkedIn;
        }
        if (flickr) {
            links.flickr = ecureFlickr;
        }
        if (twitter) {
            links.twitter = ecureTwitter;
        }
        if (skype) {
            links.skype = ecureSkype;
        }

        user.set('links', links);


        return new Promise(function (resolve, reject) {
            user.save().then(function () {

                resolve();
            }, function (error) {
                reject(error);
            });
        });
    }

    if (selectedUser) {

        localStorage.setItem('blog', JSON.stringify({
            username: selectedUser.attributes.username,
            name: selectedUser.attributes.name
        }));

        controller.navbarController();

        updaeUserSettings(selectedUser).then(function () {
            templateHandler.loadDataTemplate('templates/user-settings-submit-success.html', '#template-container', selectedUser.attributes);

        }, function (error) {
            templateHandler.loadDataTemplate('templates/user-settings-submit-error.html', '#template-container', selectedUser);

            alert(error)
        });

    } else {
        window.location.hash = '#/login-please'
    }
}

export
{
    userSettingsSubmitController
}
