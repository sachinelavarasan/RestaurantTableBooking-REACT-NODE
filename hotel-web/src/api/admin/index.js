/* eslint-disable import/prefer-default-export */
import instance from ".."

export const fetchOrgBasicInfo = () => instance.get(`api/admin/org/basicInfo`)
export const updateOrgBasicInfo = (data) =>
  instance.patch(`api/admin/org/updateBasicInfo`, data)
export const delOrgLogo = () => instance.patch(`api/admin/org/deleteOrgLogo`)
export const fetchOrgDepartments = () =>
  instance.get(`api/admin/org/departments/`)
export const deleteOrgDepartment = (departmentId) =>
  instance.delete(`api/admin/org/departments/${departmentId}`)
export const fetchAllDepartmentsList = () =>
  instance.get(`api/admin/org/departments/alldepartments`)
export const addOrgDepartment = (data) =>
  instance.post(`api/admin/org/departments/addDepartment`, data)
export const addOrgNewDepartment = (data) =>
  instance.post(`api/admin/org/departments/addNewDepartment`, data)
export const fetchOrgAcademicYear = (offset, count) =>
  instance.get(
    `api/admin/org/academicyear?offset=${offset || 0}&count=${count || 0}`
  )
export const addOrgAcademicYear = (data) =>
  instance.post(`api/admin/org/academicyear/addAcademicYear`, data)
export const editOrgAcademicYear = (academicYearId, data) =>
  instance.patch(`api/admin/org/academicyear/${academicYearId}`, data)
export const deleteOrgAcademicYear = (academicYearId) =>
  instance.delete(`api/admin/org/academicyear/${academicYearId}`)

export const fetchOrgAdmins = () => instance.get(`api/admin/org/allAdmin`)
export const addOrgAdmin = (data) =>
  instance.post(`api/admin/org/admin/addAdmin`, data)
export const addOrgAdminSpread = (
  data,
  isAdminSpreadsheet,
  isTeacherSpreadsheet
) =>
  instance.post(
    `api/admin/org/admin/addAdminSpread?isAdminSpreadsheet=${isAdminSpreadsheet}&isTeacherSpreadsheet=${isTeacherSpreadsheet}`,
    data
  )
export const individualAdminValid = (data) =>
  instance.post(`api/admin/org/admin/adminValidation`, data)
export const spreadSheetAdminsValid = (data) =>
  instance.post(`api/admin/org/admin/adminSpreadSheetValidation`, data)
export const resendAdminInvitation = (adminId, data) =>
  instance.patch(`api/admin/org/admin/resendInvitation/${adminId}`, data)
export const editOrgAdmin = (adminId, data) =>
  instance.patch(`api/admin/org/editAdmin/${adminId}`, data)
export const deleteOrgAdmin = (adminId) =>
  instance.delete(`api/admin/org/adminDelete/${adminId}`)

export const findAdminByToken = (token) =>
  instance.get(`/api/admin/findAdminByToken?token=${token}`)

export const acceptInvitationForAdmin = (data) =>
  instance.put("api/admin/acceptAdminInvitation", data)

export const findUserName = (data) =>
  instance.post("api/admin/findUserName", data)

export const findAdminTeacherByToken = (token) =>
  instance.get(`/api/admin/findAdminTeacherByToken?token=${token}`)
export const acceptInvitationForAdminTeacher = (data) =>
  instance.put("api/admin/acceptAdminTeacherInvitation", data)
// Teachers Section
export const fetchOrgTeachers = () => instance.get(`api/admin/org/allTeacher`)
export const addOrgTeacher = (data) =>
  instance.post(`api/admin/org/teacher/addTeachers`, data)
export const editOrgTeacher = (teacherId, data) =>
  instance.patch(`api/admin/org/editTeacher/${teacherId}`, data)
export const deleteOrgTeacher = (teacherId) =>
  instance.delete(`api/admin/org/deleteTeacher/${teacherId}`)
export const individualTeacherValid = (data) =>
  instance.post(`api/admin/org/teacher/teacherValidation`, data)
export const spreadSheetTeachersValid = (data) =>
  instance.post(`api/admin/org/teacher/teacherSpreadSheetValidation`, data)
export const findTeacherByToken = (token) =>
  instance.get(`/api/admin/findTeacherByToken?token=${token}`)

