/* eslint-disable func-names */
/* eslint-disable no-console */
const sgClient = require('@sendgrid/client');

const config = {
  resetPasswordId: 'd-c171a3de178f41b28174666d0a11871d',
  emailVerificationId: 'd-91a3f2841840451d88bb6433e1810afb',
  teacherInvitation: 'd-e0e8ebaa68104d4fbd1ecd58eeb677d5',
  studentInvitation: 'd-90e3c21922514af4a48c4ab1b898278e',
  adminInvitation: 'd-1c43f71b17cd49b1be99d0140ea4a37b',
  adminTeacherInvitation: 'd-7eb4115088864f068c0bb34c36baee69',
  contactEmail: 'd-b30b5e79a8d74618b499318dff018d49',
  emailResponse: 'd-69dad6d75dbc42aa844b00291925263e',
};

exports.sendResetPassword = (data) => {
  sgClient.setApiKey(process.env.SEND_GRID_API_KEY);
  const templateId = config.resetPasswordId;
  const msg = {
    to: [
      {
        email: data.user_email,
        name: data.user_name,
      },
    ],
    from: {
      email: 'no-reply@junglecat.com',
      name: 'JungleCat',
    },
    subject: 'Reset your password in JungleCat',
    template_id: templateId,
    personalizations: [
      {
        to: [
          {
            email: data.user_email,
            name: data.user_name,
          },
        ],
        subject: 'Reset your password in JungleCat',
        dynamic_template_data: {
          user_name: data.user_name,
          user_email: data.user_email,
          org_email: data.org_email,
          org_logo: data.org_logo,
          password_reset_url: data.password_reset_url,
        },
      },
    ],
  };

  return sgClient
    .request({
      method: 'POST',
      url: '/v3/mail/send',
      body: msg,
    })
    .then(([response, body]) => {
      console.log(response.statusCode);
      console.log(body);
    });
};

exports.sendVerification = function (data) {
  sgClient.setApiKey(process.env.SEND_GRID_API_KEY);
  const templateId = config.emailVerificationId;
  const msg = {
    to: [
      {
        email: data.user_email,
        name: data.user_name,
      },
    ],
    from: {
      email: 'no-reply@junglecat.com',
      name: 'JungleCat',
    },
    subject: 'Welcome to JungleCat. Lets verify your email',
    template_id: templateId,
    personalizations: [
      {
        to: [
          {
            email: data.user_email,
            name: data.user_name,
          },
        ],
        subject: 'Welcome to JungleCat. Lets verify your email',
        dynamic_template_data: {
          user_name: data.user_name,
          user_email: data.user_email,
          org_name: data.org_name,
          org_email: data.org_email,
          org_logo: data.org_logo,
          verification_url: data.verification_url,
        },
      },
    ],
  };

  const request = {
    method: 'POST',
    url: '/v3/mail/send',
    body: msg,
  };
  sgClient.request(request).then(([response, body]) => {
    console.log(response.statusCode);
    console.log(body);
  });
};

exports.sendInvitation = function (data) {
  sgClient.setApiKey(process.env.SEND_GRID_API_KEY);
  let templateId;
  if (data.type === 'teacher') {
    templateId = config.teacherInvitation;
  } else if (data.type === 'student') {
    templateId = config.studentInvitation;
  } else if (data.type === 'admin') {
    templateId = config.adminInvitation;
  } else if (data.type === 'adminTeacher') {
    templateId = config.adminTeacherInvitation;
  }
  const msg = {
    to: [
      {
        email: data.user_email,
        name: data.user_name,
      },
    ],
    from: {
      email: 'no-reply@junglecat.com',
      name: 'JungleCat',
    },
    subject: `${data.org_name} invited you to join JungleCat. Please accept.`,
    template_id: templateId,
    personalizations: [
      {
        to: [
          {
            email: data.user_email,
            name: data.user_name,
          },
        ],
        subject: `${data.org_name} invited you to join JungleCat. Please accept.`,
        dynamic_template_data: {
          user_name: data.user_name,
          user_email: data.user_email,
          org_name: data.org_name,
          org_email: data.org_email,
          org_logo: data.org_logo,
          invitation_url: data.invitation_url,
        },
      },
    ],
  };

  const request = {
    method: 'POST',
    url: '/v3/mail/send',
    body: msg,
  };
  sgClient.request(request);
};

exports.sendContactMail = function (substitutions) {
  sgClient.setApiKey(process.env.APIKEY);
  const msg = {
    to: [
     /* {
        email: 'aaron@cordistechnologies.com',
        name: 'Aaron Smith',
      },
      {
        email: 'david.hayes@modernista.com.au',
        name: 'David Hayes',
      }, */
      {
        email: 'mahasooq@bititude.com',
        name: 'Mahasooq AT',
      },
    ],
    from: {
      email: 'hello@junglecat.com',
      name: 'Junglecat',
    },
    subject: 'A new contact from JungleCat',
    template_id: config.contactEmail,
    personalizations: [
      {
        to: [
         /* {
            email: 'aaron@cordistechnologies.com',
            name: 'Aaron Smith',
          },
          {
            email: 'david.hayes@modernista.com.au',
            name: 'David Hayes',
          },*/
          {
            email: 'mahasooq@bititude.com',
            name: 'Mahasooq AT',
          },
        ],
        dynamic_template_data: substitutions,
      },
    ],
  };

  const request = {
    method: 'POST',
    url: '/v3/mail/send',
    body: msg,
  };
  sgClient.request(request).then(([response, body]) => {
    console.log(response.statusCode);
    console.log(body);
  });
};

exports.sendMailResponse = function (data) {
  sgClient.setApiKey(process.env.APIKEY);
  const msg = {
    to: [
      {
        email: data.c_email,
        name: data.c_name,
      },
    ],
    from: {
      email: 'david@junglecat.com',
      name: 'David Hayes',
    },
    subject: 'Thank you for your interest in JungleCat.',
    template_id: config.emailResponse,
    personalizations: [
      {
        to: [
          {
            email: data.c_email,
            name: data.c_name,
          },
        ],
        dynamic_template_data: data,
      },
    ],
  };

  const request = {
    method: 'POST',
    url: '/v3/mail/send',
    body: msg,
  };
  sgClient.request(request).then(([response, body]) => {
    console.log(response.statusCode);
    console.log(body);
  });
};
exports.addContact = function (data) {
  sgClient.setApiKey(process.env.APIKEY);
  const request = {
    method: 'PUT',
    url: '/v3/marketing/contacts',
    body: {
      list_ids: ['2417fef1-870b-42fc-8cad-7b83d3068d75'],
      contacts: [
        {
          email: data.c_email,
          first_name: data.c_name,
          custom_fields: {
            contact_message: data.message,
          },
        },
      ],
    },
  };
  sgClient.request(request).then(([response, body]) => {
    console.log(response.statusCode);
    console.log(body);
  });
};
