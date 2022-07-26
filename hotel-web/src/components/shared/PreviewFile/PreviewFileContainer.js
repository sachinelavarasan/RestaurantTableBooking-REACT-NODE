import styled from "styled-components"

const PreviewFileContainer = styled.div`
  width: 62.5rem;
  @media (max-width: 65rem) {
    /* & {
      width: 80%;
    } */
    .modal-content-body {
      object-fit: contain;
    }
  }

  .previewContainer {
    height: 80vh;
    div {
      height: 100%;
      object {
        height: 100%;
      }
    }
  }
  .attachment-username {
    display: flex;
    flex-direction: column;
    align-items: flex-start !important;
    font-weight: 500;
    font-size: 1rem;
    color: #565656;
  }
  .attachment-user-info {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .attachment-time {
    font-size: 0.75rem;
    color: #aaaaaa;
  }
  .preview-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 1.5rem 0px 1.5rem;
  }
  .modal-content-body {
    padding: 0px 1.5rem 1.5rem 1.5rem;
    width: 100%;
    margin-top: 1.5rem;
    max-height: 60vh;
    object-fit: contain;
  }

  .videos {
    padding: 1.5rem 1.5rem;
  }
  .seperator {
    height: 0.0625rem;
    width: 100%;
    background-color: #e5e5e5;
    margin: 1.5rem 0px 0px 0px;
  }
  .button-container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .button-seperator {
    height: 1.3125rem;
    width: 0.0625rem;
    background-color: #dedede;
    margin: 0px 1.125rem 0px 1.125rem;
  }
  .closeModalBtn {
    border: none;
    background: transparent;
    outline: none;
    .cross {
      width: 1.5625rem !important;
      height: 1.5625rem !important;
    }
  }
`

export default PreviewFileContainer
