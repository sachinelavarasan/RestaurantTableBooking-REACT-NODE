import styled, { css } from "styled-components"

const CustomBoxContainer = styled.div`
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.04);
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  ${({ width }) =>
    width
      ? css`
          width: ${width};
        `
      : ""}
`

export default CustomBoxContainer
