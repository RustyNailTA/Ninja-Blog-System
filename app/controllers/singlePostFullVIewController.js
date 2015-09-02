import {templateHandler} from 'templateHandler'
import {testDB} from 'testDB'
import {controller} from 'controller'


function singlePostFullVIewController(post) {

    templateHandler.loadDataTemplate('templates/postFullView.html', '#template-container', post)
}

export {singlePostFullVIewController}
