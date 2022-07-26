/* eslint-disable react/prop-types */

import classNames from "classnames"
import { AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { useClickAway } from "react-use"

import MoreOptionsIcon from "../../../assets/icons/refactor/more-options.svg"
import { DropdownContainer, MoreOptionsContainer } from "./elements"

export const MoreOptions = ({ children, className }) => {
  const ref = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  useClickAway(ref, () => {
    setIsOpen(false)
  })

  return (
    <MoreOptionsContainer
      className={classNames(className, "position-relative", {
        "is-open": isOpen,
      })}
      onClick={() => {
        setIsOpen((previousValue) => !previousValue)
      }}
      ref={ref}
      type="button"
    >
      <img alt="MoreOptions" className="icon" src={MoreOptionsIcon} />
      <AnimatePresence>
        {isOpen ? (
          <DropdownContainer
            animate={{
              opacity: 1,
              translateY: 0,
            }}
            exit={{
              opacity: 0,
              translateY: "-0.5rem",
            }}
            className="d-flex flex-column position-absolute dropdowncontainer"
            initial={{
              opacity: 0,
              translateY: "-0.5rem",
            }}
            transition={{
              duration: 0.2,
              type: "keyframes",
            }}
          >
            {children}
          </DropdownContainer>
        ) : null}
      </AnimatePresence>
    </MoreOptionsContainer>
  )
}
