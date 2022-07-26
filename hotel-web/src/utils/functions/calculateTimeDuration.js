export const calculateTimeDuration = (_seconds, isShort) => {
  let hours = Math.floor(_seconds / 3600)
  let minutes = Math.floor((_seconds - hours * 3600) / 60)
  let seconds = Math.floor(_seconds - hours * 3600 - minutes * 60)

  if (minutes < 10) minutes = `0${minutes}`

  if (seconds < 10) seconds = `0${seconds}`

  if (isShort) return `${minutes}:${seconds}`

  if (hours === 0) return `${minutes}:${seconds} Min`

  if (hours < 10) hours = `0${hours}`

  return `${hours}:${minutes} Hrs`
}
