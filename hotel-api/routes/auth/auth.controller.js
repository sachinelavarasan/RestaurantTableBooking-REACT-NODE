const uuidv4 = require('uuid/v4');

const User = require('../models/user.model');

const hotelDetail = require('../models/orgDetail.model');

const authHelper = require('../../utils/auth');

const stringHelper = require('../../utils/stringHelper');

const sendEmail = require('../../utils/sendMail');
// require('./auth.event');

/**
 * @api {post} /auth/login Login for any type of user
 * @apiName Login
 * @apiGroup Auth
 *
 * @apiParam (Request body) {String} us_email  Users's email
 * @apiParam (Request body) {String} us_password  Users's password
 *
 * @apiSuccess {String} status status .
 * @apiSuccess {String} message message .
 * @apiSuccess {String} token JWT token .
 * @apiSuccess {String} user user .
 *
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * {
 *  "status": true,
 *  "message": "Succesfully logged in",
 *  "token": "CI6IkpXVCJ9.ds.d-_Zkw",
 *  "user": {
 *   "us_id_user": "fa29e238-5120-470f-a3e9-edf743c664b1",
 *   "us_email": "adil@example.com",
 *   "us_profile_name": "hm",
 *   "userProfiles": [
 *    {
 *       "up_id_userprofile": "FA18533E-7CC4-4EAA-A88B-B8C2685CEAD6",
 *       "up_id_user": "7B46E364-E0BB-431E-9B45-E0F7E7F450E3",
 *       "up_id_typeuserprofile": 2,
 *       "up_id_org": "FBDAF229-A767-4B08-8733-983F03E2D954",
 *       "up_org_reference": "20052484",
 *       "up_name_first": "Sawano",
 *       "up_name_last": "YUKA",
 *       "up_timestamp_creation": "2019-02-04T10:04:24.000Z",
 *       "up_email": null,
 *       "up_invitation_token": null,
 *       "up_invitation_status": 0,
 *       "up_active": 1
 *    }
 *    ],
 *    "userClasses": [
 *    {
 *        "ocs_id_orgclass_student": "3e43f3cb-f162-4887-8399-578f205d55ca",
 *        "ocs_id_orgclass": "ef4be701-c456-4701-b961-7ecd2e11621d",
 *        "ocs_id_userprofile_student": "117e079f-d6a4-4815-8c61-6f914b2f5bbd",
 *        "ocs_timestamp_creation": "2020-06-30T02:00:06.000Z",
 *        "ocs_active": null,
 *        "oc_id_orgclass": "ef4be701-c456-4701-b961-7ecd2e11621d",
 *        "oc_id_org": "81d6997c-b9e9-11ea-aa15-0a83b17c523a",
 *        "oc_id_orgacadyear": "447870fc-413e-4292-afbb-342fbd11fbb3",
 *        "oc_id_orgacadterm": "c95aaa22-3b42-4f68-8ef3-16e458eed359",
 *        "oc_id_orgdepartment": "c69da929-1fce-44ab-89b9-94bbe3dba31f",
 *        "oc_id_orglocationcampus": "DC1",
 *        "oc_id_orglocationroom": "cc168add-b569-4631-8f79-347b30819a77",
 *        "oc_class": "10-F",
 *        "oc_org_identifier": null,
 *        "oc_id_userprofile_teacher": null,
 *        "oc_created_at": "2020-06-30T02:12:31.000Z",
 *        "oc_created_by": null
 *    }
 *    ]
 *  }
 * }
 *
 * @apiErrorExample Error-Response: incorrect creds passed
 * HTTP/1.1 401 Not Found
 * {
 *  "status": false,
 *  "message": "Incorrect Login Credentials"
 * }
 */

const login = async (req, res) => {
  if (!req.body.us_email || !req.body.us_password) {
    return res.status(400).json({
      message: !req.body.us_email
        ? 'Enter your email address.'
        : 'Enter your password.',
      field: !req.body.us_password ? 'password' : 'email',
      status: false,
    });
  }

  try {
    const user = await User.findOne({
      email: req.body.us_email,
      is_login: true,
    });

    await authHelper.comparePasswords(req.body.us_password, user.password);

    if (user.is_active !== 1) {
      const url = `<p>Click the link to verify your account</p> - ${process.env.ROOT}/verify/${user.user_id}`;
      await sendEmail(user.email, 'Verify Email', url);

      return res.status(403).json({
        status: false,
        message: 'Your account not verified.Check your mail',
      });
    }

    const token = authHelper.createJWTToken(user);

    const organisation = await hotelDetail.find({
      hotel_user_id: user.user_id,
    });

    const loginUser = {
      user_id: user.user_id,
      us_email: user.email,
      userProfile: user,
      organisation,
    };

    return res.status(200).send({
      status: true,
      message: 'Successfully logged in',
      token,
      user: loginUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      status: false,
      message: 'The email address or password is incorrect.',
    });
  }
};

