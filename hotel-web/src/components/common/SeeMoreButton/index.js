/* eslint-disable no-constant-condition */
/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import React, { useState } from "react"
import styled from "styled-components"

const SeeMoreContainer = styled.div`
  .see-btn {
    background-color: transparent;
    outline: none;
    border: none;
    color: #40a1ff;
  }
`

export const SeeMoreButton = ({ data, lettersCount }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <SeeMoreContainer>
      {data.length > (lettersCount || 128) && !isExpanded
        ? `${data.slice(0, lettersCount || 128)}...`
        : data}{" "}
      {data.length > (lettersCount || 128) ? (
        !isExpanded ? (
          <button
            onClick={() => setIsExpanded(true)}
            type="button"
            className="see-btn"
          >
            See more
          </button>
        ) : (
          <button
            onClick={() => setIsExpanded(false)}
            type="button"
            className="see-btn"
          >
            See less
          </button>
        )
      ) : null}
    </SeeMoreContainer>
  )
}
