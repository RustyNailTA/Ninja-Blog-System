import {registerController} from './controllers/registerController.js';
import {homeController} from './controllers/homeController.js';
import {topController} from './controllers/topController.js';
import {allController} from './controllers/allController.js';
import {loginController} from './controllers/loginController.js';
import {aboutController} from './controllers/aboutController.js';
import {userAboutController} from './controllers/userAboutController.js';
import {userNewPostController} from './controllers/userNewPostController.js';
import {userSettingsController} from './controllers/userSettingsController.js';
import {userSettingsPersonalController} from './controllers/userSettingsPersonalController.js';
import {userSettingsBlogController} from './controllers/userSettingsBlogController.js';
import {notFoundController} from './controllers/notFoundController.js';
import {userHomeController} from './controllers/userHomeController.js';
import {userTopController} from './controllers/userTopController.js';
import {userAllController} from './controllers/userAllController.js';
import {singlePostFullVIewController} from './controllers/singlePostFullVIewController.js';
import {userSinglePostFullVIewCntroller} from './controllers/userSinglePostFullVIewCntroller.js';
import {registrationSuccessfulControllers} from './controllers/registrationSuccessfulControllers.js';
import {notLoggedController} from './controllers/notLoggedController.js';
import {authenticationController} from './controllers/authenticationController.js';
import {logOutController} from './controllers/logOutController.js';
import {loginErrorController} from './controllers/loginErrorController.js';
import {allUsersController} from './controllers/allUsersController.js';
import {userNewPostSubmitController} from './controllers/userNewPostSubmitController.js';
import {shareController} from './controllers/shareController.js';
import {searchResultsController} from './controllers/searchResultsController.js';
import {navbarController} from './controllers/navbarController.js';
import {postsByMonthController} from './controllers/postsByMonthController.js';
import {templateHandler} from 'templateHandler'



export var controller = {
    registerController: registerController,
    homeController: homeController,
    topController: topController,
    allController: allController,
    loginController: loginController,
    aboutController: aboutController,
    userAboutController: userAboutController,
    userNewPostController: userNewPostController,
    userSettingsController: userSettingsController,
    userSettingsPersonalController: userSettingsPersonalController,
    userSettingsBlogController: userSettingsBlogController,
    notFoundController:notFoundController,
    userHomeController: userHomeController,
    userTopController: userTopController,
    userAllController: userAllController,
    singlePostFullVIewController: singlePostFullVIewController,
    userSinglePostFullVIewCntroller: userSinglePostFullVIewCntroller,
    registrationSuccessfulControllers: registrationSuccessfulControllers,
    notLoggedController: notLoggedController,
    authenticationController: authenticationController,
    logOutController: logOutController,
    loginErrorController: loginErrorController,
    allUsersController:allUsersController,
    userNewPostSubmitController: userNewPostSubmitController,
    shareController: shareController,
    searchResultsController: searchResultsController,
    navbarController:navbarController,
    postsByMonthController: postsByMonthController

};
