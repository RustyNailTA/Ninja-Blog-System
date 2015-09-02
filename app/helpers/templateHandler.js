function loadStaticTemplate(templatePath, containerSelector, successFunction) {
    var template = sessionStorage.getItem(templatePath);

    function loadStatic(template) {
        $(containerSelector).html(template);

        sessionStorage.setItem(templatePath, template);

        if (typeof successFunction === 'function') {
            successFunction();
        }
    }

    if (template) {
        loadStatic(template)
    } else {

        $.ajax({
            url: templatePath,
            method: 'GET',
            data: 'string',
            success: function (template) {
                loadStatic(template)
            },
            dataType: 'html'
        });
    }
}

function loadDataTemplate(templatePath, containerSelector, dataObject, successFunction) {

    $(containerSelector).html('');

    var template = sessionStorage.getItem(templatePath);

    function loadHandlebars(template, data) {
        var handlebarsTemplate = Handlebars.compile(template),
            resultHtml = handlebarsTemplate(dataObject);

        $(containerSelector).html(resultHtml);


        if (typeof successFunction === 'function') {
            successFunction();
        }
    }

    if (template) {
        loadHandlebars(template, dataObject)
    } else {
        $.ajax({
            url: templatePath,
            method: 'GET',
            data: 'string',
            success: function (template) {
                sessionStorage.setItem(templatePath, template);
                loadHandlebars(template, dataObject)
            },
            dataType: 'html'
        });
    }
}

export var templateHandler = {
    loadDataTemplate: loadDataTemplate,
    loadStaticTemplate: loadStaticTemplate
}