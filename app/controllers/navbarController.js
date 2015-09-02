import {templateHandler} from 'templateHandler'
import {testDB} from 'testDB'
import fbApi from 'fbApi'
import User from 'user'
import Post from 'post'
import {controller} from 'controller';

function navbarController(){

    var blog = JSON.parse(localStorage.getItem('blog'));
    console.log('nav !' + blog.name+ '!')

    if(blog.name && blog.name != ''){
        templateHandler.loadDataTemplate('templates/navbar-user-blog.html', '#template-navigation-main',blog);
        templateHandler.loadDataTemplate('templates/search-blog.html', '#template-navigation-search', blog);
        templateHandler.loadDataTemplate('templates/navbar-header-blog.html', '#template-navigation-header',blog);
    } else {
        templateHandler.loadStaticTemplate('templates/navbar-main-page.html', '#template-navigation-main');
        templateHandler.loadStaticTemplate('templates/search-main.html', '#template-navigation-search');
        templateHandler.loadStaticTemplate('templates/navbar-header-main.html', '#template-navigation-header');
    }
}

export {navbarController}
