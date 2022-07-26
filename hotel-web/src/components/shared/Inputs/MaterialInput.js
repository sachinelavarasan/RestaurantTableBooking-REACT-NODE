import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledMaterialInput = styled.label`
  & {
    position: relative;
    display: inline-block;
    font-size: 16px;
    line-height: 0.8;
    overflow: hidden;
    width: 100%;
  }

  /* Input, Textarea */
  & > input,
  & > textarea {
    display: block;
    box-sizing: border-box;
    margin: 0;
    border: none;
    border-top: solid 27px transparent;
    border-bottom: solid 1px
      rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
    padding: 0 0 4px;
    width: 100%;
    height: inherit;
    color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.87);
    background-color: transparent;
    box-shadow: none; /* Firefox */
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    caret-color: #757575;
    transition: border-bottom 0.2s, background-color 0.2s;
  }

  /* Span */
  & > input + span,
  & > textarea + span {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    box-sizing: border-box;
    padding: 7px 0 0;
    color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
    font-size: 75%;
    line-height: 18px;
    pointer-events: none;
    transition: color 0.2s, font-size 0.2s, line-height 0.2s;
  }

  /* Underline */
  & > input + span::after,
  & > textarea + span::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    display: block;
    width: 100%;
    height: 2px;
    background-color: #757575;
    transform-origin: bottom center;
    transform: scaleX(0);
    transition: transform 0.2s;
  }

  /* Hover */
  & > input:hover,
  & > textarea:hover {
    border-bottom-color: rgba(
      var(--pure-material-onsurface-rgb, 0, 0, 0),
      0.87
    );
  }

  /* Placeholder-shown */
  & > input:not(:-webkit-autofill):not(:focus):placeholder-shown + span,
  & > textarea:not(:-webkit-autofill):not(:focus):placeholder-shown + span {
    font-size: inherit;
    line-height: 56px;
    border-color: green;
  }

  /* Focus */
  & > input:focus,
  & > textarea:focus {
    outline: none;
  }

  & > input:focus + span,
  & > textarea:focus + span {
    color: #757575;
  }

  & > input:focus + span::before,
  & > textarea:focus + span::before {
    opacity: 0.12;
  }

  & > input:focus + span::after,
  & > textarea:focus + span::after {
    transform: scale(1);
  }

  /* Disabled */
  & > input:disabled,
  & > textarea:disabled {
    border-bottom-color: rgba(
      var(--pure-material-onsurface-rgb, 0, 0, 0),
      0.38
    );
    color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);
  }

  & > input:disabled + span,
  & > textarea:disabled + span {
    color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);
  }

  /* Faster transition in Safari for less noticable fractional font-size issue */
  @media not all and (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) {
      & > input,
      & > input + span,
      & > input + span::after,
      & > textarea,
      & > textarea + span,
      & > textarea + span::after {
        transition-duration: 0.1s;
      }
    }
  }
`

/**
 * children = any input element
 * textContent = floating text for the input
 * Note: dont use emplt placeholders, or animation will break.
 */

const MaterialInput = (props) => {
  const { children, textContent } = props

  return (
    <StyledMaterialInput {...props}>
      {React.cloneElement(children, {
        placeholder: " ",
      })}
      <span> {textContent} </span>
    </StyledMaterialInput>
  )
}

MaterialInput.propTypes = {
  children: PropTypes.element.isRequired,
  textContent: PropTypes.string.isRequired,
}

export default MaterialInput
