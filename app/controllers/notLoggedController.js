import {templateHandler} from 'templateHandler'

function notLoggedController(){
    templateHandler.loadStaticTemplate('templates/not-login.html', '#template-container')
}

export {notLoggedController}
