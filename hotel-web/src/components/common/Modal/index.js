import classNames from "classnames"
import PropTypes from "prop-types"
import ReactBootstrapModal from "react-bootstrap/Modal"

import CloseModalIcon from "../../../assets/icons/refactor/close-modal.svg"
import TrashIcon from "../../../assets/icons/refactor/trash.svg"
import { Button } from "../Button"
import { ModalContainer } from "./elements"

export const Modal = ({
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
  backdrop,
  title,
  width,
}) => (
  <ReactBootstrapModal centered backdrop={backdrop} onHide={onHide} show={show}>
    <ModalContainer width={width} className={className}>
      <header className="align-items-start d-flex header justify-content-between p-4">
        <div className="align-items-center d-flex details">
          {isDelete ? (
            <img
              alt="Delete"
              className="flex-shrink-0 mr-2 trash-icon"
              src={TrashIcon}
            />
          ) : null}
          <div className="d-flex flex-column">
            <h3 className="mb-1 title" title={title}>
              {title}
            </h3>
            <p className="description mb-0">{description}</p>
          </div>
        </div>
        <button
          className="close-modal-button flex-shrink-0"
          onClick={onHide}
          type="button"
        >
          <img
            alt="Close Modal"
            className="close-modal-icon"
            src={CloseModalIcon}
          />
        </button>
      </header>
      {children}
      <footer className="d-flex footer justify-content-end mt-4 p-4">
        <Button
          className="button cancel-button mr-3"
          isFullWidth={false}
          onClick={onHide}
          label="Cancel"
        />
        <Button
          className={classNames("button", {
            "is-delete": isDelete,
          })}
          isFullWidth={false}
          isLoading={isButtonLoading}
          label={isButtonLoading ? loadingButtonLabel : buttonLabel}
          onClick={onButtonClick}
        />
      </footer>
    </ModalContainer>
  </ReactBootstrapModal>
)

Modal.defaultProps = {
  children: null,
  className: "",
  isDelete: false,
  width: "",
  backdrop: "false",
}

Modal.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any,
  className: PropTypes.string,
  backdrop: PropTypes.string,
  description: PropTypes.string.isRequired,
  isButtonLoading: PropTypes.bool.isRequired,
  isDelete: PropTypes.bool,
  loadingButtonLabel: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  onHide: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  width: PropTypes.string,
}
