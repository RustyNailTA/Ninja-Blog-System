import {CONSTRAINTS} from 'CONSTRAINTS'

function scriptTagValidator(inputString) {
    var securedString,
        pattern = CONSTRAINTS.POST_SCRIPT_TAG,
        regExpr = new RegExp(pattern, 'mig');

    securedString = inputString.replace(regExpr, '&lt;script&gt;');

    return securedString;
}

function contentLengthValidator(contentText){

    return contentText.length >= 200
}

export var textInputValidator = {
    scriptTagValidator: scriptTagValidator,
    contentLengthValidator: contentLengthValidator
};