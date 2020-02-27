let AWS = require('aws-sdk');
const ses = new AWS.SES();

exports.handler = async (event) => {
    try {
        let data = await ses.sendEmail({
            Source: "kumudika@adroitlogic.com",
            Destination: {
                ToAddresses: ['hirudinee@adroitlogic.com'],
                CcAddresses: ['kumudika@adroitlogic.com'],
                BccAddresses: ['kumudika@adroitlogic.com']
            },
            Message: {
                Subject: {
                    Data: "Test subject"
                },
                Body: {
                    Text: {
                        Data: "Test body"
                    }
                }
            }
        }).promise();
        console.log(data);

    } catch (err) {
        // error handling goes here
        console.log(err);
    };

    return { "message": "Successfully executed" };
};