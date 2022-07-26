/* eslint-disable react/prop-types */
import { AnimatePresence } from "framer-motion"
import PropTypes from "prop-types"
import { useRef } from "react"
import { useClickAway } from "react-use"

import LogoutIcon from "../../../../../assets/icons/logout-btn.svg"

import { ProfileMenuContainer } from "./elements"

export const ProfileMenu = ({ email, name, isVisible, onClose, onLogout }) => {
  const containerElement = useRef(null)
  useClickAway(containerElement, onClose)

  return (
    <AnimatePresence>
      {isVisible ? (
        <ProfileMenuContainer
          animate={{
            opacity: 1,
            translateY: 0,
          }}
          exit={{
            opacity: 0,
            translateY: "-0.5rem",
          }}
          className="d-flex flex-column position-absolute"
          initial={{
            opacity: 0,
            translateY: "-0.5rem",
          }}
          ref={containerElement}
          transition={{
            duration: 0.2,
            type: "keyframes",
          }}
        >
          <div className="d-flex flex-column p-3">
            <h5 className="mb-1 name">{name}</h5>
            <p className="email mb-0">{email}</p>
          </div>

          <button
            className="align-items-center d-flex justify-between menu-button"
            onClick={onLogout}
            type="button"
          >
            <img
              alt="Toggle Profile"
              className="button-icon mr-2"
              src={LogoutIcon}
            />
            <span className="button-label">Logout</span>
          </button>
        </ProfileMenuContainer>
      ) : null}
    </AnimatePresence>
  )
}

ProfileMenu.defaultProps = {
  isVisible: false,
}

ProfileMenu.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isVisible: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
}
