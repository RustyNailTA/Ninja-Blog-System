import {templateHandler} from 'templateHandler'
import {testDB} from 'testDB'
import fbApi from 'fbApi'
import User from 'user'
import Post from 'post'
import {controller} from 'controller';

function navbarController(){



    var blog = localStorage.getItem('blog');
    console.log('nav !' + blog+ '!')

    if(blog && blog != ''){
        templateHandler.loadDataTemplate('templates/navbar-user-blog.html', '#template-navigation-main',{username: blog})
        templateHandler.loadDataTemplate('templates/search-blog.html', '#template-navigation-search',{username: blog})
        templateHandler.loadDataTemplate('templates/navbar-header-blog.html', '#template-navigation-header',{username: blog})
        localStorage.setItem('currentBlog', blog)
    } else {
        templateHandler.loadStaticTemplate('templates/navbar-main-page.html', '#template-navigation-main')
        templateHandler.loadStaticTemplate('templates/search-blog.html', '#template-navigation-search')
        templateHandler.loadStaticTemplate('templates/navbar-header-main.html', '#template-navigation-header')
    }
}

export {navbarController}
