/* eslint-disable react/prop-types */
import classNames from "classnames"

import ReactBootstrapModal from "react-bootstrap/Modal"

import { Button } from "../../../../../../components/common/Button"
import { CommentModalContainer } from "./elements"

export const CommentModal = ({
  buttonLabel,
  children,
  className,
  description,
  isDelete,
  isButtonLoading,
  loadingButtonLabel,
  onButtonClick,
  onHide,
  show,
  title,
  width,
}) => (
  <ReactBootstrapModal centered onHide={onHide} show={show}>
    <CommentModalContainer width={width} className={className}>
      <header className="align-items-start d-flex header justify-content-between">
        <div className="align-items-center d-flex details">
          <div className="d-flex flex-column">
            <h3 className="mb-1 title" title={title}>
              {title}
            </h3>
            <p className="description mb-0">{description}</p>
          </div>
        </div>
      </header>
      {children}
      <footer className="d-flex footer flex-column justify-content-center p-4">
        <Button
          className={classNames("button", {
            "is-delete": isDelete,
          })}
          isFullWidth={false}
          isLoading={isButtonLoading}
          label={isButtonLoading ? loadingButtonLabel : buttonLabel}
          onClick={onButtonClick}
        />
        <div className="d-flex justify-content-center">
          <Button
            className="button cancel-button"
            isFullWidth={false}
            onClick={onHide}
            label="Cancel"
          />
        </div>
      </footer>
    </CommentModalContainer>
  </ReactBootstrapModal>
)
