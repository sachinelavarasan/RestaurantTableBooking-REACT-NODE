import { AnimatePresence } from "framer-motion"
import PropTypes from "prop-types"

import InfoWhiteIcon from "../../../../assets/icons/refactor/info-white.svg"
import { ErrorAlertContainer } from "./elements"

export const ErrorAlert = ({ isVisible, message }) => (
  <AnimatePresence>
    {isVisible ? (
      <ErrorAlertContainer
        animate={{
          translateY: 0,
        }}
        className="align-items-center col-lg-6 col-md-12 d-flex justify-content-center offset-lg-6 position-fixed py-3 w-100"
        exit={{
          translateY: "-3.25rem",
        }}
        initial={{
          translateY: "-3.25rem",
        }}
        transition={{
          duration: 0.3,
          type: "keyframes",
        }}
      >
        <img alt="Error" className="icon mr-2" src={InfoWhiteIcon} />
        <span className="message">{message}</span>
      </ErrorAlertContainer>
    ) : null}
  </AnimatePresence>
)

ErrorAlert.defaultProps = {
  message: null,
}

ErrorAlert.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  message: PropTypes.string,
}
