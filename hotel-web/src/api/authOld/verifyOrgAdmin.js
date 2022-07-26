import instance from ".."

export const verifyOrgAdmin = (data) =>
  instance.post("/auth/org-admin/verify", data)

export const getImportStatus = (organisationId) =>
  instance.get(`/auth/${organisationId}/import-status`)
