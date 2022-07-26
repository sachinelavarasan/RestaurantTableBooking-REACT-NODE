/* eslint-disable no-unused-vars */
const axios = require('axios');
const s3ParseUrl = require('s3-url-parser');
const crypto = require('crypto');
const eventEmitter = require('../../config/event-emitter');
const MuxUtil = require('../../utils/mux');
const File = require('../models/file.model');
const fileUpload = require('../../utils/file-upload');
// const AWSConfig = require('../../config/aws.config');

const bucketName = process.env.AWS_S3_BUCKET_NAME;

async function downloadToBuffer(url) {
  return axios
    .get(url, {
      responseType: 'arraybuffer',
    })
    .then((response) => {
      const buffer = Buffer.from(response.data, 'base64');
      return buffer;
    })
    .catch((err) => {
      return { type: 'error', err };
    });
}

eventEmitter.on('saveVideoThumbnail', async (assetId) => {
  try {
    if (!assetId) return;
    const file = await File.getOne({
      fi_mux_asset_id: assetId,
    });
    if (!file) return;

    const token = await MuxUtil.getThumbnailToken(file.fi_mux_playback_id);
    if (!token) return;

    const thumbnail = `https://image.mux.com/${file.fi_mux_playback_id}/thumbnail.jpg?token=${token}`;

    const buffer = await downloadToBuffer(thumbnail);
    if (!buffer) return;
    const timestamp = Math.floor(new Date() / 1000);

    const key = `${crypto.randomBytes(16).toString('hex')}_${timestamp}.jpg`;

    await fileUpload.uploadFile(bucketName, key, buffer, 'image/jpeg');
    console.log('Uploaded thumbnail to S3');
    // update thumbnail url
    await File.updateFile(
      {
        fi_mux_asset_id: assetId,
      },
      {
        fi_thumbnail: `https://${bucketName}.s3.amazonaws.com/${key}`,
      }
    );
  } catch (error) {
    console.log('Error saving thumbnail : ', assetId);
  }
});