export const teacherAcceptInvitation = (data) =>
  instance.put("api/admin/teacherAcceptInvitation", data)
export const resendTeacherInvitation = (teacherId, data) =>
  instance.patch(`api/admin/org/teacher/resendInvitation/${teacherId}`, data)

// Students
export const fetchOrgStudents = () => instance.get(`api/admin/org/all-students`)
export const addOrgStudentSpread = (data) =>
  instance.post(`api/admin/org/student/add-students-spread`, data)
export const addOrgStudentManual = (data) =>
  instance.post(`api/admin/org/student/add-students-manual`, data)
export const individualStudentValid = (data) =>
  instance.post(`api/admin/org/student/student-validation`, data)
export const spreadSheetStudentsValid = (data) =>
  instance.post(`api/admin/org/student/student-spreadsheet-validation`, data)

export const editOrgStudent = (studentId, data) =>
  instance.patch(`api/admin/org/edit-student/${studentId}`, data)
export const deleteOrgStudent = (studentId) =>
  instance.delete(`api/admin/org/delete-student/${studentId}`)
export const findStudentByToken = (token) =>
  instance.get(`/api/admin/find-student-by-token?token=${token}`)

export const studentAcceptInvitation = (data) =>
  instance.put("api/admin/student-accept-invitation", data)
export const resendStudentInvitation = (studentId, data) =>
  instance.patch(`api/admin/org/student/resend-invitation/${studentId}`, data)

// Units
export const fetchAllUnits = () => instance.get(`api/admin/units`)

export const getUnitById = (unitId) => instance.get(`api/admin/units/${unitId}`)

export const fetchUnitById = (unitId, offset, count) =>
  instance.get(
    `api/admin/units/view-unit/${unitId}?offset=${offset || 0}&count=${
      count || 0
    }`
  )

export const editUnitDetailsById = (data, orgUnitInstanceId) =>
  instance.post(`api/admin/units/view-unit/edit/${orgUnitInstanceId}`, data)

export const fetchAllUnitsClass = () =>
  instance.get(`api/admin/units/add-unit/class`)
export const fetchAllUnitsDepartments = () =>
  instance.get(`api/admin/units/add-unit/departments`)
export const fetchAllUnitsTeachers = () =>
  instance.get(`api/admin/units/add-unit/teachers`)
export const addNewUnit = (data) =>
  instance.post(`api/admin/units/add-unit/new-unit`, data)
export const individualUnitStudentValid = (data) =>
  instance.post(`api/admin/units/add-unit/studentValidation`, data)
export const fetchStudentForUnits = (data) =>
  instance.post(`api/admin/units/add-unit/fetchStudentInOrg`, data)
export const individualUnitStudentSpreadsheetValid = (
  data,
  orgUnitInstanceId
) =>
  instance.post(
    `api/admin/units/add-unit/studentSpreadsheetValidation/${orgUnitInstanceId}`,
    data
  )

export const addNewUnitStudent = (data, oruiIdOrgunitinstance) =>
  instance.post(
    `api/admin/units/add-unit/new-student/${oruiIdOrgunitinstance}`,
    data
  )

export const editUnitDetails = (data, orgUnitInstanceId) =>
  instance.patch(`api/admin/units/edit-unit/${orgUnitInstanceId}`, data)

export const deleteUnitDetails = (orgUnitInstanceId) =>
  instance.patch(`api/admin/units/delete-unit/${orgUnitInstanceId}`)

export const deleteOrgUnitStudent = (
  orgUnitInstanceId,
  orgUnitInstanceStudentId
) =>
  instance.delete(
    `api/admin/units/view-unit/${orgUnitInstanceId}/deletestudent/?orgUnitInstanceStudentId=${orgUnitInstanceStudentId}`
  )
export const editOrgUnitStudent = (studentId, unitInstanceStudentId, data) =>
  instance.patch(
    `api/admin/units/view-unit/edit-unit-student/${studentId}?orgUnitInstanceStudentId=${unitInstanceStudentId}`,
    data
  )

export const unitResendStudentInvitation = (
  studentId,
  unitInstanceStudentId,
  data
) =>
  instance.patch(
    `api/admin/units/view-unit/resend-student-invitation/${studentId}?unitinstanceid=${unitInstanceStudentId}`,
    data
  )

