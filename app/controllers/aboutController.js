import {templateHandler} from 'templateHandler'
import {controller} from 'controller'


function aboutController(){
    //localStorage.setItem('blog', "")
    controller.navbarController();
    templateHandler.loadStaticTemplate('templates/about.html', '#template-container')
}

export {aboutController}