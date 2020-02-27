let AWS = require('aws-sdk');
const ses = new AWS.SES();

exports.handler = async (event) => {
    try {
        let data = await ses.sendEmail({
            Source: "kumudika@adroitlogic.com",
            Destination: {
                ToAddresses: ['hirudinee@adroitlogic.com']
            },
            Message: {
                Subject: {
                    Data: "Test"
                },
                Body: {
                    Text: {}
                }
            }
        }).promise();
        console.log(data);

    } catch (err) {
        // error handling goes here
    };

    return { "message": "Successfully executed" };
};