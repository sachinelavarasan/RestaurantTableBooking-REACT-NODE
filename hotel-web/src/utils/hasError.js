/* eslint-disable no-prototype-builtins */

// check and return prop from given react-hook-error object.
const hasError = (errors, prop) => {
  // if error object has the prop then it is invalid
  if (errors.password?.types?.hasOwnProperty(prop)) {
    return false
  }

  // if has a password key and empty types then valid.
  return true
}

export default hasError
