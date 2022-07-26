/* eslint-disable react/prop-types */

import React, { useEffect, useRef, useState } from "react"
import videojs from "video.js"
import "@filmgardi/videojs-markers"

import { Color } from "../../constants"
import rem from "../../utils/rem"

const VideoPlayer = ({
  isFirstPlayback,
  markers,
  onMarkerClick,
  setIsFirstPlayback,
  src,
  startingTime,
  videoPlayer,
}) => {
  const internalVideoPlayer = useRef()
  const videoNode = useRef()
  const [onReady, setOnReady] = useState()

  useEffect(() => {
    videoPlayer.current = videojs(
      videoNode.current,
      {
        controls: true,
        sources: [
          {
            src,
          },
        ],
      },
      () => {
        setOnReady(true)

        let isFirstPlay = false
        let isMarkersSet = false

        const setCurrentTimeOnLoad = (shouldSetMarkers = true) => {
          try {
            videoPlayer.current.currentTime(startingTime || 0)

            if (shouldSetMarkers) {
              videoPlayer.current.markersPlugin({
                markers: markers.map((item) => ({
                  class: item.id,
                  text: item.title,
                  time: item.timecode,
                })),
                markerStyle: {
                  "background-color": Color.DANGER,
                  width: rem(8),
                },
                markerTip: {
                  text: (marker) => marker.text,
                },
                onMarkerClick(marker) {
                  const [taskId, fileId] = marker.class.split(" ")
                  onMarkerClick(taskId, fileId)
                },
              })
            }
          } finally {
            isMarkersSet = true
            videoPlayer.current.off("loadedmetadata", setCurrentTimeOnLoad)
          }
        }

        const setCurrentTimeOnPlay = () => {
          if (!isFirstPlay) {
            setCurrentTimeOnLoad(!isMarkersSet)
            isFirstPlay = false
          }

          videoPlayer.current.off("canplaythrough", setCurrentTimeOnPlay)
        }

        videoPlayer.current.on("loadedmetadata", setCurrentTimeOnLoad)
        videoPlayer.current.on("canplaythrough", setCurrentTimeOnPlay)
      }
    )

    internalVideoPlayer.current = videoPlayer.current

    return () => {
      setIsFirstPlayback(false)

      if (videoPlayer.current) {
        videoPlayer.current.dispose()
        videoPlayer.current = null
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (onReady) {
      let isFirstPlay = false

      const setCurrentTimeOnLoad = () => {
        internalVideoPlayer.current.currentTime(startingTime || 0)
        internalVideoPlayer.current.off("loadedmetadata", setCurrentTimeOnLoad)
      }

      const setCurrentTimeOnPlay = () => {
        if (!isFirstPlay) {
          internalVideoPlayer.current.currentTime(startingTime || 0)
          isFirstPlay = false
        }

        internalVideoPlayer.current.off("canplaythrough", setCurrentTimeOnPlay)
      }

      internalVideoPlayer.current.on("loadedmetadata", setCurrentTimeOnLoad)
      internalVideoPlayer.current.on("canplaythrough", setCurrentTimeOnPlay)
    }
  }, [onReady, startingTime])

  useEffect(() => {
    if (onReady) {
      let isFirstPlay = false
      let isMarkersReset = false

      const setMarkersOnLoad = (shouldResetMarkers = true) => {
        try {
          if (shouldResetMarkers) {
            internalVideoPlayer.current.markers.reset(
              markers.map((item) => ({
                class: item.id,
                text: item.title,
                time: item.timecode,
              }))
            )
          }
        } finally {
          isMarkersReset = true
          internalVideoPlayer.current.off("loadedmetadata", setMarkersOnLoad)
        }
      }

      const setMarkersOnPlay = () => {
        if (!isFirstPlay) {
          setMarkersOnLoad(!isMarkersReset)
          isFirstPlay = false
        }

        internalVideoPlayer.current.off("canplaythrough", setMarkersOnPlay)
      }

      internalVideoPlayer.current.on("loadedmetadata", setMarkersOnLoad)
      internalVideoPlayer.current.on("canplaythrough", setMarkersOnPlay)
    }
  }, [markers, onReady])

  useEffect(() => {
    if (isFirstPlayback && onReady) {
      setTimeout(() => {
        internalVideoPlayer.current.play()
      }, 100)
    }
  }, [isFirstPlayback, onReady, internalVideoPlayer])

  return (
    <div className="video-container">
      <div data-vjs-player>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video ref={videoNode} className="video-js vjs-big-play-centered" />
      </div>
    </div>
  )
}

export default VideoPlayer
