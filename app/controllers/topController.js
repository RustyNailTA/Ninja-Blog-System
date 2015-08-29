import {templateHandler} from 'templateHandler'
import {testDB} from 'testDB'

function topController() {

    templateHandler.loadDataTemplate('templates/top.html', '#template-container', testDB)
}

export {topController}
