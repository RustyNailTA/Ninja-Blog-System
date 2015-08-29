import {templateHandler} from 'templateHandler'

function notFoundController(){
    //console.log();
    templateHandler.loadStaticTemplate('templates/notFound.html', '#template-container')
}

export {notFoundController}