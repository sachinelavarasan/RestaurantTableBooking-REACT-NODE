/* eslint-disable react/prop-types */
import React from "react"
import { useHistory } from "react-router-dom"

import { HeaderContainer } from "./elements"
import CloseIcon from "../../../../../../assets/icons/close-modal.svg"

// const DELAY = 500;

export const Header = ({ hotel, hotelId }) => {
  const history = useHistory()
  const onButtonCancel = () => {
    history.replace(`/user/hotelList/${hotelId}/view`)
  }

  return (
    <HeaderContainer>
      <div className="header-container fixed-top">
        <div className="header">
          <div className="title">
            {hotel?.hotel_name}
            <p className="owner">{`Owner : ${hotel?.first_name} ${hotel?.last_name}`}</p>
          </div>
          <div className="header-left">
            <button
              className="btn"
              onClick={onButtonCancel}
              type="button"
              id="close-button"
            >
              <img alt="Options" src={CloseIcon} />
            </button>
          </div>
        </div>
      </div>
    </HeaderContainer>
  )
}
