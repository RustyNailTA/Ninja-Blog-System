function hideDropdown() {
    $(document).ready(function () {
        $('body').on('click', function () {
            $('.dropdown.open .dropdown-toggle').dropdown('toggle');
            $('[data-toggle="dropdown"]').parent().removeClass('open');
        })
    });
};

export var utilities = {
    hideDropdown:hideDropdown
}




