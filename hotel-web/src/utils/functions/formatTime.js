export function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60)
  return `${minutes} m ${String(Math.floor(seconds)).slice(0, 2)} s`
}
