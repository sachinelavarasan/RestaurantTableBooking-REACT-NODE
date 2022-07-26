import moment from "moment"
import * as yup from "yup"

export const forgotPasswordSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email address.")
    .required("Enter your email address."),
})

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email address.")
    .required("Enter your email address."),
  password: yup.string().required("Enter your password."),
  remember: yup.boolean(),
})

export const qualificationSchema = yup.object({
  qualificationCode: yup.string().required("Enter the qualification code."),
  qualificationName: yup.string().required("Enter the qualification name."),
})

export const registerAdminSchema = yup.object({
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match.")
    .required("Confirm the password."),
  email: yup
    .string()
    .email("Enter a valid email address.")
    .required("Enter your email address."),
  name: yup
    .string()
    .required("Enter your full name.")
    .max(50, "Full name must not be longer than 50 characters."),
  password: yup
    .string()
    .min(8, "Password must be atleast 8 characters long.")
    .max(20, "Password must not be longer than 20 characters.")
    .required("Enter a password."),
})
export const registerTeacherSchema = yup.object({
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match.")
    .required("Confirm the password."),
  email: yup
    .string()
    .email("Enter a valid email address.")
    .required("Enter your email address."),
  name: yup
    .string()
    .required("Enter your full name.")
    .max(50, "Full name must not be longer than 50 characters."),
  password: yup
    .string()
    .min(8, "Password must be atleast 8 characters long.")
    .max(20, "Password must not be longer than 20 characters.")
    .required("Enter a password."),
  stateName: yup
    .string()
    .required("Enter the state name.")
    .max(80, "State Name must not be longer than 80 characters."),
  districtName: yup
    .string()
    .required("Enter the district name.")
    .max(80, "District Name must not be longer than 80 characters."),
})

export const registerOrganisationSchema = yup.object({
  restaurantName: yup
    .string()
    .required("Enter the hotel / restaurant name.")
    .max(80, "Restaurant Name must not be longer than 80 characters."),
  state: yup
    .string()
    .required("Enter the state name.")
    .max(80, "State Name must not be longer than 80 characters."),
  district: yup
    .string()
    .required("Enter the district name.")
    .max(80, "District Name must not be longer than 80 characters."),
})

export const unitSchema = yup.object({
  unitCode: yup
    .string()
    .required("Enter the unit code.")
    .max(20, "Unit code must not be longer than 20 characters."),
  unitName: yup
    .string()
    .required("Enter the unit name.")
    .max(100, "Unit name must not be longer than 100 characters."),
  unitType: yup
    .string()
    .oneOf(["core", "elective"], "Unit must be of type Core or Elective.")
    .required("Choose the unit type."),
})
export const QualificationUnitSchema = yup.object({
  unitCode: yup
    .string()
    .required("Enter the unit code.")
    .max(20, "Unit code must not be longer than 20 characters."),
  unitName: yup
    .string()
    .required("Enter the unit name.")
    .max(100, "Unit name must not be longer than 100 characters."),
  unitType: yup
    .string()
    .oneOf(["core", "elective"], "Unit must be of type Core or Elective.")
    .required("Choose the unit type."),
})

export const adminTeacherSchema = yup
  .object({
    referId: yup
      .string()
      .max(20, "Reference ID must not be longer than 20 characters.")
      .required("Enter Reference ID"),
    firstName: yup
      .string()
      .max(20, "First name must not be longer than 20 characters.")
      .required("Enter first name."),
    lastName: yup
      .string()
      .max(20, "Last name must not be longer than 20 characters.")
      .required("Enter last name."),
    email: yup
      .string()
      .email("Enter a valid email address.")
      .max(50, "Email address must not be longer than 50 characters.")
      .required("Enter email address."),
    admin: yup.boolean(),
    teacher: yup.boolean(),
  })
  .test("atleastOne", null, (object) => {
    if (object.admin || object.teacher) {
      return true
    }
    return new yup.ValidationError("Select atleast User type", null, "admin")
  })

