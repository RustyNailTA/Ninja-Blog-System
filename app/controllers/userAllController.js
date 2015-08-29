import {templateHandler} from 'templateHandler'
import {testDB} from 'testDB'

function userAllController(){
    $('#template-container').load('templates/all.html');
}

export {userAllController}
