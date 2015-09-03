export var CONSTRAINTS = {
    USER_NAME_PATTERN: /^[.a-zA-Z0-9_-]{5,25}$/,
    EMAIL_PATTERN: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    PASSWORD_PATTERN: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    POST_SCRIPT_TAG: "(<\s*script.*?>.*?)|(<\s*/script.*?>.*?)"
};
