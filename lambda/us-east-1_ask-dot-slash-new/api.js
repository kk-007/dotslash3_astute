var request = require('request');






var AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});


function sendComplainEmail(PNRNumber){

    PNRNumber = PNRNumber.toUpperCase();

    var params = {
        Destination: { /* required */
          CcAddresses: [
          ],
          ToAddresses: [
            //req.params.email,
            "nikmul19@gmail.com",
          ]
        },
        Message: { /* required */
          Body: { /* required */
            Html: {
             Charset: "UTF-8",
             Data: `Complaint regarding ${PNRNumber} has been lodged and you can keep checking your status at <a href='www.goindigo.in'> Indigo.in</a>`
            },
            Text: {
             Charset: "UTF-8",
             Data: "TEXT_FORMAT_BODY"
            }
           },
           Subject: {
            Charset: 'UTF-8',
            Data: 'Complaint For Missing Luggage lodged'
           }
          },
        Source: 'nikmul19@gmail.com', /* required */
        ReplyToAddresses: [
           'nikmul19@gmail.com',
          /* more items */
        ],
      };
      console.log(params);
      // Create the promise and SES service object
      var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();
      
      // Handle promise's fulfilled/rejected states
     return sendPromise;

       

}



function getPNRDetails(PNR){


    return new Promise(function(resolve,reject){
        var options = {
            'method': 'GET',
            'url': 'https://us-central1-dotslash-fb97a.cloudfunctions.net/API/pnr/'+PNR,
            'headers': {
            }
        };
        request(options, function (error, response) { 
            if (error) reject(error);

            console.log("response"+response.body);
            resolve(response.body);
        });

    });
    
    
}





function getBookingDetails(PNR){


    return new Promise(function(resolve,reject){
        var options = {
            'method': 'GET',
            'url': 'https://us-central1-dotslash-fb97a.cloudfunctions.net/API/luggage/'+PNR,
            'headers': {
            }
        };
        request(options, function (error, response) { 
            if (error) reject(error);

            console.log("response"+response.body);
            resolve(response.body);
        });

    });
    
    
}

exports.getBookingDetails=getBookingDetails;
exports.getPNRDetails=getPNRDetails;

exports.sendComplainEmail = sendComplainEmail;