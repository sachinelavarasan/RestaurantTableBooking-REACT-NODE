import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import moment from "moment"
import "react-big-calendar/lib/css/react-big-calendar.css"

import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar"
import { CalendarContainer } from "./elements"
import { EventWrapper } from "./components/EventWrapper"
import { clearCalendarSlots } from "../../../../../../redux/HotelSlice"

import CalendarPreviousIcon from "../../../../../../assets/icons/calendar-previous.svg"

export const Calender = ({ events }) => {
  const dispatch = useDispatch()

  const localizer = momentLocalizer(moment)
  const [update, triggerUpdate] = useState(null)

  useEffect(() => {
    dispatch(clearCalendarSlots())
  }, [dispatch])

  useEffect(() => {
    const navigationButtons = document.querySelectorAll(
      ".rbc-btn-group:first-child button:not(:first-child)"
    )

    // Change navigation button labels to icons.
    navigationButtons.forEach((button) => {
      button.textContent = ""
      const image = document.createElement("img")
      image.classList.add("calendar-icon")
      image.src = CalendarPreviousIcon
      button.appendChild(image)
    })

    // Append 'ly' suffix to 'Week' and 'Month'.
    document
      .querySelectorAll(".rbc-btn-group:last-child button")
      ?.forEach((button) => {
        if (!button.textContent.includes("ly")) button.textContent += "ly"
      })
  }, [])

  useEffect(() => {
    const toolbarLabel = document.querySelector(".rbc-toolbar-label")
    const month = toolbarLabel.textContent

    if (toolbarLabel && month) {
      toolbarLabel.textContent = ""
      const calendarMonthElement = document.querySelector(".calendar-month")

      // Change the month's position from center to left.
      if (calendarMonthElement) {
        calendarMonthElement.textContent = month
      } else {
        const monthElement = document.createElement("span")
        monthElement.textContent = month
        monthElement.classList.add("calendar-month")
        const toolbar = document.querySelector(".rbc-btn-group")
        toolbar.insertAdjacentElement("afterbegin", monthElement)
      }
    }
    dispatch(clearCalendarSlots())
  }, [dispatch, update])

  return (
    <CalendarContainer>
      <BigCalendar
        components={{ eventWrapper: EventWrapper }}
        events={events}
        formats={{ dateFormat: "D" }}
        localizer={localizer}
        popup
        onNavigate={() => triggerUpdate(Math.random())}
        onView={() => triggerUpdate(Math.random())}
        views={["week", "month"]}
      />
    </CalendarContainer>
  )
}
