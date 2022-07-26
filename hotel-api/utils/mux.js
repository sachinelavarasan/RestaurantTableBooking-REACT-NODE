/* eslint-disable camelcase */
const Mux = require('@mux/mux-node');

const { Video } = new Mux(
  process.env.MUX_TOKEN_ID,
  process.env.MUX_TOKEN_SECRET
);

exports.upload = async (params) => {
  const { url, name, metadata } = params;
  console.log(url, name, metadata);
  try {
    const result = await Video.Assets.create({
      input: url,
      // input: [{
      //   url,
      //   name
      // }, {
      //   url: 'https://junglecat-files.s3.ap-southeast-2.amazonaws.com/jc-watermark.png',
      //   overlay_settings: {
      //     vertical_align: 'bottom',
      //     horizontal_align: 'right',
      //     vertical_margin: '10px',
      //     horizontal_margin: '10px',
      //   }
      // }],
      playback_policy: [
        'signed'
      ],
      test: process.env.APP_STAGE === 'development',
    });
    return {
      status: true,
      playback_id: result.playback_ids[0].id,
      asset_id: result.id,
    };
  } catch (error) {
    console.log('error: ', error);
    return false;
  }
};

exports.getVideos = async () => {
  const assets = await Video.Assets.list();
  console.log(assets);
  return assets;
};

exports.getVideo = async (assetId) => {
  const asset = await Video.Assets.get(assetId);
  return asset;
};

exports.getVideoToken = async (playback_id) => {
  const { JWT } = Mux;

  // Set some base options we can use for a few different signing types
  // Type can be either video, thumbnail, gif, or storyboard
  const options = {
    keyId: process.env.MUX_KEY_ID,
    keySecret: process.env.MUX_KEY_SECRET,
    expiration: '1d',
    type: 'video'
  };

  const token = JWT.sign(playback_id, options);

  return token;
};

exports.getThumbnailToken = async (playback_id) => {
  const { JWT } = Mux;

  // Set some base options we can use for a few different signing types
  // Type can be either video, thumbnail, gif, or storyboard
  const options = {
    keyId: process.env.MUX_KEY_ID,
    keySecret: process.env.MUX_KEY_SECRET,
    expiration: '1d',
    type: 'thumbnail'
  };

  const token = JWT.sign(playback_id, options);

  return token;
};
