/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable react/prop-types */
import classNames from "classnames"
import { FilterTabContainer } from "./elements"

export const FilterTab = ({ column, itemName, onChange, value }) => (
  <FilterTabContainer>
    <button
      className={classNames("option", {
        active: itemName === "All" ? !value : value === itemName,
      })}
      type="button"
      onClick={() => {
        onChange(column, itemName === "All" ? "" : itemName)
      }}
    >
      {itemName}
    </button>
  </FilterTabContainer>
)
