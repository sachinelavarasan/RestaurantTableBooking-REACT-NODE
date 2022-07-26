/* eslint-disable react/prop-types */
import React from "react"
// TODO
// Prop validation is missing here
// eslint-disable-next-line react/prop-types
const DropdownItems = ({
  icon,
  isDanger,
  isNormal,
  text,
  click,
  withoutSeperator,
}) => (
  <>
    {isDanger && !withoutSeperator ? (
      <div className="dropdown-item-seperator" />
    ) : null}
    <button
      className={`align-items-center btn d-flex p-2 w-100 ${
        isDanger ? "button-is-danger" : ""
      }`}
      type={isNormal ? "button" : "submit"}
      onClick={() => click && click()}
    >
      {icon && <img src={icon} className="icon mr-2" alt="delete" />}
      {text}
    </button>
  </>
)

export default DropdownItems
