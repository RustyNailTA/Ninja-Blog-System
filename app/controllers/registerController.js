import {templateHandler} from 'templateHandler'

function registerController(){
    // TODO: Use loadDataTemplate
    templateHandler.loadStaticTemplate('templates/register.html', '#template-container')

}

export {registerController}
