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

export var utilities = {
    hideDropdown:hideDropdown,
    tagsSplitter: tagsSplitter
}




