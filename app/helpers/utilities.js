import fbApi from 'fbApi'

function hideDropdown() {
    $(document).ready(function () {
        $('body').on('click', function () {
            $('.dropdown.open .dropdown-toggle').dropdown('toggle');
            $('[data-toggle="dropdown"]').parent().removeClass('open');
        })
    });
};

function tagsSplitter(tagsString){
    var tags = tagsString.split(/\W/).filter(Boolean);
    return tags;
}

function fbShareHandler(){
    fbApi.init();

    $(document).on('click','.blog-main', function(ev) {
        var $target = $(ev.target);

        if($target.is(":button")) {
            console.log('test');
            FB.ui({
                method: 'share',
                href: 'https://telerikacademy.com',
            }, function (response) {
            });
        }
    });
}

function handlebarsRegisterHelpers(){
    Handlebars.registerHelper("inc", function(value, options)
    {
        return parseInt(value) + 1;
    });

    Handlebars.registerHelper('times', function(n, block) {
        var accum = '';
        for(var i = 1; i <= n; ++i)
            accum += block.fn(i);
        return accum;
    });

    Handlebars.registerHelper('ifCond', function(v1, v2, options) {
        if(v1 === v2) {
            return options.fn(this);
        }
        return options.inverse(this);
    });
}

function makeActivePageBtn(page, pagesCount){
    var $lis = $('.pages-li');

    _.each($lis,function(item){
        $(item).removeClass('active').removeClass('disabled');
        if(+item.id===page){
            $(item).addClass('active').addClass('disabled');
        }
    })

    var $prev = $('#prev');
    var $next = $('#next');

    if(page === 1) {
        $prev.toggleClass('disabled');
    }
    else if(page===pagesCount) {
        $next.toggleClass('disabled')
    }
}

export var utilities = {
    hideDropdown:hideDropdown,
    tagsSplitter: tagsSplitter,
    fbShareHandler: fbShareHandler,
    handlebarsRegisterHelpers: handlebarsRegisterHelpers,
    makeActivePageBtn: makeActivePageBtn
}