/**
 * @api {get} /auth/userDetails Get user details with class list
 * @apiName User Details
 * @apiGroup Auth
 *
 * @apiSuccess {String} status status .
 * @apiSuccess {String} message message .
 * @apiSuccess {String} user user .
 *
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * {
 *  "status": true,
 *  "user": {
 *   "us_id_user": "fa29e238-5120-470f-a3e9-edf743c664b1",
 *   "us_email": "adil@example.com",
 *   "us_profile_name": "hm",
 *   "userProfiles": [
 *    {
 *       "up_id_userprofile": "FA18533E-7CC4-4EAA-A88B-B8C2685CEAD6",
 *       "up_id_user": "7B46E364-E0BB-431E-9B45-E0F7E7F450E3",
 *       "up_id_typeuserprofile": 2,
 *       "up_id_org": "FBDAF229-A767-4B08-8733-983F03E2D954",
 *       "up_org_reference": "20052484",
 *       "up_name_first": "Sawano",
 *       "up_name_last": "YUKA",
 *       "up_timestamp_creation": "2019-02-04T10:04:24.000Z",
 *       "up_email": null,
 *       "up_invitation_token": null,
 *       "up_invitation_status": 0,
 *       "up_active": 1
 *    }
 *    ],
 *    "userClasses": [
 *    {
 *        "ocs_id_orgclass_student": "3e43f3cb-f162-4887-8399-578f205d55ca",
 *        "ocs_id_orgclass": "ef4be701-c456-4701-b961-7ecd2e11621d",
 *        "ocs_id_userprofile_student": "117e079f-d6a4-4815-8c61-6f914b2f5bbd",
 *        "ocs_timestamp_creation": "2020-06-30T02:00:06.000Z",
 *        "ocs_active": null,
 *        "oc_id_orgclass": "ef4be701-c456-4701-b961-7ecd2e11621d",
 *        "oc_id_org": "81d6997c-b9e9-11ea-aa15-0a83b17c523a",
 *        "oc_id_orgacadyear": "447870fc-413e-4292-afbb-342fbd11fbb3",
 *        "oc_id_orgacadterm": "c95aaa22-3b42-4f68-8ef3-16e458eed359",
 *        "oc_id_orgdepartment": "c69da929-1fce-44ab-89b9-94bbe3dba31f",
 *        "oc_id_orglocationcampus": "DC1",
 *        "oc_id_orglocationroom": "cc168add-b569-4631-8f79-347b30819a77",
 *        "oc_class": "10-F",
 *        "oc_org_identifier": null,
 *        "oc_id_userprofile_teacher": null,
 *        "oc_created_at": "2020-06-30T02:12:31.000Z",
 *        "oc_created_by": null
 *    }
 *    ]
 *  }
 * }
 *
 * @apiErrorExample Error-Response: incorrect creds passed
 * HTTP/1.1 401 Not Found
 * {
 *  "status": false,
 *  "message": "Incorrect Login Credentials"
 * }
 */

/**
 * @api {post} /auth/forgot-password Send forgot-password email to specified email.
 * @apiName Forgot-password
 * @apiGroup Auth
 *
 * @apiParam (Request body) {String} us_email  Users's email
 *
 * @apiSuccess {String} status status .
 * @apiSuccess {String} message message .
 * @apiSuccess {String} user user .
 *
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * {
 *  "status": true,
 *  "message": "Successfully send reset email.",
 *  "user": {
 *   "us_id_user": "fa29e238-5120-470f-a3e9-edf743c664b1",
 *   "us_email": "adil@example.com",
 *   "us_profile_name": "hm",
 *   "us_password": "$2a$10$HYSGldTus2M/NI3QsMhS9Ok.V3wqSdUvCk6l9U7ID4GxkgKwAKzvW",
 *   "us_password_salt": "$2a$10$HYSGldTus2M/NI3QsMhS9O",
 *   "us_active": 1,
 *   "us_mobile_notification_token": null,
 *   "us_timestamp_creation": "2020-08-14T12:45:45.000Z",
 *   "us_verification_token": null,
 *   "us_password_reset_token": null
 *   "userProfile": [
 *    {
 *        "up_id_userprofile": "f43ecda2-9dd7-46a2-af70-712d0c4d052e",
 *        "up_id_user": "bdacdaea-411a-42bd-bf21-8b7b3378a71f",
 *        "up_id_typeuserprofile": 2,
 *        "up_id_org": "81d6997c-b9e9-11ea-aa15-0a83b17c523a",
 *        "up_org_reference": "DS003",
 *        "up_name_first": "Fida",
 *        "up_name_last": "Basheer",
 *        "up_timestamp_creation": "2020-06-29T09:48:00.000Z",
 *        "up_email": "fida@bititude1.com",
 *        "up_invitation_token": "751c2a57-d522-4972-81b6-bf296b2e25d0",
 *        "up_invitation_status": 1,
 *        "up_active": 1
 *    }
 *    ]
 *  }
 * }
 *
 * @apiErrorExample Error-Response: invalid email passed
 * HTTP/1.1 401 Not Found
 * {
 *  "status": false,
 *  "message": "User not found."
 * }
 *
 * @apiErrorExample Error-Response: techincal issue
 * HTTP/1.1 401 Not Found
 * {
 *  "status": false,
 *  "message": "Failed sending reset email."
 * }
 */