export const classSchema = yup.object({
  // course: yup
  //   .object()
  //   .shape({
  //     label: yup.string().required(),
  //     value: yup.string().required(),
  //   })
  //   .nullable()
  //   .required('Select the course.'),
  department: yup
    .object()
    .shape({
      label: yup.string().required(),
      value: yup.string().required(),
    })
    .nullable()
    .required("Select the department."),
  className: yup
    .string()
    .required("Enter class name.")
    .max(100, "Class name must not be longer than 100 characters."),

  academicYear: yup
    .object()
    .shape({
      label: yup.string().required(),
      value: yup.string().required(),
    })
    .nullable()
    .required("Select academic year"),
  classTeacher: yup
    .object()
    .shape({
      label: yup.string().required(),
      value: yup.string().required(),
    })
    .nullable()
    .required("Select the teacher."),
  startDate: yup
    .date()
    .typeError("Select a start date.")
    .required("select start date."),
  endDate: yup
    .date()
    .typeError("Select a end date.")
    .required("select end date.")
    .min(yup.ref("startDate"), "End date should be later than start date"),
})
export const addClassSchema = yup.object({
  course: yup
    .object()
    .shape({
      label: yup.string().required(),
      value: yup.string().required(),
    })
    .nullable()
    .required("Select the course."),
  qualification: yup
    .object()
    .shape({
      label: yup.string().required(),
      value: yup.string().required(),
    })
    .nullable()
    .required("Select the qualification."),
  department: yup
    .object()
    .shape({
      label: yup.string().required(),
      value: yup.string().required(),
    })
    .nullable()
    .required("Select the department."),
  className: yup
    .string()
    .required("Enter class name.")
    .max(100, "Class name must not be longer than 100 characters."),

  academicYear: yup
    .object()
    .shape({
      label: yup.string().required(),
      value: yup.string().required(),
    })
    .nullable()
    .required("Select academic year"),
  classTeacher: yup
    .object()
    .shape({
      label: yup.string().required(),
      value: yup.string().required(),
    })
    .nullable()
    .required("Select the teacher."),
  startDate: yup
    .date()
    .typeError("Select a start date.")
    .required("select start date."),
  endDate: yup
    .date()
    .required("select end date.")
    .typeError("Select a end date.")
    .min(yup.ref("startDate"), "End date should be later than start date"),
})

export const studentSchema = yup.object({
  referId: yup
    .string()
    .max(20, "Reference ID must not be longer than 20 characters.")
    .required("Enter Reference ID"),
  firstName: yup
    .string()
    .max(20, "First name must not be longer than 20 characters.")
    .required("Enter first name."),
  lastName: yup
    .string()
    .max(20, "Last name must not be longer than 20 characters.")
    .required("Enter last name."),
  email: yup
    .string()
    .email("Enter a valid email address.")
    .max(50, "Email address must not be longer than 50 characters.")
    .required("Enter email address."),
})

export const academicYearSchema = yup.object({
  startDate: yup.date().required("select start date."),
  endDate: yup
    .date()
    .required("select end date.")
    .min(yup.ref("startDate"), "End date should be later than start date"),
})

export const basicInfoSchema = yup.object({
  organisationName: yup
    .string()
    .max(100, "Organisation Name must not be longer than 70 characters.")
    .required("Organisation Name cannot be empty"),
  address: yup.string().required("Address cannot be empty"),
})

export const classStudentSchema = yup.object({
  referId: yup
    .object()
    .shape({
      label: yup.string().required(),
      value: yup.string().required(),
    })
    .nullable()
    .required("Enter Reference ID"),
  firstName: yup
    .string()
    .max(20, "First name must not be longer than 20 characters.")
    .required("Enter first name."),
  lastName: yup
    .string()
    .max(20, "Last name must not be longer than 20 characters.")
    .required("Enter last name."),
  email: yup
    .string()
    .email("Enter a valid email address.")
    .max(50, "Email address must not be longer than 50 characters.")
    .required("Enter email address."),
})

export const courseDetailsSchema = yup.object({
  qualification: yup
    .object()
    .shape({
      label: yup.string().required(),
      value: yup.string().required(),
    })
    .nullable()
    .required("Select the qualification."),
  courseType: yup
    .object()
    .shape({
      label: yup.string().required(),
      value: yup.string().required(),
    })
    .nullable()
    .required("Select the type."),
  courseName: yup
    .string()
    .required("Enter class name.")
    .max(100, "Class name must not be longer than 100 characters."),
})
export const foodDetailsSchema = yup.object({
  menuType: yup
    .object()
    .shape({
      label: yup.string().required(),
      value: yup.string().required(),
    })
    .nullable()
    .required("Select the type."),
  foodName: yup
    .string()
    .required("Enter food name.")
    .max(100, "food name must not be longer than 100 characters."),
})
export const tableDetailSchema = yup.object({
  seatCount: yup
    .number()
    .required("Enter seat count")
    .min(1, "Must be exactly 1 characters")
    .max(999, "seat count must not be longer than 3 digits."),
  tableName: yup
    .string()
    .required("Enter table name.")
    .max(100, "table name must not be longer than 100 characters."),
})

