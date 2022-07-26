/* eslint-disable jsx-a11y/autocomplete-valid */
import React from "react"
import { ImgContainer } from "../elements/styles/ImgContainer"
import threeDImg from "../../../assets/images/login/3dImg.svg"
import jcLogo from "../../../assets/icons/jclogo.svg"
import socialMedia from "../../../assets/icons/socialmedia.svg"
import upArrow from "../../../assets/icons/upArrowExtra.svg"

const SideImg = () => (
  <ImgContainer>
    <div className="logoProductdiv">
      <img src={jcLogo} alt="logo" className="logo" />
    </div>
    <div className="socialMedia">
      <div>
        <img src={socialMedia} alt="social media" className="social-logo" />
      </div>
    </div>
    <div className="classroomTextDiv">
      <div>
        <p className="classroom">
          Enjoy the new
          <img src={upArrow} alt="uparrow" className="up-arrow" />
          classroom <br />
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
