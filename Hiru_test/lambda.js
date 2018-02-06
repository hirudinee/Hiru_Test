let AWS = require('aws-sdk');
let SL = require('@slappforge/slappforge-sdk');
const sqs = new SL.AWS.SQS(AWS);
exports.handler = function (event, context, callback) {
	sqs.sendMessage({
		MessageBody: 'This is a test sample message',
		QueueUrl: 'https://sqs.us-east-2.amazonaws.com/480964559519/new_as2',
		DelaySeconds: '0',
		MessageAttributes: {}
	}, function (data) {
		// your logic (logging etc) to handle successful message delivery, should be here
	}, function (error) {
		// your logic (logging etc) to handle failures, should be here
	});


	callback(null, 'Successfully executed');
}