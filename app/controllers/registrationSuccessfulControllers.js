import {templateHandler} from 'templateHandler'
import {testDB} from 'testDB'

function registrationSuccessfulControllers(data) {

    templateHandler.loadDataTemplate('templates/registrationSuccessful.html', '#template-container', data)
}

export {registrationSuccessfulControllers}

