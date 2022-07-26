/* eslint-disable react/prop-types */
import React, { useRef } from "react"
import PropTypes from "prop-types"
import fileIco from "../../../assets/icons/dragndrop.svg"
import { DragnDrop } from "./Elements/DropBox"

const DropBox = ({
  isErrorFile,
  handleDrop,
  register,
  isSampleDownloadOpt,
  supportedFileLabel,
  supportedFile,
  ...restInputProps
}) => {
  const dropBoxRef = useRef(null)
  // const hiddenFileInput = useRef(null);
  const downloadRef = useRef(null)

  const handleClick = (event) => {
    if (downloadRef.current && !downloadRef.current.contains(event.target)) {
      // hiddenFileInput.current.click();
      document.querySelector(".dropbox-input").click()
    }
    if (!isSampleDownloadOpt) {
      document.querySelector(".dropbox-input").click()
    }
  }
  const handleDragEnter = (event) => {
    event.preventDefault()
  }

  const handleDragOver = (event) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = "move"
    dropBoxRef.current.style.border = "1px dashed #1CB5D2"
    dropBoxRef.current.style.background = "#E8F8FB"
  }

  const handleDragLeave = (event) => {
    event.preventDefault()
    dropBoxRef.current.style.border = "1px dashed #a2a2a2"
    dropBoxRef.current.style.background = "#FFFFFF"
  }

  return (
    <div className="d-flex flex-column" style={{ height: "280px" }}>
      <DragnDrop
        ref={dropBoxRef}
        className="d-flex flex-column h-100 justify-content-between text-center"
        onDrop={handleDrop}
        onDragOver={(event) => handleDragOver(event)}
        onDragEnter={(event) => handleDragEnter(event)}
        onDragLeave={(event) => handleDragLeave(event)}
        onClick={(event) => handleClick(event)}
      >
        <div />
        <div>
          <img src={fileIco} alt="file" className="mb-3" />
          <h6 className="mb-2">
            Drop your file here, or <span>Browse</span>
          </h6>
          <p className="mb-2 subhead">Supports : {supportedFileLabel}</p>
          {isErrorFile && (
            <div className="err-file mb-2 text-center p-2">
              The file format is unsupported. Make sure you have selected right
              format
            </div>
          )}
        </div>
        {isSampleDownloadOpt && (
          <div className="dwnld">
            <span>Download</span>
            <a
              ref={downloadRef}
              download
              href="https://junglecat-files.s3.ap-southeast-2.amazonaws.com/CSV-aa4da2f55484a13c8760707f1dffc872_1593394944.csv"
            >
              &nbsp;sample.xls
            </a>
          </div>
        )}

        <input
          type="file"
          className="dropbox-input d-none"
          name="dropbox-files"
          onChange={handleDrop}
          ref={register}
          accept={supportedFile}
          {...restInputProps}
        />
      </DragnDrop>
    </div>
  )
}
export default DropBox

DropBox.propTypes = {
  isErrorFile: PropTypes.bool.isRequired,
  handleDrop: PropTypes.func.isRequired,
}
