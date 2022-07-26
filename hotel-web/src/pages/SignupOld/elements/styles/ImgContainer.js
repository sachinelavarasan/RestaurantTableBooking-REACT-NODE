import styled from "styled-components"
import bg from "../../../../assets/images/login/background.png"

export const ImgContainer = styled.div`
  background-image: url(${bg});
  position: relative;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .logo {
    position: absolute;
  }
  .logoProductdiv {
    position: relative;
    top: 65px;
    right: -48px;
  }
  .classroomTextDiv {
    position: relative;
    height: 50px;
    top: 20%;
    right: 0;
    display: flex;
    justify-content: center;
  }
  .socialMedia {
    position: relative;
    height: 30px;
    top: 19%;
    right: 0;
    display: flex;
    justify-content: center;
  }
  .classroom {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    text-align: center;
    color: #ffffff;
  }
  .up-arrow {
    height: 20px;
    width: 20px;
    margin-top: 20px;
  }
  .threeDimensionContainer {
    position: relative;
    height: 750px;
    display: flex;
    bottom: 3%;
    right: -7%;
    width: 100%;
    justify-content: center;
  }
  .over {
    position: absolute;
    bottom: 0%;
    display: flex;
    justify-content: center;
  }
  /* @media (max-width: 991px) {
    .threeDimensionContainer {
      position: relative;
      height: 750px;
      display: flex;
      right: 0;
      justify-content: center;
    }
  } */
  @media all and (max-width: 991px) {
    display: none;
  }
`

export default ImgContainer
