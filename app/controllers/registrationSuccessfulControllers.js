import {templateHandler} from 'templateHandler'
import {controller} from 'controller'

function registrationSuccessfulControllers(data) {
    localStorage.setItem('blog',JSON.stringify({username:  data.username, name:  data.name}));

    controller.navbarController();
    templateHandler.loadDataTemplate('templates/registrationSuccessful.html', '#template-container', data)
}

export {registrationSuccessfulControllers}

