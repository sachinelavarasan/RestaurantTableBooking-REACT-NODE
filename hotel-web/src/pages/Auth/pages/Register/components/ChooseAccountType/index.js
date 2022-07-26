import PropTypes from "prop-types"

import { useState } from "react"
// import { Spacer } from "../../../../../../components/common"

import { AuthSwitchLink, Heading } from "../../../../components"
import { AccountTypeButton } from "./components"
import TeacherAccountIcon from "../../../../../../assets/icons/teacher-account.svg"
import OrganisationAccountIcon from "../../../../../../assets/icons/school-account.svg"
import SignupArrowIcon from "../../../../../../assets/icons/signup-arrow.svg"
import SignupArrowHoverIcon from "../../../../../../assets/icons/signup-arrow-hover.svg"

export const ChooseAccountType = ({ onClickAccountType }) => {
  const [iconSchool, setIconSchool] = useState(false)
  const [iconTeacher, setIconTeacher] = useState(false)
  return (
    <section className="align-items-center col-lg-12 col-md-12 d-flex flex-column justify-content-center main-section position-relative px-4">
      <main className="d-flex flex-column main-content w-100">
        {/* <Spacer height="4rem" /> */}
        <div className="d-flex flex-column justify-content-center flex-grow-1">
          <Heading
            marginBottom="2rem"
            subtitle="Choose Create account type"
            title="Create Your Account"
          />
          <div className="d-flex flex-column justify-content-between">
            <AccountTypeButton
              buttonLabel="Hotel / Restaurant"
              onClick={() => onClickAccountType("Hotel")}
              Icon={OrganisationAccountIcon}
              arrowIcon={!iconSchool ? SignupArrowIcon : SignupArrowHoverIcon}
              onMouseEnter={() => setIconSchool(true)}
              onMouseLeave={() => setIconSchool(false)}
              iconHover={iconSchool}
            />
            <AccountTypeButton
              className="mt-4"
              buttonLabel="User"
              onClick={() => onClickAccountType("User")}
              Icon={TeacherAccountIcon}
              arrowIcon={!iconTeacher ? SignupArrowIcon : SignupArrowHoverIcon}
              onMouseEnter={() => setIconTeacher(true)}
              onMouseLeave={() => setIconTeacher(false)}
              iconHover={iconTeacher}
            />
          </div>

          <AuthSwitchLink
            linkHref="/login"
            linkText="Login"
            text="Already have an account?"
          />
        </div>
        {/* <Spacer height="4rem" /> */}
      </main>
    </section>
  )
}
ChooseAccountType.propTypes = {
  onClickAccountType: PropTypes.func.isRequired,
}
