/* eslint-disable react/prop-types */

import { useMemo } from "react"
import Skeleton from "react-loading-skeleton"

import ClassIcon from "../../../../../assets/icons/class-outlined.svg"
import { Select } from "../../../Select"

export const ClassSelect = ({
  classes = [],
  isLoading,
  onSelect,
  selectedClass,
}) => {
  const classesAsOptions = useMemo(
    () =>
      classes.map((classItem) => ({
        label: `${classItem?.class?.oc_class} - ${classItem?.orgUnit?.unit?.tun_title}`,
        value: classItem?.orui_id_orgunitinstance,
      })),
    [classes]
  )

  if (isLoading) {
    return (
      <Skeleton
        className="ml-4"
        height="3rem"
        style={{
          lineHeight: "unset",
        }}
        width="10.875rem"
      />
    )
  }

  return (
    <Select
      className="align-self-center ml-4 class-list"
      icon={ClassIcon}
      isLarge={false}
      isOptionsSingleLine
      isSearchable={false}
      isTooltipShown
      maxWidth="10.875rem"
      menuWidth="13.9375rem"
      onChange={({ value }) => {
        onSelect(value)
      }}
      options={classesAsOptions}
      value={{
        label: `${selectedClass?.class?.oc_class} - ${selectedClass?.orgUnit?.unit?.tun_title}`,
        value: selectedClass?.orui_id_orgunitinstance,
      }}
    />
  )
}
