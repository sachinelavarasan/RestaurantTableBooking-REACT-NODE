/* eslint-disable jsx-a11y/media-has-caption */
import { useState, useRef } from "react"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { storage } from "../../utils/firebase"
import check from "../../assets/icons/attendance-green-tick-active.svg"

import { FileUploadContainer } from "./FileUploaderContainer"

const FileInput = ({ upload, type, accept, setImgUrl, setImg }) => {
  const [progress, setProgress] = useState(0)
  const [progressShow, setProgressShow] = useState(false)
  const fileRef = useRef(null)

  const handleUpload = () => {
    setProgressShow(true)
    const fileName = new Date().getTime() + upload.name
    const storageRef = ref(
      storage,
      type === "audio" ? `/audio/${fileName}` : `/images/${fileName}`
    )
    const uploadTask = uploadBytesResumable(storageRef, upload)
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploaded = Math.floor(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        )
        setProgress(uploaded)
      },
      (error) => {
        console.log(error)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setImgUrl(url)
          setImg(null)
        })
      }
    )
  }

  return (
    <FileUploadContainer>
      {progress === 0 ? (
        <>
          <input
            ref={fileRef}
            type="file"
            accept={accept}
            onChange={(e) => {
              setImg(e.target.files[0])
            }}
            hidden
          />
          <button
            type="button"
            className="upload"
            onClick={() => fileRef?.current.click()}
          >
            Choose file
          </button>
        </>
      ) : null}
      <div className="preview-container">
        {upload?.type?.split("/")[0] === "image" && upload !== null && (
          <img
            src={URL.createObjectURL(upload)}
            alt="upload"
            className="preview_img"
          />
        )}

        {upload?.type?.split("/")[0] === "audio" && upload !== null && (
          <audio src={URL.createObjectURL(upload)} controls />
        )}
        {upload !== null && !progressShow && (
          <div className="d-flex flex-column">
            <button
              onClick={handleUpload}
              type="button"
              className="button bg-success mb-3 align-items-center"
            >
              Upload
            </button>
            <button
              onClick={() => {
                setImg(null)
                setImgUrl(null)
              }}
              type="button"
              className="button bg-danger align-items-center"
            >
              Reupload
            </button>
          </div>
        )}
      </div>
      {progress === 0 ? null : (
        <div className="progress mt-2">
          <div
            className={`progress-bar progress-bar-striped bg-warning ${
              progress !== 100 ? "progress-bar-animated" : ""
            }`}
            role="progressbar"
            style={{ width: `${progress}%` }}
          >
            {progress}%
          </div>
        </div>
      )}
      {progress === 100 && (
        <div className="progress_container w-100 d-flex align-items-center">
          <p className="mb-0">Uploaded successfully</p>
          <img src={check} alt="check circle" className="check_img" />
        </div>
      )}
    </FileUploadContainer>
  )
}

export default FileInput
