import {templateHandler} from 'templateHandler'

function topController() {
    var testPostOne = {
            title: 'TitleOne',
            creator: 'Goshko Ubavets Be',
            content: "<p>I'm ninja and so on..</p>",
            createdAt: 'December 14, 2013'
        },
        testPostTwo = {
            title: 'TitleTwo',
            creator: 'Pesho Ubavets Be',
            content: "<p>I'm minja and so on.. on.. on ..</p>",
            createdAt: 'July 22, 2015'
        },
        posts = {
            posts: [testPostOne, testPostTwo]
        };

    templateHandler.loadDataTemplate('templates/top.html', '#template-container', posts)
}

export {topController}
