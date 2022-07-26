/* eslint-disable react/prop-types */

import ReactBootstrapModal from "react-bootstrap/Modal"

import { Button } from "../../../Button"
import { CommentModalContainer } from "./elements"

export const ShowMoreComments = ({
  profile,
  className,
  comments,
  onHide,
  show,
  username,
  width,
  time,
}) => (
  <ReactBootstrapModal centered onHide={onHide} show={show}>
    <CommentModalContainer width={width} className={className}>
      <header className="align-items-start d-flex header justify-content-between">
        {/* <div className="align-items-center d-flex details"> */}
        <div className="show-more-header">
          <div className="creator-profile">
            <span className="align-items-center circle d-flex justify-content-center">
              {profile}
            </span>
          </div>
          <div className="show-more-header-right">
            <h3 className="mb-1 title" title={username}>
              {username}
            </h3>
            <p className="time">{time}</p>
          </div>
        </div>
        {/* </div> */}
      </header>
      <div className="comments">{comments}</div>
      <footer className="d-flex footer flex-column justify-content-center p-4">
        <div className="d-flex justify-content-center">
          <Button
            className="button cancel-button"
            isFullWidth={false}
            onClick={onHide}
            label="Close"
          />
        </div>
      </footer>
    </CommentModalContainer>
  </ReactBootstrapModal>
)
