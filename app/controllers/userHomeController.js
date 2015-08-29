import {templateHandler} from 'templateHandler'

function userHomeController(){

    templateHandler.loadDataTemplate('templates/home.html', '#template-container', posts)
}

export {userHomeController}
