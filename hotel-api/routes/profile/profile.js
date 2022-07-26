/* eslint-disable camelcase */

const path = require('path');
const multiparty = require('multiparty');
// const aws_config = require('../../config/aws.config');

const OrgModel = require('../models/orgDetail.model');
const userModel = require('../models/user.model');

exports.getProfile = (req, res) => {
  res.status(200).json({
    status: true,
    user: {
      us_id_user: req.user.user_id,
      us_email: req.user.email,
      us_profile_name: req.user.first_name,
      userProfile: req.user,
    },
  });
};

exports.getOrganisation = async (request, response) => {
  try {
    const organisation = await OrgModel.find({
      hotel_user_id: request.user.user_id,
    });
    return response.status(200).json({
      organisation,
      status: true,
    });
  } catch (error) {
    return response.status(500).json({
      error: error.message,
      status: false,
    });
  }
};

