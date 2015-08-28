import {templateHandler} from 'templateHandler'

function aboutController(){
    templateHandler.loadStaticTemplate('templates/about.html', '#template-container')
}

export {aboutController}