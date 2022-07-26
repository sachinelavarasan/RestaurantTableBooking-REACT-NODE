const request = require('request');

exports.sendNotification = (data) => {
  return new Promise((resolve, reject) => {
    request(
      {
        body: JSON.stringify({
          data: {
            message: {
              item: data.item,
            },
          },
          notification: {
            badge: 1,
            body: data.text,
            sound: 'default',
            title: data.title,
          },
          registration_ids: data.notificationTokens,
        }),
        headers: {
          Authorization:
            'key=AAAA_V7fKnY:APA91bHtxNGaUms-j5XlSVf14o4l1FF9JXLY4Tr-btP_M8YM5N2gTquUYwFACiWWatizUBvCLOMeNFuL4SBhf8Non1HuMjNpxUfRLWM7kLereTnHxsFJm1tBEhuBfXsA_AfizsrMTsjC',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        url: 'https://fcm.googleapis.com/fcm/send',
      },
      (error, response, body) => {
        if (error || response.statusCode >= 400) {
          // eslint-disable-next-line no-console
          console.error(error, response, body);
          reject();
        } else resolve();
      }
    );
  });
};
