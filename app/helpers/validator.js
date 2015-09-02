import {CONSTRAINTS} from 'CONSTRAINTS'

import {registrationValidator} from '../validators/registrationValidator.js';
import {textInputValidator} from '../validators/textInputValidator.js';

export var validator = {
    registrationValidator: registrationValidator,
    textInputValidator: textInputValidator
};