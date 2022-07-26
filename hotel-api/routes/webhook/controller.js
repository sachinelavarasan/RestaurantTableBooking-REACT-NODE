const eventEmitter = require('../../config/event-emitter');
// require('./event');

exports.mux = (req, res) => {
  const {
    type,
    object: { id },
  } = req.body;

  console.log(type, id);

  if (type === 'video.asset.ready') {
    // get the asset thumbnail and upload to s3
    console.log('[***] Saving Thumbnail');
    eventEmitter.emit('saveVideoThumbnail', id);
  }
  return res.json({ status: true });
};
