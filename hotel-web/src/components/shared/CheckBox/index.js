/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useEffect } from "react"
import CheckBox from "./Elements/CheckBox"

const Index = ({ id, register, checked, ...restCheckboxProps }) => {
  const checkBoxRef = useRef()
  useEffect(() => {
    if (checked) {
      checkBoxRef.current.checked = true
    } else {
      checkBoxRef.current.checked = false
    }
  }, [checked])

  return (
    <CheckBox>
      <div className="round">
        <input
          type="checkbox"
          id={id}
          ref={(e) => {
            register && register(e)
            checkBoxRef.current = e
          }}
          name={id}
          {...restCheckboxProps}
        />
        <label htmlFor={id} />
      </div>
    </CheckBox>
  )
}

export default Index
