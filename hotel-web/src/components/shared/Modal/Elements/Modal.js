import styled from "styled-components"
import { Modal } from "react-bootstrap"

const ModalContainer = styled(Modal)`
  .close-btn {
    width: 18px;
    height: 18px;
    position: absolute;
    right: -25px;
    top: -20px;
  }
  .modal-content-body {
    border-radius: 5px;
  }
`

export default ModalContainer
