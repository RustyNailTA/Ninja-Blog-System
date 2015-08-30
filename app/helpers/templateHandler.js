function loadStaticTemplate(templatePath, containerSelector, successFunction) {
    $.ajax({
        url: templatePath,
        method: 'GET',
        data: 'string',
        success: function (template) {
            $(containerSelector).html(template);

            if(typeof successFunction === 'function'){
                successFunction();
            }
        },
        dataType: 'html'
    });
}

function loadDataTemplate(templatePath, containerSelector, dataObject, successFunction) {
    $.ajax({
        url: templatePath,
        method: 'GET',
        data: 'string',
        success: function (template) {
            var handlebarsTemplate = Handlebars.compile(template),
                resultHtml = handlebarsTemplate(dataObject);

           // console.log(resultHtml)

            $(containerSelector).html(resultHtml);

            if(typeof successFunction === 'function'){
                successFunction();
            }
        },
        dataType: 'html'
    });
}

export var templateHandler = {
    loadDataTemplate: loadDataTemplate,
    loadStaticTemplate: loadStaticTemplate
}