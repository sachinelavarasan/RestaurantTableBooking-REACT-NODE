/* eslint-disable react/prop-types */
import React from "react"

import { useHistory } from "react-router-dom"
import { FooterContainer } from "./elements"
import { Button } from "../../../../../../components/common"

// const DELAY = 500;

export const Footer = ({ isAddCourseLoading, onSubmit }) => {
  const history = useHistory()

  const onButtonCancel = () => {
    history.replace(`/admin/courses/active-courses`)
  }

  return (
    <FooterContainer>
      <div className="footer-container fixed-bottom">
        <div className="footer">
          <div />
          <div className="button-container">
            <Button
              className="button cancel-button mr-3"
              isFullWidth={false}
              onClick={onButtonCancel}
              label="Cancel"
              id="cancel-course-button"
            />
            <Button
              className="button"
              isFullWidth={false}
              isLoading={isAddCourseLoading}
              label="Save"
              onClick={onSubmit}
              id="add-course-button"
            />
          </div>
        </div>
      </div>
    </FooterContainer>
  )
}
