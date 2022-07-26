import styled from "styled-components"

import { Color } from "../../../constants"

export const SearchInputContainer = styled.div`
  align-items: center;
  background-color: #fff;
  border: 1px solid #dedede;
  border-radius: 8px;
  display: flex;
  height: 2.75rem;
  overflow: hidden;
  padding: 0 0 0 11px;
  transition: border-color 0.1s, box-shadow 0.1s;
  width: ${({ width }) => width || "100%"};

  &.is-focused {
    border-color: ${Color.PRIMARY};
    box-shadow: 0 0 0 2px ${Color.LIGHT_BLUE};
    outline: none;
  }

  img {
    height: 16px;
    margin-right: 19px;
  }

  input {
    border: none;
    color: ${Color.PRIMARY_TEXT};
    flex-grow: 1;
    font-size: 0.875rem;
    font-weight: 400;
    height: 100%;

    :active,
    :focus {
      outline: none;
    }

    ::-webkit-input-placeholder {
      color: ${Color.LIGHT_TEXT};
    }
    ::-moz-placeholder {
      color: ${Color.LIGHT_TEXT};
    }
    :-ms-input-placeholder {
      color: ${Color.LIGHT_TEXT};
    }
    :-moz-placeholder {
      color: ${Color.LIGHT_TEXT};
    }
  }
`
