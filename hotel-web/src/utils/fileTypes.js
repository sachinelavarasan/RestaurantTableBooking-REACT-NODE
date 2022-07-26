export const videoExt = [
  "webm",
  "mp4",
  "mp2",
  "mpeg",
  "mpe",
  "mpv",
  "ogg",
  "3gp",
  "mp4",
  "m4p",
  "m4v",
  "avi",
  "wmv",
  "mov",
  "qt",
  "flv",
  "swf",
]

export const imgExt = [
  "jpg",
  "jpeg",
  "png",
  "gif",
  "webp",
  "tiff",
  "psd",
  "raw",
  "bmp",
  "heif",
  "indd",
  "jpeg 2000",
  "svg",
  "svg+xml",
]

export const docsExt = [
  "doc",
  "docx",
  "html",
  "htm",
  "odt",
  "pdf",
  "xls",
  "xlsx",
  "ods",
  "ppt",
  "pptx",
  "txt",
  "csv",
]

// Getting file type based on extension
export const getFileType = (fileExtension) => {
  let fileType

  if (fileExtension.includes("pdf")) {
    fileType = "application/pdf"
  } else if (fileExtension.includes("csv")) {
    fileType = "text/csv"
  } else if (fileExtension.includes("doc") || fileExtension.includes("docx")) {
    fileType = "application/msword"
  } else {
    fileType = "unknown"
  }

  // Checking img extensions
  imgExt.forEach((curImgExt) => {
    if (curImgExt.includes(fileExtension.toLowerCase())) {
      fileType = `image/${curImgExt}`
    }
  })

  // Checking Video extensions
  videoExt.forEach((curVidExt) => {
    if (curVidExt.includes(fileExtension.toLowerCase())) {
      fileType = `video/${curVidExt}`
    }
  })
  return fileType
}
