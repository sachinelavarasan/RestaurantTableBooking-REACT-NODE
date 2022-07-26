import styled from "styled-components"

import { Color } from "../../../constants"

const EmptyStateContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 85px 0 85px 0;

  img {
    height: 325px;
    margin-bottom: 40px;
    width: 433px;
  }

  h3 {
    color: ${Color.PRIMARY_TEXT};
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.21;
    margin-bottom: 8px;
  }

  p {
    color: ${Color.LIGHT_TEXT};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: 0;
    max-width: 660px;
    text-align: center;
  }
`

export default EmptyStateContainer
