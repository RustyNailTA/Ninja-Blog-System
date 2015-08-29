import {templateHandler} from 'templateHandler'
import {testDB} from 'testDB'

function allController(){

    templateHandler.loadDataTemplate('templates/all.html', '#template-container', testDB)
}

export {allController}