export const offersSchema = yup.object({
  description: yup.string().required("Enter offer description"),
  startDate: yup.date().required("select start date."),
  endDate: yup
    .date()
    .required("select end date.")
    .min(yup.ref("startDate"), "End date should be later than start date"),
})
export const bookingSchema = yup.object({
  description: yup.string().required("Enter offer description"),
  startDate: yup.date().required("select start date."),
  endTime: yup.string().required("Enter end time"),
  startTime: yup.string().required("Enter start time"),
  phone: yup
    .string()
    .required("Enter phone number")
    .matches(
      /^((\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    ),
})
export const editCourseSchema = yup.object({
  courseType: yup
    .object()
    .shape({
      label: yup.string().required(),
      value: yup.string().required(),
    })
    .nullable()
    .required("Select the type."),
  courseName: yup
    .string()
    .required("Enter class name.")
    .max(100, "Class name must not be longer than 100 characters."),
})

export const courseUnitSchema = yup.object({
  unit: yup
    .object()
    .shape({
      label: yup.string().required(),
      value: yup.string().required(),
    })
    .nullable()
    .required("Select the unit."),
  sessions: yup
    .number()
    .required("Enter session")
    .min(1, "Must be exactly 1 characters")
    .max(9999, "sessions must not be longer than 4 digits."),
  hours: yup
    .number()
    .required("Enter hours")
    .min(1, "Must be exactly 1 characters")
    .max(9999, "hours must not be longer than 4 digits."),
})

export const teacherLibraryAddDocument = yup.object({
  documentTitle: yup
    .string()
    .max(120, "Document title must not be longer than 120 characters.")
    .required("Enter Document Title"),
})

export const sessionSchema = yup.object({
  sessionName: yup
    .string()
    .max(120, "Session's title must not be longer than 120 characters.")
    .required("Enter session title."),
  course: yup
    .object()
    .shape({
      label: yup.string().required(),
      value: yup.string().required(),
    })
    .nullable()
    .required("Choose a course."),
  class: yup
    .object()
    .shape({
      label: yup.string().required(),
      value: yup.string().required(),
    })
    .nullable()
    .required("Choose a class."),
  unit: yup
    .object()
    .shape({
      label: yup.string().required(),
      value: yup.string().required(),
    })
    .nullable()
    .required("Choose a unit."),
  teacher: yup
    .object()
    .shape({
      label: yup.string().required(),
      value: yup.string().required(),
    })
    .nullable()
    .required("Choose a teacher."),
  date: yup.date().typeError("Select a date.").required("Select a date."),
  startTime: yup.string().required("Enter a start time."),
  endTime: yup
    .string()
    .required("Enter an end time.")
    .test(
      "endTimeTest",
      "End time must be after start time.",
      function isAfter() {
        const { startTime, endTime } = this.parent
        return moment(startTime, "HH:mm").isBefore(moment(endTime, "HH:mm"))
      }
    ),
  // recurrence: null,
  // location: yup
  //   .string()
  //   .max(120, 'Location must not be longer than 120 characters.')
  //   .required('Enter a location.'),
})

// export const adminLibraryAddDocument = yup.object({
//   documentTitle: yup
//     .string()
//     .max(120, 'Document title must not be longer than 120 characters.')
//     .required('Enter Document Title'),
//   fileCode: yup
//     .string()
//     .max(120, 'File Code must not be longer than 100 characters.')
//     .required('Enter Code'),
//   fileStatus: yup
//     .object()
//     .shape({
//       label: yup.string().required(),
//       value: yup.string().required(),
//     })
//     .nullable()
//     .required('Select the File type.'),
//   className: yup
//     .object()
//     .shape({
//       label: yup.string().required(),
//       value: yup.string().required(),
//     })
//     .nullable()
//     .required('Select the Class Name.'),
//   fileCategory: yup.string().required('Select the Category'),
// });

export const assessmentSubmissionSchema = yup
  .object({
    minutes: yup
      .string()
      .test("maxLength", "minutes error", (val) => Number(val) <= 59),
    hours: yup
      .string()
      .test("maxLength", "hours error", (val) => Number(val) <= 23),
  })
  .test("atleastOne", null, (object) => {
    if (object.minutes.length || object.hours.length) {
      return true
    }
    return new yup.ValidationError("type atleast one", null, "hours")
  })
