module.exports.response = (statusCode = 200, body = {}) => {
    const response = {
        statusCode,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true
        },
        body: JSON.stringify(body)
    };

    console.log('We going to return: ', response);
    return response;
    
}