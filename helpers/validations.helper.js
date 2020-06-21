const rutvalidator = require('chileanrutvalidator');
const createSubscription = [
    'name',
    'email',
    'phone',
    'rut'
];
module.exports.createSUbscriptionsValidation = (body) => {
    let errors = [];
    for (const element of createSubscription) {
        if(!body.hasOwnProperty(element)) errors.push(`${element} is required`);
    }
    if(errors.length > 0) return errors;

    if(!isEmail(body.email)) errors.push(`Invalid field email`);
    if(!rutvalidator.validarRut(body.rut))  errors.push(`Invalid field rut`); 
    console.log(rutvalidator.validarRut(body.rut));
    return errors;
}

const isEmail = (email) => {
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(String(email).toLowerCase())) {
        return false;
    }

    return true;

}