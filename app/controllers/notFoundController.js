import {templateHandler} from 'templateHandler'
import {controller} from 'controller'

function notFoundController() {
    templateHandler.loadStaticTemplate('templates/notFound.html', '#template-container')
}

export {notFoundController}