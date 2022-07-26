/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react"
import { MainInput, Label } from "./Elements/MainInput"

// eslint-disable-next-line react/prop-types
const MainInputCont = ({ label, id, placeholder, register, ...inputProps }) => (
  <>
    {label && <Label htmlFor={id}>{label}</Label>}
    <MainInput
      id={id}
      className="form-control"
      placeholder={placeholder}
      ref={register}
      {...inputProps}
    />
  </>
)

export default MainInputCont
