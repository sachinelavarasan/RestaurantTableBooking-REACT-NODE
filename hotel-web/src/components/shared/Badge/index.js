/* eslint-disable react/prop-types */

import React from "react"

import { BadgeContainer } from "./BadgeContainer"

const Badge = ({ borderColor, icon, isActive, label, onClick, value }) => (
  <BadgeContainer
    borderColor={borderColor}
    className={isActive ? "active" : ""}
    onClick={onClick}
  >
    <div className="ellipse">
      <img alt="Icon" src={icon} />
    </div>
    <h4>{label}</h4>
    <p>{value}</p>
  </BadgeContainer>
)

export default Badge
