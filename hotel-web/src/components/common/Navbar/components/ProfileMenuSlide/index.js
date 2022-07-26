/* eslint-disable react/prop-types */
import { AnimatePresence } from "framer-motion"

import ProfileIcon from "../../../../../assets/icons/profile.svg"
import ProfileClose from "../../../../../assets/icons/profile-close.svg"

import LogoutIcon from "../../../../../assets/icons/logout-btn.svg"
import ChevronRightIcon from "../../../../../assets/icons/go-to-teacher.svg"
import ToggleProfileIcon from "../../../../../assets/icons/profile-shift.svg"
import { ProfileDownContainer } from "./elements"

export const ProfileMenuSlide = ({
  email,
  name,
  userProfile,
  isVisible,
  onClose,
  onLogout,
  onToggle,
  profileType,
  type,
}) => (
  <AnimatePresence>
    {isVisible ? (
      <ProfileDownContainer
        className="d-flex flex-column position-absolute"
        animate={{
          x: "0",
        }}
        exit={{
          x: "100%",
        }}
        initial={{
          x: "100%",
        }}
        transition={{
          duration: 0.4,
          type: "keyframes",
        }}
      >
        <div className="top-part">
          <div className="close-icon">
            <button type="button" className="close-btn" onClick={onClose}>
              <img src={ProfileClose} alt="close" />
            </button>
          </div>
          <div className="bottom-part">
            <button className="border-0 d-flex" type="submit" id="profile-id">
              <img
                src={
                  userProfile?.up_avatar_thumbnail
                    ? userProfile?.up_avatar_thumbnail
                    : ProfileIcon
                }
                className="cursor-pointer rounded-circle profile"
                alt="profile"
              />
            </button>
            <div className="detail">
              <h5 className="mb-1 name">{name}</h5>
              <p className="email mb-0">{email}</p>
            </div>
          </div>
        </div>
        <div className="button-container">
          {type && profileType !== 2 ? (
            <button
              className="align-items-center d-flex is-first justify-between menu-button"
              onClick={onToggle}
              type="button"
            >
              <img
                alt="Toggle Profile"
                className="button-icon mr-2"
                src={ToggleProfileIcon}
              />
              <span className="button-label">Go to {type}</span>
              <img
                alt={`Go to ${type}`}
                className="button-icon"
                src={ChevronRightIcon}
              />
            </button>
          ) : null}
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
        </div>
      </ProfileDownContainer>
    ) : null}
  </AnimatePresence>
)
