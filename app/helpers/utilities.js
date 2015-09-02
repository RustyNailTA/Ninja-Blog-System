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
    var tags = tagsString.split(/[ ,]/).filter(Boolean);
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

export var utilities = {
    hideDropdown:hideDropdown,
    tagsSplitter: tagsSplitter,
    fbShareHandler: fbShareHandler
}





