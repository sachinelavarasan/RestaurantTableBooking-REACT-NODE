import instance from ".."

const verifyInviteCode = (data) =>
  instance.post("/auth/invitation-code/verify", data)

export default verifyInviteCode
