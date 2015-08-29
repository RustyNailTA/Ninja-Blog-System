import {templateHandler} from 'templateHandler'
import {testDB} from 'testDB'

function userAllController(userName, app){


    $('#template-container').load('templates/all.html');
}

export {userAllController}
