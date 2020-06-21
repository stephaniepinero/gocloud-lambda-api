const expect = require('chai').expect;
const sinon = require('sinon');
const handler = require('../handler');
const Subscriptions = require('../models/Subscriptions');

let res = {
	statusCode: 200,
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Credentials': true
	},
	body: {}
};

describe('create subscription', () => {
    afterEach(() => {
        sinon.restore();
    });

    it('Missing fields', async () => {
        const event = {
            body: {
                'name': 'a name',
                'phone': '895547785',
                'email': 'anemail@email.com'
            }
        };
		const response = await handler.create(event,{});
		res.statusCode = 422;
		res.body = JSON.stringify([ 'rut is required']);
		expect(response).to.eql(res);
    })

    it('Invalid rut', async () => {
        const event = {
            body: {
                'name': 'a name',
                'phone': '895547785',
                'email': 'anemail@email.com',
                'rut': 'notarut'
            }
        };
		const response = await handler.create(event,{});
		res.statusCode = 422;
		res.body = JSON.stringify([ 'Invalid field rut']);
		expect(response).to.eql(res);
    })
    it('Invalid email', async () => {
        const event = {
            body: {
                'name': 'a name',
                'phone': '895547785',
                'email': 'not an email',
                'rut': '19'
            }
        };
		const response = await handler.create(event,{});
		res.statusCode = 422;
		res.body = JSON.stringify([ 'Invalid field email']);
		expect(response).to.eql(res);
    })

    it('Error on create', async () => {
        const event = {
            body: {
                'name': 'a name',
                'phone': '895547785',
                'email': 'anemail@email.com',
                'rut': '19'
            }
        };
        sinon.stub(Subscriptions.prototype, 'create').throws();
		const response = await handler.create(event,{});
		res.statusCode = 500;
		res.body = JSON.stringify({message: 'The subscription cannot been created'});
		expect(response).to.eql(res);
    })
    it('All OK, returns 200', async () => {
        const event = {
            body: {
                'name': 'a name',
                'phone': '895547785',
                'email': 'anemail@email.com',
                'rut': '19'
            }
        };
        sinon.stub(Subscriptions.prototype, 'create').resolves(true);
		const response = await handler.create(event,{});
		res.statusCode = 200;
		res.body = JSON.stringify({message: 'The subscription has been created'});
		expect(response).to.eql(res);
    })
})