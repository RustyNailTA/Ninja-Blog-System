import {templateHandler} from 'templateHandler'
import {controller} from 'controller'

function singlePostFullVIewController(post) {

    templateHandler.loadDataTemplate('templates/postFullView.html', '#template-container', post)
}

export {singlePostFullVIewController}
