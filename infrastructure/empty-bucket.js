'use strict';
const AWS = require('aws-sdk');
const s3 = new AWS.S3({ apiVersion: '2006-03-01', region: 'us-east-1' });

module.exports.handler = (event, context, callback) => {
  console.log('Received request to empty S3 bucket', JSON.stringify(event));
  if(event.RequestType === 'Delete') {
      const bucket = event.ResourceProperties.BucketName;
      Promise.all( [ Promise.resolve(bucket), getObjects(bucket) ] )
        .then(emptyBucket)
        .then( () => {
            console.log('Successfully emptied bucket');
            sendResponse(event, context, 'SUCCESS');
        })
        .catch( err => {
            console.log('Error while emptying bucket', err);
            sendResponse(event, context, 'ERROR');
        })
  } else return sendResponse(event, context, 'SUCCESS');
};

let getObjects = (bucket) => {
    const params = { Bucket: bucket };
    console.log('Getting objects from bucket with params', params);
    return s3.listObjectsV2(params).promise();
};

let emptyBucket = (data) => {
    console.log('Received data for emptying the bucket', data);
    let bucket = data[0], objects = data[1].Contents;
    let toDelete = objects.map( object => {
        return { Key: object.Key };
    });
    const params = {
        Bucket: bucket,
        Delete: { Objects: toDelete }
    };
    console.log('Deleting objects from bucket with params', params);
    return s3.deleteObjects(params).promise();
}

let sendResponse = (event, context, responseStatus, responseData, physicalResourceId) => {
    let responseBody = JSON.stringify({
        Status: responseStatus,
        Reason: 'See the details in CloudWatch Log Stream: ' + context.logStreamName,
        PhysicalResourceId: physicalResourceId || context.logStreamName,
        StackId: event.StackId,
        RequestId: event.RequestId,
        LogicalResourceId: event.LogicalResourceId,
        Data: responseData
    });
 
    console.log('Response body:\n', responseBody);
 
    var https = require('https');
    var url = require('url');
 
    var parsedUrl = url.parse(event.ResponseURL);
    var options = {
        hostname: parsedUrl.hostname,
        port: 443,
        path: parsedUrl.path,
        method: 'PUT',
        headers: {
            'content-type': '',
            'content-length': responseBody.length
        }
    };
 
    var request = https.request(options, function(response) {
        console.log('Status code: ' + response.statusCode);
        console.log('Status message: ' + response.statusMessage);
        context.done();
    });
 
    request.on('error', function(error) {
        console.log('send(..) failed executing https.request(..): ' + error);
        context.done();
    });
 
    request.write(responseBody);
    request.end();
};
