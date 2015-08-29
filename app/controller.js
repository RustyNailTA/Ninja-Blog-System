import {registerController} from './controllers/registerController.js';
import {homeController} from './controllers/homeController.js';
import {topController} from './controllers/topController.js';
import {allController} from './controllers/allController.js';
import {loginController} from './controllers/loginController.js';
import {aboutController} from './controllers/aboutController.js';
import {userAboutController} from './controllers/userAboutController.js';
import {userNewBlogController} from './controllers/userNewBlogController.js';
import {userSettingsController} from './controllers/userSettingsController.js';
import {userSettingsPersonalController} from './controllers/userSettingsPersonalController.js';
import {userSettingsBlogController} from './controllers/userSettingsBlogController.js';
import {notFoundController} from './controllers/notFoundController.js';
import {userHomeController} from './controllers/userHomeController.js';
import {allocatorController} from './controllers/allocatorController.js';
import {userTopController} from './controllers/userTopController.js';
import {userAllController} from './controllers/userAllController.js';
import {singlePostFullVIewController} from './controllers/singlePostFullVIewController.js';
import {userSinglePostFullVIewCntroller} from './controllers/userSinglePostFullVIewCntroller.js';
import {templateHandler} from 'templateHandler'



export var controller = {
    registerController: registerController,
    homeController: homeController,
    topController: topController,
    allController: allController,
    loginController: loginController,
    aboutController: aboutController,
    userAboutController: userAboutController,
    userNewBlogController: userNewBlogController,
    userSettingsController: userSettingsController,
    userSettingsPersonalController: userSettingsPersonalController,
    userSettingsBlogController: userSettingsBlogController,
    notFoundController:notFoundController,
    userHomeController: userHomeController,
    allocatorController:allocatorController,
    userTopController: userTopController,
    userAllController: userAllController,
    singlePostFullVIewController: singlePostFullVIewController,
    userSinglePostFullVIewCntroller: userSinglePostFullVIewCntroller
};