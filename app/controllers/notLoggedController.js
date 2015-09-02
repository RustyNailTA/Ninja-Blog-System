import {templateHandler} from 'templateHandler'
import {controller} from 'controller'


function notLoggedController(){
    templateHandler.loadStaticTemplate('templates/not-login.html', '#template-container')
}

export {notLoggedController}
