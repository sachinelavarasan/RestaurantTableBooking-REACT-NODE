/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import React from "react"

export const IconStatus = ({
  openSideNav,
  pathName,
  ActivePath,
  Icon,
  ActiveIcon,
  expandedIcon,
  margin,
}) =>
  !openSideNav ? (
    pathName.includes(ActivePath) || expandedIcon ? (
      <img
        src={ActiveIcon}
        alt="logo"
        className="icon-image-close"
        style={{ marginLeft: margin }}
      />
    ) : (
      <img
        src={Icon}
        alt="logo"
        className="icon-image"
        style={{ marginLeft: margin }}
      />
    )
  ) : pathName.includes(ActivePath) || expandedIcon ? (
    <img
      src={ActiveIcon}
      alt="logo"
      className="icon-image"
      style={{ marginLeft: margin }}
    />
  ) : (
    <img
      src={Icon}
      alt="logo"
      className="icon-image"
      style={{ marginLeft: margin }}
    />
  )
