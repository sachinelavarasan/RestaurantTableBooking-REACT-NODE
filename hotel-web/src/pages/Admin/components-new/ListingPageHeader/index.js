import classNames from "classnames"
import PropTypes from "prop-types"

import PlusIcon from "../../../../assets/icons/refactor/plus-white.svg"
import { Button } from "../../../../components/common"
import { ListingPageHeaderContainer } from "./elements"

export const ListingPageHeader = ({
  buttonLabel,
  className,
  onButtonClick,
  title,
  titleSuffix,
}) => (
  <ListingPageHeaderContainer
    className={classNames(
      "align-items-center",
      "d-flex",
      "justify-content-between",
      "w-100",
      className
    )}
  >
    <h2 className="flex-shrink-0 mb-0 title">
      {title}
      {titleSuffix ? (
        <span className="title-suffix"> {titleSuffix}</span>
      ) : null}
    </h2>
    {onButtonClick ? (
      <Button
        icon={PlusIcon}
        className="add-button"
        isFullWidth={false}
        onClick={onButtonClick}
        label={buttonLabel}
      />
    ) : null}
  </ListingPageHeaderContainer>
)

ListingPageHeader.defaultProps = {
  className: "",
  titleSuffix: "",
}

ListingPageHeader.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  className: PropTypes.string,
  onButtonClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  titleSuffix: PropTypes.string,
}
