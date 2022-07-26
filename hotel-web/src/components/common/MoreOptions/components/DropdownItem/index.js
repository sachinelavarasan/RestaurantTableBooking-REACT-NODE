import classNames from "classnames"
import PropTypes from "prop-types"
import ReactTooltip from "react-tooltip"
import FailIcon from "../../../../../assets/icons/refactor/text-input-fail.svg"
import { DropdownItemContainer } from "./elements"

export const DropdownItem = ({
  className,
  isDanger,
  label,
  onClick,
  toolTipHeading,
  toolTipSubText,
  isDisabled,
}) => (
  <DropdownItemContainer
    className={classNames(className, {
      "is-danger": isDanger,
      "is-disabled": isDisabled,
    })}
    onClick={onClick}
    type="button"
    disabled={isDisabled}
  >
    {label}
    {isDisabled ? (
      <div
        className="invited"
        data-html
        data-for="tooltip"
        data-tip={`<div class="tooltip-values">${toolTipHeading} : ${toolTipSubText} </div>`}
      >
        <img alt="Failed" className="status-icon" src={FailIcon} />
        {toolTipHeading ? (
          <ReactTooltip
            backgroundColor="#3d4457"
            effect="solid"
            place="left"
            id="tooltip"
          />
        ) : null}
      </div>
    ) : null}
  </DropdownItemContainer>
)

DropdownItem.defaultProps = {
  className: "",
  toolTipHeading: "",
  isDanger: false,
  isDisabled: false,
  toolTipSubText: "",
}

DropdownItem.propTypes = {
  className: PropTypes.string,
  toolTipHeading: PropTypes.string,
  toolTipSubText: PropTypes.string,
  isDanger: PropTypes.bool,
  isDisabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}
