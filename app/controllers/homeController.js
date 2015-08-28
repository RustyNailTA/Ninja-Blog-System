import {templateHandler} from 'templateHandler'

function homeController(){
    // TODO: Use loadDataTemplate
    templateHandler.loadStaticTemplate('templates/home.html', '#template-container')

}

export {homeController}

