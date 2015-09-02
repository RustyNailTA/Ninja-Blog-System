import {templateHandler} from 'templateHandler'
import {controller} from 'controller'


function notFoundController(){
    //console.log();
    templateHandler.loadStaticTemplate('templates/notFound.html', '#template-container')
}

export {notFoundController}