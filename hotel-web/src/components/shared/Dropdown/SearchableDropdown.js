/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prefer-template */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react"

import UnselectedCheckbox from "../../../assets/icons/unselected_checkbox.svg"
import Bluetick from "../../../assets/icons/blue_tick.svg"
import {
  StyledItemWrapper,
  StyledDropdown,
  StyledInput,
  StyledImg,
  StyledDropdownItem,
} from "./Elements/SearchableDropdown"

// options : [{id: 1ersdsdasd, value: 'ssd'}]
const CheckedDropdown = ({ options, title, onSelect, placeHolder }) => {
  const [open, setOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedItems, setSelectedItems] = useState([])
  const [searchResults, setSearchResults] = useState(options)

  const handleSelect = (e) => {
    // already exist remove.
    if (selectedItems.find((item) => item === e)) {
      setSelectedItems(selectedItems.filter((item) => item !== e))
    } else {
      setSelectedItems([...selectedItems, e])
    }
  }

  const onToggle = (isOpen, event, metadata) => {
    if (event && metadata.source === "select") {
      setOpen(true)
    } else {
      setOpen(isOpen)
    }
  }

  const loadMatchingResults = () => {
    const searchTermRgx = new RegExp(searchTerm, "i")
    const matchingItems = options?.filter((item) =>
      searchTermRgx.test(item.value)
    )

    setSearchResults(matchingItems)
  }

  useEffect(() => {
    loadMatchingResults()
  }, [searchTerm])

  useEffect(() => {
    onSelect(selectedItems) // pass to parent if selected an item.
  }, [selectedItems])

  const onKeyUp = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <StyledDropdown
      title={title}
      onSelect={handleSelect}
      onToggle={onToggle}
      show={open}
    >
      <StyledInput placeholder={placeHolder} type="text" onKeyUp={onKeyUp} />
      <StyledItemWrapper>
        {searchResults &&
          searchResults.map((option) => (
            <StyledDropdownItem
              className="d-flex"
              eventKey={option.id}
              key={option.id}
              selected={selectedItems.includes(option.id)}
            >
              {selectedItems.includes(option.id) ? (
                <StyledImg src={Bluetick} alt="selected" />
              ) : (
                <StyledImg src={UnselectedCheckbox} alt="unselected" />
              )}
              <span className="ml-2 mr-auto"> {option.value} </span>
            </StyledDropdownItem>
          ))}
      </StyledItemWrapper>
    </StyledDropdown>
  )
}

export default CheckedDropdown
