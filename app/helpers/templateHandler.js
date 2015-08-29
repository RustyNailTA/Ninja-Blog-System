function loadStaticTemplate(templatePath, containerSelector) {
    $.ajax({
        url: templatePath,
        method: 'GET',
        data: 'string',
        success: function (template) {
            $(containerSelector).html(template)
        },
        dataType: 'html'
    });
}

function loadDataTemplate(templatePath, containerSelector, dataObject) {
    $.ajax({
        url: templatePath,
        method: 'GET',
        data: 'string',
        success: function (template) {
            var handlebarsTemplate = Handlebars.compile(template),
                resultHtml = handlebarsTemplate(dataObject);

           // console.log(resultHtml)

            $(containerSelector).html(resultHtml)
        },
        dataType: 'html'
    });
}

export var templateHandler = {
    loadDataTemplate: loadDataTemplate,
    loadStaticTemplate: loadStaticTemplate
}