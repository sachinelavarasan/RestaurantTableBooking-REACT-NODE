export const convertFileSize = (size) => {
  const fileSizeKb = size / 1024
  if (fileSizeKb > 1024) {
    const fileSizeMb = fileSizeKb / 1024
    return `${fileSizeMb.toFixed(2)} Mb`
  }

  return `${fileSizeKb.toFixed(2)} Kb`
}
