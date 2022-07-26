/* eslint-disable react/prop-types */
import React, { useCallback } from "react"
import PropTypes from "prop-types"

import PreviewFileContainer from "./PreviewFileContainer"
import closeModal from "../../../assets/icons/close-modal.svg"
import ProfileImg from "../../../assets/icons/profile.svg"
import CloudDownloadIcon from "../../../assets/icons/cloud-download.svg"

// This for previewing files based on type of files
const PreviewFile = ({
  fileType,
  fileUrl,
  setModalShow,
  profileName,
  time,
}) => {
  const renderPreview = useCallback(() => {
    if (fileType?.includes("image")) {
      return <img src={fileUrl} alt="cloud" className="modal-content-body" />
    }
    if (fileType?.includes("video")) {
      return (
        <div className="videos">
          <video controls src={fileUrl} height="100%" width="100%">
            <track default kind="captions" srcLang="en" src={fileUrl} />
            Sorry, your browser does not support embedded videos.
          </video>
        </div>
      )
    }
    return (
      <div style={{ padding: "1.5rem 0 0 0" }}>
        <object
          data={fileUrl}
          width="100%"
          height="40.375rem"
          style={{ marginBottom: "-0.4375rem" }}
          type="application/pdf"
        >
          <embed src={fileUrl} type="application/pdf" />
        </object>
      </div>
    )
  }, [fileType, fileUrl])
  return (
    <>
      <PreviewFileContainer>
        <div className="preview-header">
          <div className="attachment-user-info">
            <img src={ProfileImg} alt="profile-img" className="mr-2" />
            <div className="attachment-username">
              <div>
                <span>{profileName && profileName}</span>
              </div>
              <div className="attachment-time">
                <span>{time} </span>
                <span>• file</span>
              </div>
            </div>
          </div>
          <div className="button-container">
            <a
              href={fileUrl}
              className="closeModalBtn"
              download
              target="_blank"
              rel="noreferrer"
            >
              <img src={CloudDownloadIcon} alt="close" className="cross" />
            </a>
            <div className="button-seperator" />
            <button
              onClick={() => {
                setModalShow(false)
              }}
              type="button"
              className="closeModalBtn"
            >
              <img src={closeModal} alt="close" className="cross" />
            </button>
          </div>
        </div>
        {fileType?.includes("video") || fileType?.includes("image") ? (
          <div className="seperator" />
        ) : null}
        <div className="previewContainer">{renderPreview()}</div>
      </PreviewFileContainer>
    </>
  )
}

export default PreviewFile

PreviewFile.defaultProps = {
  fileType: "",
  fileUrl: "",
}

PreviewFile.propTypes = {
  fileType: PropTypes.string,
  fileUrl: PropTypes.string,
}
