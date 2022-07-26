/* eslint-disable react/jsx-curly-brace-presence */
import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"

import { useDispatch, useSelector } from "react-redux"
import loader from "../../assets/icons/orgLogoLoader.svg"
import bg from "../../assets/images/login/background.png"
// import Button from '../../components/shared/Buttons/GreenButton';
import MsgIcon from "../../assets/icons/message-blue-success.svg"
import { authSelector, verifyOrgUser } from "../../redux/authSlice"

import { AuthSwitchLink } from "../Auth/components"

const StyledDiv = styled.div`
  background-image: url(${bg});
  min-height: 100vh !important;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 500px) {
    & {
      padding: 0 15px;
    }
  }
  .logo {
    margin-bottom: 32px;
  }
  .sucessess_info {
    width: 426px;
    padding: 56px 0;
    background: #ffffff;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.04);
    border-radius: 12px;
    .check-email {
      padding: 0 38px;
      font-family: Inter;
      margin-top: 32px;
      line-height: 29px;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      text-align: center;
      color: #3d4457;
    }
    @media (max-width: 462px) {
      & {
        width: 100%;
      }
      .check-subtitle {
        padding: 0 65px !important;
      }
      .check-email {
        padding: 0 30px !important;
      }
      .email {
        text-align: justify;
      }
    }

    .check-subtitle {
      padding: 0 91px;
      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 21px;
      text-align: center;
      color: #8a8c94;
    }

    .info {
      word-wrap: break-word;
      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 21px;
      text-align: center;
      margin-top: 8px;
      color: #8a8c94;
    }
  }
  .org-images {
    img {
      height: 32px;
      width: 32px;
      animation: rotating 1s linear infinite;
    }
  }
`

const ActivateUser = () => {
  const { error, isLoading } = useSelector(authSelector)
  const { id } = useParams()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(verifyOrgUser(id))
  }, [id, dispatch])

  if (error) {
    return (
      <StyledDiv className="d-flex h-100 justify-content-center align-items-center">
        <div className="font-weight-bold">
          <span className="info">Failed activating account.</span>
        </div>
      </StyledDiv>
    )
  }

  return (
    <StyledDiv className="d-flex flex-column justify-content-center align-items-center">
      <div className="text-center sucessess_info">
        <img src={MsgIcon} alt="password-success" />
        <h2 className="check-email mb-2">
          Awesome, your account is successfully activated
        </h2>
        {isLoading ? (
          <div className="org-images mt-5">
            <img src={loader} alt="loader" />
          </div>
        ) : (
          <div className="pl-5 ml-5">
            <AuthSwitchLink linkHref="/login" linkText="Login" />
          </div>
        )}
      </div>
    </StyledDiv>
  )
}

export default ActivateUser
