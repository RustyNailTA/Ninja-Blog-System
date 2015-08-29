import {templateHandler} from 'templateHandler'

function loginController(){
    // TODO: Use loadDataTemplate
    templateHandler.loadStaticTemplate('templates/login.html', '#template-container')

}

export {loginController}
