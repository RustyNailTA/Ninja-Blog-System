import {templateHandler} from 'templateHandler'
import {testDB} from 'testDB'
import {controller} from 'controller'
import User from 'user'


function userSettingsBlogController(userName, app){
    var selectedUser = User.current()

    if (selectedUser) {
        localStorage.setItem('blog', selectedUser.attributes.username)

        console.log(selectedUser)

        controller.navbarController();
        templateHandler.loadDataTemplate('templates/user-settings-blog.html', '#template-container', selectedUser.attributes)

    } else {
        // console.log('error')
        app.notFound()
    }
}

export {userSettingsBlogController}