// qualifications section
export const fetchAllQualifications = () =>
  instance.get(`api/admin/qualifications`)
export const addOrgQualification = (data) =>
  instance.post(`api/admin/addQualifications`, data)
export const spreadSheetQualificationsValid = (data) =>
  instance.post(
    `api/admin/qualification/qualificationSpreadSheetValidation`,
    data
  )
export const individualQualificationValid = (data) =>
  instance.post(
    `api/admin/addQualifications/individualQualificationValidation`,
    data
  )
export const addQualificationsSpread = (data) =>
  instance.post(`api/admin/addQualificationsSpread`, data)
export const addUnitsUnderQualificationManual = (data, qualificationId) =>
  instance.post(
    `api/admin/addQualifications/addUnitsManual/${qualificationId}`,
    data
  )
export const addUnitsUnderQualificationSpread = (data, qualificationId) =>
  instance.post(
    `api/admin/addQualifications/addUnitsSpreadSheet/${qualificationId}`,
    data
  )
export const unitSpreadsheetValidation = (data, qualificationId) =>
  instance.post(
    `api/admin/addQualifications/unitSpreadSheetValidation/${qualificationId}`,
    data
  )
export const individualUnitValid = (data, qualificationId) =>
  instance.post(
    `api/admin/addQualifications/individualUnitValidation/${qualificationId}`,
    data
  )
export const editOrgQualification = (qualificationId, data) =>
  instance.patch(`api/admin/editQualifications/${qualificationId}`, data)
export const deleteOrgQualification = (qualificationId) =>
  instance.delete(`api/admin/deleteQualifications/${qualificationId}`)
export const fetchQualificationUnits = (qualificationId) =>
  instance.get(
    `api/admin/qualifications/singleQualification/${qualificationId}`
  )
export const fetchAllUnitsWithQualification = (quId) =>
  instance.get(`api/admin/qualifications/all-units?qu_id=${quId || ""}`)
export const fetchAllQualificationData = () =>
  instance.get(`api/admin/qualifications/all-units/all-qualifications`)
export const editQualificationUnit = (unitId, data) =>
  instance.patch(`api/admin/qualifications/all-units/editUnit/${unitId}`, data)
export const deleteQualificationUnit = (unitId) =>
  instance.delete(`api/admin/qualifications/all-units/deleteUnit/${unitId}`)
export const addUnitsQualificationSpread = (data, qualificationId) =>
  instance.post(
    `api/admin/qualifications/all-units/addUnitsSpreadSheet/${qualificationId}`,
    data
  )
export const addUnitsManualQual = (data) =>
  instance.post(`api/admin/qualifications/all-units/addUnitsManual`, data)

export const getDashboardData = () => instance.get(`api/admin/dashboard`)

// classes section

export const fetchAllClassAcademicYear = () =>
  instance.get(`api/admin/classes/add-class/academic-year`)

export const fetchAllOrgQualifications = () =>
  instance.get(`api/admin/classes/add-class/qualifications`)

export const addNewClass = (data) =>
  instance.post(`api/admin/classes/add-class/new-class`, data)

export const fetchAllClasses = (academicYearId, qualificationId) =>
  instance.get(
    `api/admin/classes?academicYearId=${academicYearId || ""}&qualificationId=${
      qualificationId || ""
    }`
  )

export const fetchUnitsByType = (qualId, type) =>
  instance.post(`api/admin/classes/add-class/unit-type/${qualId}`, type)

export const addUnitsClass = (unitData) =>
  instance.post(`api/admin/classes/add-class/new-class/add-units`, unitData)
export const fetchStudentForClass = (data) =>
  instance.post(`api/admin/classes/add-class/new-class/fetch-student`, data)

export const fetchAllStudents = (data) =>
  instance.post(`api/admin/classes/add-class/new-class/org-student`, data)

export const addClassStudents = (classData) =>
  instance.post(
    `api/admin/classes/add-class/new-class/add-units/add-students`,
    classData
  )

export const individualClassStudentSpreadsheetValid = (data) =>
  instance.post(
    `api/admin/classes/add-class/add-units/add-students/studentSpreadsheetValidation`,
    data
  )

export const fetchClassById = (orgClassId) =>
  instance.get(`api/admin/classes/view-class/${orgClassId}`)
