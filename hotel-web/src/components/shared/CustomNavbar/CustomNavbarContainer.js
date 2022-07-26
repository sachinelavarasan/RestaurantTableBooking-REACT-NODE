import styled from "styled-components"

const CustomNavbarContainer = styled.nav`
  background-color: #fff;
  border-bottom: 1px solid #e0e0e0;
  padding: 22px 0 26px 48px;
  position: fixed;
  top: ${({ top }) => top}px;
  transition: top 0.2s;
  width: 100%;

  .custom-navbar-logo {
    height: 32px;
  }
`

export default CustomNavbarContainer
