import {templateHandler} from 'templateHandler'
import {controller} from 'controller'


function userTopController(){
    $('#template-container').load('templates/top.html');
}

export {userTopController}