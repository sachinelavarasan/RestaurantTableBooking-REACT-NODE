import instance from ".."

export const signup = (data) => instance.post("auth/register/org-admin", data)
export const findOrgName = (code) =>
  instance.get(`api/tgov/organisation/${code}`)
