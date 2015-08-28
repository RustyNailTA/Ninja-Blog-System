import {templateHandler} from 'templateHandler'

function userAboutController(){
    $('#template-container').load('templates/user-about.html');
}

export {userAboutController}