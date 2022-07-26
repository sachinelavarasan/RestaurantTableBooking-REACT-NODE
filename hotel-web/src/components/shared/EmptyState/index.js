import PropTypes from "prop-types"
import React from "react"

import emptyStateIllustration from "../../../assets/icons/empty-state.svg"
import EmptyStateContainer from "./EmptyStateContainer"

const EmptyState = ({ body, title }) => (
  <EmptyStateContainer>
    <img alt="Empty" src={emptyStateIllustration} />
    <h3>{title}</h3>
    <p>{body}</p>
  </EmptyStateContainer>
)

EmptyState.propTypes = {
  body: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default EmptyState