const forgotPassword = async (req, res) => {
  try {
    if (!req.body.us_email) {
      return res.status(400).json({
        message: 'Enter your email address.',
        field: 'email',
        status: false,
      });
    }

    const user = await User.findUser({
      email: req.body.us_email,
      is_active: 1,
    });
    if (user) {
      const url = `<p>Click the link to reset password to your account</p> - ${process.env.ROOT}/password-reset/${user.user_id}`;

      await sendEmail(user.email, 'Reset password', url);
    }

    return res.status(200).json({
      status: true,
      message: 'Successfully send reset email.',
      user,
    });
  } catch (error) {
    const message =
      error.message === 'EmptyResponse'
        ? "Couldn't find your account."
        : 'Something went wrong.';

    return res.status(400).json({
      message,
      field: 'email',
      status: false,
    });
  }
};

/**
 * @api {post} /auth/password-reset Update user pw with the specified pw.
 * @apiName Reset-password
 * @apiGroup Auth
 *
 * @apiParam {String} password Mandatory password.
 * @apiParam {String} c_password Mandatory confirm-password.
 * @apiParam {String} token Mandatory reset token.
 *
 * @apiSuccess {String} status status .
 * @apiSuccess {String} message message .
 *
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   "status": true,
 *   "message": "Successfully updated password"
 * }
 *
 * @apiErrorExample Password-mismatch: pw and confirm pw is not equal.
 * HTTP/1.1 422 Unprocessable Entity
 * {
 *  "status": false,
 *  "message": "Password mismatch."
 * }
 *
 * @apiErrorExample Error-Response: technical issue
 * HTTP/1.1 400 Not Found
 * {
 *  "status": false,
 *  "message": "Failed resetting password."
 * }
 */
const resetPassword = async (req, res) => {
  try {
    if (req.body.password.length < 8) {
      return res.status(400).json({
        error: 'Password must be at least 8 characters.',
        field: 'password',
        status: false,
      });
    }

    if (req.body.password !== req.body.c_password) {
      return res.status(400).json({
        error: 'Confirm password mismatch',
        field: 'confirmpassword',
        status: false,
      });
    }

    const { id } = req.body;

    const { password, salt } = await authHelper.encryptPassword(
      req.body.password
    );

    // update user with the new pasword
    await User.updateUser(
      { user_id: id, is_active: 1 },
      {
        password: password,
        password_salt: salt,
      }
    );

    return res.status(200).json({
      status: true,
      message: 'Successfully updated password',
    });
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: 'Failed resetting password.',
    });
  }
};

/**
 * @api {post} /auth/request-code Adds a request for creating invitation code.
 * @apiName Request-code
 * @apiGroup Auth
 *
 * @apiParam {String} email .
 * @apiParam {String} phone  .
 * @apiParam {String} org_name  .
 *
 * @apiSuccess {String} status status .
 * @apiSuccess {String} message message .
 *
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   "status": true,
 *   "message": "Contact Registered"
 * }
 *
 * @apiErrorExample Validation-errors
 * HTTP/1.1 422 Unprocessable Entity
 * {
 * "errors": [{
 *   "location": "body",
 *   "param": "email",
 *   "value": "",
 *   "msg": "Invalid value"
 * }]
 * }
 *
 * @apiErrorExample Error-Response: other issues
 * HTTP/1.1 400 Bad Request
 * {
 *  "status": false,
 *  "message": "Failed registering contact."
 * }
 */

/**
 * @api {post} /auth/invitation-code/verify  Verifies the given invitation code.
 * @apiName Verify invitation code.
 * @apiGroup Auth
 *
 * @apiParam {String} invitation_code .
 *
 * @apiSuccess {String} status status .
 *
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   "status": true,
 * }
 *
 * @apiErrorExample Error-Response: Invalid code
 * HTTP/1.1 400 Bad Request
 * {
 *  "status": false,
 *  "message": "Invalid invitation code."
 * }
 */

