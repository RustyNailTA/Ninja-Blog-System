import {templateHandler} from 'templateHandler'

function allocatorController(selector, app) {

    console.log('Allocator')
    var testPostOne = {
            title: 'TitleOne',
            author: 'Goshko',
            content: "<p>I'm ninja and so on..</p>",
            createdAt: 'December 14, 2013',
            tags: [],
            id: 1
        },
        testPostTwo = {
            title: 'TitleTwo',
            author: 'Pesho',
            content: "<h4>Heading 2</h4>" +
            '<img src="assets/imgs/ninjalogo.png">' +
            "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque delectus quae reprehenderit sint, sunt tempore. " +
            "Accusamus aliquid consectetur cumque ea esse, harum iusto, labore libero magnam omnis unde ut?</p>" +
            "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque delectus quae reprehenderit sint, sunt tempore. " +
            "Accusamus aliquid consectetur cumque ea esse, harum iusto, labore libero magnam omnis unde ut?</p>" +
            "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque delectus quae reprehenderit sint, sunt tempore. " +
            "Accusamus aliquid consectetur cumque ea esse, harum iusto, labore libero magnam omnis unde ut?</p>" +
            "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque delectus quae reprehenderit sint, sunt tempore. " +
            "Accusamus aliquid consectetur cumque ea esse, harum iusto, labore libero magnam omnis unde ut?</p>" +
            '<a href="http://google.com" target="_blank">Go fishing</a>',
            createdAt: 'July 22, 2015',
            tags: ['pesho', 'ninja', 'telerik academy'],
            id: 2
        },
        testPostThree = {
            title: 'TitleThree',
            author: 'Pesho',
            content: "<h4>Heading 3</h4>" +
            '<img src="https://scontent-fra3-1.xx.fbcdn.net/hphotos-xpf1/t31.0-8/11930775_10205857250769504_3791102953115589_o.jpg">' +
            "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque delectus quae reprehenderit sint, sunt tempore. " +
            "Accusamus aliquid consectetur cumque ea esse, harum iusto, labore libero magnam omnis unde ut?</p>" +
            "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque delectus quae reprehenderit sint, sunt tempore. " +
            "Accusamus aliquid consectetur cumque ea esse, harum iusto, labore libero magnam omnis unde ut?</p>" +
            "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque delectus quae reprehenderit sint, sunt tempore. " +
            "Accusamus aliquid consectetur cumque ea esse, harum iusto, labore libero magnam omnis unde ut?</p>" +
            "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque delectus quae reprehenderit sint, sunt tempore. " +
            "Accusamus aliquid consectetur cumque ea esse, harum iusto, labore libero magnam omnis unde ut?</p>" +
            '<a href="http://google.com" target="_blank">Go fishing</a>',
            createdAt: 'July 22, 1999',
            tags: ['opa-lopa', 'ninja', 'goshko ubavetsa'],
            id: 3
        },
        userOne = {
            username: 'Goshko',
            posts: [testPostOne]

        },
        userTwo = {
            username: 'Pesho',
            posts: [testPostTwo, testPostThree]
        },
        posts = {
            posts: [testPostOne, testPostTwo, testPostThree]
        },
        users = {
            users: [userOne, userTwo]
        };

    var selectedUser = _.find(users.users, function (user) {
        console.log(user.posts);
        return user.username === selector;
    });

    if (selectedUser) {
        var userPosts = {
            posts:selectedUser.posts
        };

        templateHandler.loadDataTemplate('templates/all.html', '#template-container', userPosts)
    } else {
        console.log('error')
        app.notFound()
    }
}

export {allocatorController}
