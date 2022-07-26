/* eslint-disable jsx-a11y/autocomplete-valid */
import React from "react"
import { ImgContainer } from "../elements/styles/ImgContainer"
import threeDImg from "../../../assets/images/login/3dImg.svg"
import jcLogo from "../../../assets/icons/jclogo.svg"

const SideImg = () => (
  <ImgContainer>
    <div className="logoProductdiv">
      <img src={jcLogo} alt="logo" className="logo" />
    </div>
    <div className="classroomTextDiv">
      <div>
        <p className="classroom">
          The New Classroom <br />
          Experience
        </p>
      </div>
    </div>
    <div className="threeDimensionContainer">
      <img src={threeDImg} alt="3d" className="over" />
    </div>
  </ImgContainer>
)

export default SideImg
