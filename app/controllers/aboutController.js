import {templateHandler} from 'templateHandler'
import {controller} from 'controller'

function aboutController() {
    controller.navbarController();
    templateHandler.loadStaticTemplate('templates/about.html', '#template-container')
}

export {aboutController}