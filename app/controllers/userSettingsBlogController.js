import {templateHandler} from 'templateHandler'
import {testDB} from 'testDB'
import {controller} from 'controller'


function userSettingsBlogController(userName, app){
    var selectedUser = JSON.parse(localStorage.getItem('Parse/by6R7kv1sgAk4lRHRQHZkSGogK9ow8JdZAcLNk55/currentUser'));

    if (selectedUser) {
        localStorage.setItem('blog', selectedUser.username)

        controller.navbarController();
        templateHandler.loadDataTemplate('templates/user-settings-blog.html', '#template-container', selectedUser)

    } else {
        // console.log('error')
        app.notFound()
    }
}

export {userSettingsBlogController}