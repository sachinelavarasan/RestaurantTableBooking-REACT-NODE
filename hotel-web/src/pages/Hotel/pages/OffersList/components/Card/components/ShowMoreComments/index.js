/* eslint-disable react/prop-types */

import ReactBootstrapModal from "react-bootstrap/Modal"

import { Button } from "../../../../../../../../components/common/Button"
import { CommentModalContainer } from "./elements"

export const ShowMoreComments = ({
  className,
  comments,
  onHide,
  show,
  width,
}) => (
  <ReactBootstrapModal centered onHide={onHide} show={show}>
    <CommentModalContainer width={width} className={className}>
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
