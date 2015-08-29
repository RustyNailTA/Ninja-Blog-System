import {templateHandler} from 'templateHandler'
import {testDB} from 'testDB'

function userAboutController(userName, app){

    //console.log('userAboutController');

    var selectedUser = _.find(testDB.users, function (user) {
        // console.log(user.posts);
        return user.username === userName;
    });

  //  console.log(selectedUser)

    if (selectedUser) {

        templateHandler.loadDataTemplate('templates/user-about.html', '#template-container', selectedUser)

    } else {
       // console.log('error')
        app.notFound()
    }

}

export {userAboutController}