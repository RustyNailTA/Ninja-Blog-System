import {templateHandler} from 'templateHandler'
import {testDB} from 'testDB'

function singlePostFullVIewController(post) {

    templateHandler.loadDataTemplate('templates/postFullView.html', '#template-container', post)
}

export {singlePostFullVIewController}
