/**
 * Gets the file type ID of a file based on its mime type.
 * @param {string} mimeType
 * @returns {number | undefined}
 */
exports.getFileTypeId = function getFileTypeId(mimeType) {
  switch (mimeType) {
    case 'application/msword':
    case 'application/pdf':
    case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
      return 5;
    case 'audio/mp3':
    case 'audio/webm;codecs=opus':
    case 'audio/mpeg':
      return 7;
    case 'image/jpeg':
    case 'image/png':
      return 1;
    case 'video/mp4':
    case 'video/quicktime':
    case 'video/webm':
    case 'video/x-matroska;codecs=avc1,opus':
      return 2;
    default:
      return 5;
  }
};
