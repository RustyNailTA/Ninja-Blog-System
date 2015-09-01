import {templateHandler} from 'templateHandler'
import {testDB} from 'testDB'
import {controller} from 'controller'


function topController() {

    templateHandler.loadDataTemplate('templates/top.html', '#template-container', testDB)
}

export {topController}
