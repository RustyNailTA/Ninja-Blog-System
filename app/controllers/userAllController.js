import {templateHandler} from 'templateHandler'
import {testDB} from 'testDB'
import {controller} from 'controller'


function userAllController(userName, app){

    localStorage.setItem('blog', user.username)
    controller.navbarController()
    $('#template-container').load('templates/all.html');
}

export {userAllController}
