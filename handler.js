'use strict';

var AWS = require("aws-sdk");

module.exports.postItem = (event, context, callback) => {
  
  AWS.config.update({
    region: "us-west-1",
    endpoint: "http://dynamodb.us-west-1.amazonaws.com"
  });

  var dynamodb = new AWS.DynamoDB({secretAccessKey: process.env.SECRETACCESSKEY, accessKeyId: process.env.ACCESSKEY}).DocumentClient();
  var params = {
    TableName: "catalogue",
    Key: {
        "category": "shirt"
    }
  };

  dynamodb.get(params, function(err, data) {
    if (err) {
      console.error("sucks to suck");
    } else {
      callback(null, data);
    }
  });

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
};
