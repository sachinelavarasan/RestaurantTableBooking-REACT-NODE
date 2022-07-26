/* eslint-disable no-self-assign */
/* eslint-disable camelcase */
/* eslint-disable prefer-destructuring */
const S3 = require('aws-sdk/clients/s3');
const path = require('path');
const multiparty = require('multiparty');
const crypto = require('crypto');
const fs = require('fs');
// const aws_config = require('../config/aws.config');

const s3 = new S3({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
});
const bucketName = process.env.AWS_S3_BUCKET_NAME;

const setUploadOptions = (folder, type) => {
  return (req, res, next) => {
    req.folder = folder;
    req.type = type;
    next();
  };
};

const uploadFile = (bucket, key, file, type) => {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    const params = {
      Bucket: bucket || bucketName,
      Key: key,
      Body: file,
      ContentType: type,
      ACL: 'public-read',
    };

    try {
      const uploaded = await s3.upload(params).promise();
      resolve(uploaded);
    } catch (error) {
      reject(error);
    }
  });
};

const s3Upload = (file, key, folder, bucket) => {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    const fileBuffer = await fs.readFileSync(file.path);
    const params = {
      Bucket: bucket || bucketName,
      Key: folder ? `${folder}-${key}` : key,
      Body: fileBuffer,
      ContentType: file.headers['content-type'],
      ACL: 'public-read',
    };

    try {
      const uploaded = await s3.upload(params).promise();
      resolve(uploaded);
    } catch (error) {
      reject(error);
    }
  });
};

const upload = async (req, res, next) => {
  const { folder } = req;
  // const { type } = req;
  const form = new multiparty.Form();
  form.parse(req, async (err, fields, files) => {
    try {
      if (err) {
        throw new Error(`There was an error uploading your file: ${err}`);
      }

      const file = files[`${folder}`] && files[`${folder}`][0];

      if (file) {
        // if (!file.headers['content-type'].includes(type))
        //  { throw new Error(`Invalid file type. Please pass an ${type}`); }
        const ext = path.extname(file.originalFilename);
        const ts = Math.floor(new Date() / 1000);
        const fileS3Name = `${crypto
          .randomBytes(16)
          .toString('hex')}_${ts}${ext}`;
        const uploadedFile = await s3Upload(file, fileS3Name, folder);
        Object.keys(fields).forEach((key) => {
          // eslint-disable-next-line no-param-reassign
          if (fields[key]) fields[key] = fields[key][0];
        });
        req.uploadData = {
          fields,
          fileS3Name,
          size: file.size,
          originalName: file.originalFilename,
          fileName: file.originalFilename,
          fileUrl: uploadedFile.Location,
          fileType: file.headers['content-type'],
        };
        next();
      } else {
        throw new Error('Invalid Request');
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  });
};

const uploadFiles = async (req, res, next) => {
  const profileId = req.user.currentProfile.up_id_userprofile;
  const form = new multiparty.Form();
  form.parse(req, async (err, fields, files) => {
    try {
      if (err) {
        throw new Error(`There was an error uploading your file: ${err}`);
      }

      const file = files.file[0];
      if (file) {
        console.log(file.originalFilename);
        const ext = path.extname(file.originalFilename);
        const ts = Math.floor(new Date() / 1000);
        file.type = file.headers['content-type'];
        file.path = file.path;
        let bucket;
        let generateThumbnail = false;
        switch (fields.type[0]) {
          case '1':
            // bucket = aws_config.S3_IMAGE_BUCKET;
            file.key = `${crypto
              .randomBytes(16)
              .toString('hex')}_${ts}/large${ext}`;
            generateThumbnail = true;
            break;
          case '2':
            // bucket = aws_config.S3_VIDEO_BUCKET;
            generateThumbnail = true;
            file.key = `${crypto
              .randomBytes(16)
              .toString('hex')}_${ts}/large${ext}`;
            break;
          case '5':
            generateThumbnail = false;
            // bucket = aws_config.S3_DOCUMENT_BUCKET;
            file.key = `${crypto.randomBytes(16).toString('hex')}_${ts}${ext}`;
            break;

          default:
            break;
        }

        let thumbnail;

        if (generateThumbnail) {
          thumbnail =
            'https://junglecat-files.s3.ap-southeast-2.amazonaws.com/jc-vid-thumb.png';
        }

        await s3Upload(file, file.key, null, bucket);

        req.file = {
          fi_id_userprofile: profileId,
          fi_id_filetype: fields.type[0],
          fi_filename: file.originalFilename,
          fi_S3_filename: file.key,
          fi_filesize: file.size,
          fi_location: `https://s3-ap-southeast-2.amazonaws.com/${bucket}/${file.key}`,
          fi_id_activity: fields.id_activity[0],
          fi_filename_original: fields.original_name
            ? fields.original_name[0]
            : undefined,
          fi_thumbnail: thumbnail,
          fl_id_activity_item: fields.task_id[0],
          fi_show_on_folio: fields.show_on_folio[0],
        };

        if (fields?.linkVideo) {
          req.linkVideo = fields.linkVideo[0];
        }

        next();
      } else {
        throw new Error('Invalid Request');
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  });
};

module.exports = {
  upload,
  setUploadOptions,
  uploadFiles,
  uploadFile,
};
