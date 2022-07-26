/* eslint-disable no-unneeded-ternary */
/* eslint-disable import/prefer-default-export */

function splitNameFromFullName(fullName) {
  const hasNoSpaces = fullName.indexOf(' ') === -1 ? true : false;
  if (hasNoSpaces) {
    return {
      firstName: fullName,
      lastName: '',
    };
  }

  const firstName = fullName.substr(0, fullName.indexOf(' '));
  const lastName = fullName.substr(fullName.indexOf(' ') + 1);

  return { firstName, lastName };
}

module.exports = {
  splitNameFromFullName,
};
