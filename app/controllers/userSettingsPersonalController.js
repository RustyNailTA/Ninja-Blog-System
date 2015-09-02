import {templateHandler} from 'templateHandler'
import {controller} from 'controller'
import User from 'user'


function userSettingsPersonalController(app){

    var selectedUser = User.current()

    if (selectedUser) {
        localStorage.setItem('blog',JSON.stringify({username: selectedUser.attributes.username, name: selectedUser.attributes.name}));

        console.log(selectedUser)

        controller.navbarController();
        templateHandler.loadDataTemplate('templates/user-settings-blog.html', '#template-container', selectedUser.attributes)

    } else {
        // console.log('error')
        app.notFound()
    }
}

export {userSettingsPersonalController}
