import {templateHandler} from 'templateHandler'

function userNewBlogController(){
    $('#template-container').load('templates/user-new-post.html');
}

export {userNewBlogController}