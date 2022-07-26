/* eslint-disable react/prop-types */

import { AnimatePresence, motion } from "framer-motion"
import React from "react"

import arrowIcon from "../../../assets/icons/arrow_down.svg"
import blueTick from "../../../assets/icons/blue-tick.svg"
import { SelectBoxContainer } from "./SelectBoxContainer"

const SelectBox = ({
  className,
  icon,
  isOpen,
  isOptionsOnTop,
  items,
  label,
  onClick,
  reference,
  width,
}) => (
  <SelectBoxContainer
    className={`${isOpen ? "is-open" : ""} ${className}`}
    isOptionsOnTop={isOptionsOnTop}
    onClick={onClick}
    ref={reference}
    width={width}
  >
    <h5>{label}</h5>
    <img alt="Focus" src={icon || arrowIcon} />
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          animate={{
            opacity: 1,
            translateY: 0,
          }}
          className="dropdown-items"
          exit={{
            opacity: 0,
            translateY: "0.5rem",
          }}
          initial={{
            opacity: 0,
            translateY: "0.5rem",
          }}
          transition={{
            duration: 0.2,
            type: "keyframes",
          }}
        >
          {items.map((item) => (
            <button
              className="dropdown-item"
              key={item.name}
              onClick={item.onClick}
              type="button"
            >
              <span>{item.name}</span>
              {(item.name === "Show All" && label === "Sort By") ||
              item.name === label ? (
                <img alt="Checked" src={blueTick} />
              ) : null}
            </button>
          ))}
        </motion.div>
      ) : null}
    </AnimatePresence>
  </SelectBoxContainer>
)

export default SelectBox
