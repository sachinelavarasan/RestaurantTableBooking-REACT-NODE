import styled from "styled-components"

// eslint-disable-next-line import/prefer-default-export
export const BadgeContainer = styled.button`
  align-items: center;
  background-color: #fff;
  border: 1px solid #dedede;
  border-radius: 5px;
  display: flex;
  padding: 6px 12px 6px 8px;

  &.active {
    border-color: ${({ borderColor }) => borderColor};
  }

  :active,
  :focus {
    outline: none;
  }

  h4 {
    color: #aaa;
    font-size: 0.875rem;
    font-weight: normal;
    margin: 0 10px 0 0;
  }

  p {
    color: #3d4457;
    font-size: 0.875rem;
    font-weight: 500;
    margin: 1px 0 0 0;
  }

  .ellipse {
    align-items: center;
    background-color: #eef1f6;
    border-radius: 14px;
    display: flex;
    height: 28px;
    justify-content: center;
    margin-right: 8px;
    width: 28px;

    img {
      height: 12px;
    }
  }
`
