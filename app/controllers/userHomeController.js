import {templateHandler} from 'templateHandler'
import {testDB} from 'testDB'


function userHomeController(userName, app){

    //console.log('userHomeController');

    var selectedUser = _.find(testDB.users, function (user) {
        // console.log(user.posts);
        return user.username === userName;
    });

   // console.log(selectedUser)

    if (selectedUser) {

        templateHandler.loadDataTemplate('templates/home.html', '#template-container', selectedUser)

    } else {
       // console.log('error')
        app.notFound()
    }

    //templateHandler.loadDataTemplate('templates/home.html', '#template-container', posts)
}

export {userHomeController}
