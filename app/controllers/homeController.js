import {templateHandler} from 'templateHandler'
import {testDB} from 'testDB'

function homeController(){
   // console.log('enter home')
   // console.log(testDB)

    var db = testDB;
    db.posts[0].active = true;

    templateHandler.loadDataTemplate('templates/home.html', '#template-container', testDB)
}

export {homeController}

