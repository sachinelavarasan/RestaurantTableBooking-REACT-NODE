/* eslint-disable react/prop-types */
import PropTypes from "prop-types"
import { Button } from "../Button"

import EmptyStateIcon from "../../../assets/images/components/empty-state.svg"
import { EmptyStateContainer } from "./elements"

export const EmptyState = ({
  description,
  title,
  buttonIcon,
  buttonLabel,
  onButtonClick,
}) => (
  <EmptyStateContainer className="align-items-center d-flex flex-column justify-content-center">
    <img alt="Empty" className="image" src={EmptyStateIcon} />
    <h3 className="mb-2 title">{title}</h3>
    <p className="description mb-0">{description}</p>
    {buttonLabel && onButtonClick ? (
      <div className="button-container">
        <Button
          icon={buttonIcon || ""}
          className="add-button"
          isFullWidth={false}
          onClick={onButtonClick}
          label={buttonLabel}
        />
      </div>
    ) : null}
  </EmptyStateContainer>
)

EmptyState.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
