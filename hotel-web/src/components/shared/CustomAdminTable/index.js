import PropTypes from "prop-types"
import React from "react"

import CustomAdminTableContainer from "./CustomAdminTableContainer"

/**
 * @param {[string, ...{heading: string, width: string}[]]} columns
 * Array of heading and width of the columns in the order in which they should
 * be rendered. The first item in the array is the property name of a value in
 * each data object which can be used as the key identifier for every row.
 * @example
 * [
 *   'id',
 *   {heading: 'ID', width: '20%'},
 *   {heading: 'Pokémon', width: '80%'},
 * ]
 *
 * @param {{[propertyName: string]: any}} data
 * Array of data objects to be tabularized.
 * @example
 * [
 *   {id: 1, pokemon: 'treecko'},
 *   {id: 2, pokemon: 'torchic'},
 *   {id: 3, pokemon: 'mudkip'},
 * ]
 *
 * @param {{[columnHeading: string]: string | [Function, ...string[]]}} maps
 * Mappings between the column headings and the property names of its values in
 * a data object. The value can be mutated by mapping the column heading to an
 * array with the mutation function and the property names of the values to be
 * passed in as arguments to the function.
 * @example
 * {
 *   ID: 'id',
 *   Pokémon: [(id, pokemon) => pokemon.slice(id), 'id', 'pokemon'],
 * }
 *
 * @returns {{columns: Array.<{heading: string, width: string}>, rows: Array}}
 * Properties for the `CustomTable` component.
 * @example
 * {
 *   columns: [
 *     {heading: 'ID', width: '20%'},
 *     {heading: 'Pokémon', width: '80%'},
 *   ],
 *   rows: [
 *     [1, 'reecko'],
 *     [2, 'rchic'],
 *     [3, 'kip'],
 *   ],
 * }
 */
export const tabularize = (columns, data, maps) => {
  if (!data.length) {
    return {
      columns: columns.slice(1),
      rows: [],
    }
  }

  const rows = data.map((item, rowIndex) =>
    columns.map((column, index) => {
      if (!index) return item[column]

      const mapValue = maps[column.heading]

      if (Array.isArray(mapValue)) {
        const [mutate, ...propertyNames] = mapValue
        const values = propertyNames.map((propertyName) => item[propertyName])
        values.push(rowIndex)
        return mutate(...values)
      }

      return item[mapValue]
    })
  )

  return {
    columns: columns.slice(1),
    rows,
  }
}

/**
 * @example
 * ...
 * const columns = [
 *   'id',
 *   {heading: 'ID', width: '20%'},
 *   {heading: 'Pokémon', width: '80%'},
 * ]
 * const data = [
 *   {id: 1, pokemon: 'treecko'},
 *   {id: 2, pokemon: 'torchic'},
 *   {id: 3, pokemon: 'mudkip'},
 * ]
 * const maps = {
 *   ID: 'id',
 *   Pokémon: [(id, pokemon) => pokemon.slice(id), 'id', 'pokemon'],
 * }
 * ...
 * <CustomTable {...tabularize(columns, data, maps)} />
 * ...
 */
export const CustomAdminTable = ({ columns, rows, ...properties }) => (
  <CustomAdminTableContainer {...properties}>
    <thead>
      <tr>
        {columns.map((column) => (
          <th
            key={column.heading}
            style={
              column.width
                ? {
                    width: column.width,
                  }
                : {}
            }
          >
            {column.heading}
          </th>
        ))}
      </tr>
    </thead>
    {rows.length ? (
      <tbody>
        {rows.map((row) => (
          <tr key={row[0]}>
            {row.slice(1).map((value, index) => (
              <td key={columns[index].heading}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    ) : null}
  </CustomAdminTableContainer>
)

CustomAdminTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string.isRequired,
      width: PropTypes.string,
    })
  ).isRequired,
  rows: PropTypes.arrayOf(PropTypes.any).isRequired,
}