/**
 * @api {post} /auth/register/org-admin Register an org-admin.
 * @apiName OrgAdmin registration.
 * @apiGroup Auth
 *
 * @apiParam {email} email .
 * @apiParam {full_name} fullname .
 * @apiParam {password} password .
 * @apiParam {org_name} org-name .
 *
 * @apiSuccess {String} status status .
 * @apiSuccess {String} message message .
 *
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   "status": true,
 *   "message": "User registered successfully",
 * }
 *
 * @apiErrorExample Error-Response: Validation
 * HTTP/1.1 422 Bad Request
 * {
 *  "status": false,
 *  "message": "User already exists."
 * }
 *
 * @apiErrorExample Error-Response:
 * HTTP/1.1 400 Bad Request
 * {
 *  "status": false,
 *  "message": "Registration failed."
 * }
 */
const registerOrgAdmin = async (req, res) => {
  console.log(req.body);
  try {
    const userExists = await User.find({
      email: req.body.email,
    });

    if (userExists) {
      return res.status(400).json({
        message:
          'The email address you entered is already used by another person',
        field: 'email',
        status: false,
      });
    }
    if (req.body.password !== req.body.c_password) {
      return res.status(400).json({
        message: 'passwords are not match ',
        field: 'password',
        status: false,
      });
    }
    if (req.body.org_type === 'Hotel') {
      const orgExists = await hotelDetail.find({
        hotel_name: req.body.restaurant_name,
      });

      if (orgExists) {
        return res.status(422).json({
          status: false,
          message:
            'The hotel name you entered is already used by another person',
        });
      }
    }
    // create user
    const { password, salt } = await authHelper.encryptPassword(
      req.body.password
    );
    // split fullname into first & last name.
    const { firstName, lastName } = stringHelper.splitNameFromFullName(
      req.body.full_name
    );

    const user = await User.createUser({
      user_id: uuidv4(),
      email: req.body.email,
      user_address: `${req.body.state_name}, ${req.body.district_name}`,
      user_type: req.body.org_type === 'Hotel' ? 1 : 2,
      first_name: firstName,
      last_name: lastName,
      password: password,
      password_salt: salt,
      user_avatar: req.body.imgLoca,
      is_active: 0,
    });

    if (user.user_type === 1) {
      const details = {
        hotel_id: uuidv4(),
        address: `${req.body.state_name}, ${req.body.district_name}`,
        hotel_name: req.body.restaurant_name,
        hotel_user_id: user?.user_id,
      };
      const org = await hotelDetail.createHotel(details);
    }

    const url = `<p>Click the link to verify your account</p> - ${process.env.ROOT}/verify/${user.user_id}`;

    await sendEmail(user.email, 'Verify Email', url);
    // create org

    return res
      .status(200)
      .json({ status: true, message: 'User registered successfully.' });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ status: false, message: 'Registration failed.' });
  }
};
const findOrgName = async (request, response) => {
  try {
    if (request.body.rtocode) {
      return response.status(200).json({
        orgname: 'Victoria University',
        field: 'OrgName',
        status: true,
      });
    }

    return response.status(400).json({
      error: 'Please type RTO code',
      field: 'rtoCode',
      status: false,
    });
  } catch (error) {
    return response.status(500).json({
      error: error.message,
      status: false,
    });
  }
};

/**
 * @api {post} /auth/org-admin/verify Verify org-admin after signup.
 * @apiName OrgAdmin verification.
 * @apiGroup Auth
 *
 * @apiParam {verification_token} code .
 *
 * @apiSuccess {String} status status .
 * @apiSuccess {String} message message .
 *
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   "status": true,
 *   "message": "User verified successfully",
 * }
 *
 * @apiErrorExample Error-Response:
 * HTTP/1.1 400 Bad Request
 * {
 *  "status": false,
 *  "message": "Verification failed.Invalid token."
 * }
 */
const verifyUser = async (req, res) => {
  try {
    // activate user
    const { userId } = req.params;
    const user = await User.findUser({
      user_id: userId,
      is_active: 0,
    });

    if (user) {
      await User.updateUser(
        {
          user_id: userId,
        },
        {
          is_active: 1,
        }
      );
    }

    return res.status(200).send({
      status: true,
      message: 'Verified Succesfully',
    });
  } catch (error) {
    return res
      .status(400)
      .json({ status: false, message: 'Verification failed.Invalid token.' });
  }
};

const findUserByToken = async (request, response) => {
  try {
    const { id } = request.query;

    const user = await User.findUser({
      us_password_reset_token: id,
      us_active: 1,
    });
    response.json({
      user,
      status: true,
    });
  } catch (error) {
    response.status(500).json({
      error: error.message,
      status: false,
    });
  }
};

module.exports = {
  login,
  forgotPassword,
  resetPassword,
  findOrgName,
  findUserByToken,

  registerOrgAdmin,
  verifyUser,
};
