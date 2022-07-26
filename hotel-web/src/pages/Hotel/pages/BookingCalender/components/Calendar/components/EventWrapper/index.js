/* eslint-disable react/prop-types */

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  hotelSelector,
  setCalendarSlot,
} from "../../../../../../../../redux/HotelSlice"

import { EventWrapperContainer } from "./elements"

export const EventWrapper = ({ draggable, event, slotEnd, slotStart }) => {
  const dispatch = useDispatch()
  const { calendarSlots, search } = useSelector(hotelSelector)
  const [isTooltipLeft, setIsTooltipLeft] = useState(false)
  const sessionTitle = event.title || "Untitled"

  useEffect(() => {
    if (!draggable) {
      dispatch(setCalendarSlot([slotStart, slotEnd]))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Set tooltip position for events in the popup.
  useEffect(() => {
    if (draggable) {
      const slot = calendarSlots.find(([startDate, endDate]) => {
        if (
          slotStart.getTime() >= startDate.getTime() &&
          slotStart.getTime() <= endDate.getTime()
        )
          return true
        return false
      })
      const dateDifference = slot?.[1].getDate() - event.start?.getDate()
      setIsTooltipLeft(dateDifference !== 0 && dateDifference <= 3)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [calendarSlots, event])

  return (
    <EventWrapperContainer
      isPopup
      isTooltipLeft={isTooltipLeft}
      isSearchResult={
        Boolean(search) &&
        sessionTitle.toLowerCase().includes(search.toLowerCase())
      }
    >
      <div className="event-bullet" />
      <div className="event-title">{sessionTitle}</div>
      <div className="event-tooltip">
        <span className="tooltip-time">
          <div />
          <span>{event.time}</span>
        </span>
        <span className="tooltip-title">
          {sessionTitle}
          <span
            className={`${event.status === 0 ? "not-finished" : "finished"}`}
          >
            {event.status === 0 ? "Upcoming" : "Finished"}
          </span>
        </span>
        <span className="tooltip-teacher">{event.name}</span>
        <span className="tooltip-teacher">{event.phone}</span>
      </div>
    </EventWrapperContainer>
  )
}
