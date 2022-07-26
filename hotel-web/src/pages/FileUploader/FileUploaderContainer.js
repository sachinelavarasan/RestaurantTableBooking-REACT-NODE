import styled from "styled-components"

export const FileUploadContainer = styled.div`
  width: calc(100% - 20px);
  border: 1px solid transparent;
  border-radius: 2rem;
  box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.4);
  padding: 10px 5px;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  audio {
    width: 200px;
    height: 40px;
    border-radius: 2px;
  }
  .button {
    outline: none;
    font-size: 14px;
    background-color: unset;
    color: #fff;
    padding: 10px;
    border: unset;
    border-radius: 0.25rem;
    cursor: pointer;
    :hover,
    :active {
      opacity: 1;
    }
  }
  .progress {
    background-color: black;
    width: 80%;
    border-radius: 0.5rem;
    .progress-bar {
      border-radius: 0.5rem;
    }
  }
  .upload {
    background-color: #f4a261;
    color: white;
    font-weight: 500;
    padding: 0.5rem 0.5rem;
    border-radius: 0.25rem;
    outline: unset;
    border: unset;
  }

  .preview-container {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }
  .preview_img {
    width: 250px;
    height: 250px;
    object-fit: contain;
  }
  .progress_container {
    width: 100px;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
  }
  .check_img {
    width: 60px;
    height: 60px;
  }
`
