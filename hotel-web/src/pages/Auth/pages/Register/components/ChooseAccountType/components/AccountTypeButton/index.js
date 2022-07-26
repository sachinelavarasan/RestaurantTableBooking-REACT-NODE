/* eslint-disable react/prop-types */
import styled from "styled-components"
import classNames from "classnames"

const AccountTypeButtonContainer = styled.button`
  border: 0.0625rem solid #e0e0e0;
  width: 19.85rem;
  padding: 1rem;
  border-radius: 0.5rem;
  outline: none;
  background: linear-gradient(to bottom, #7cb8fd 50%, #fff 50%);
  background-position: bottom;
  background-size: 100% 200%;
  transition: all 0.25s ease-in-out;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  img {
    vertical-align: middle;
  }
  :hover {
    background-position: top;
    border: 0.0625rem solid #ecf6ff;
    .button-inside {
      p {
        color: #ffffff;
      }
    }
  }
  .button-inside {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .icon-container {
      height: 2rem;
      width: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 0.5rem;
    }
    .iconbackground {
      background-color: #ecf6ff;
    }
    .iconbackgroundhover {
      background-color: #ffffff;
    }
    p {
      font-weight: 600;
      font-size: 1rem;
      color: #3d4457;
      margin-bottom: unset;
      margin-left: 0.75rem;
    }
  }
  @media (max-width: 22rem) {
    width: 18rem;
  }
`

export const AccountTypeButton = ({
  onClick,
  buttonLabel,
  Icon,
  className,
  arrowIcon,
  onMouseEnter,
  onMouseLeave,
  iconHover,
}) => (
  <AccountTypeButtonContainer
    onClick={onClick}
    className={className}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <div className="button-inside">
      <div
        className={classNames("icon-container", {
          iconbackground: !iconHover,
          iconbackgroundhover: iconHover,
        })}
      >
        <img src={Icon} alt="icon" />
      </div>
      <p>{buttonLabel}</p>
    </div>
    <div>
      <img src={arrowIcon} alt="arrow" />
    </div>
  </AccountTypeButtonContainer>
)
