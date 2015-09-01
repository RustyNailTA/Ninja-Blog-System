import {templateHandler} from 'templateHandler'
import db from 'db'
import User from 'user'
import Post from 'post'
import {CONSTRAINTS} from 'CONSTRAINTS'
import {validator} from 'validator'
import {controller} from 'controller'
import {Parse as Parse} from 'parse'


function shareController() {

    function shareHandler() {

        $(document).on('click','.blog-main', function(ev) {
            var $target = $(ev.target);

            if($target.is(":button")) {
                console.log('test');
                FB.ui({
                    method: 'share',
                    href: 'https://telerikacademy.com',
                }, function (response) {
                });
            }
        });
        }

    templateHandler.loadStaticTemplate('templates/all.html', '#template-container', shareHandler)
}

export
{
    shareController
}
