const GeneralHelper = require('./helpers/general.helper');
const ValidationHelper = require('./helpers/validations.helper');
const Subscriptions = require('./models/Subscriptions');
const rutvalidator = require('chileanrutvalidator');

module.exports.create = async (event,context, callback) => {
    try {

        const body = typeof event.body == 'string' ? JSON.parse(event.body) : event.body;
        const errors = ValidationHelper.createSUbscriptionsValidation(body); 
        if(errors.length > 0) return GeneralHelper.response(422, errors);
      
        const subscriptions = new Subscriptions();
        const rut = rutvalidator.formatRut(body.rut, false, false);
        const subscriptionId = `SUB#${rut}`;
        const SK = `${subscriptionId}#DATA`;
        const params = {
            name: body.name,
            phone: body.phone,
            email: body.email,
            rut
        };

        await subscriptions.create(subscriptionId, SK, params);
        return GeneralHelper.response(200, {message: "The subscription has been created"});
    } catch (error) {
        console.error(`Error on creating the subscription: `, error);
        return GeneralHelper.response(500, {message: "The subscription cannot been created"});

    }
}