import {templateHandler} from 'templateHandler'
import {testDB} from 'testDB'
import {controller} from 'controller'

function registrationSuccessfulControllers(data) {

    window.localStorage.setItem('blog', data.username)

    controller.navbarController()
    templateHandler.loadDataTemplate('templates/registrationSuccessful.html', '#template-container', data)
}

export {registrationSuccessfulControllers}

