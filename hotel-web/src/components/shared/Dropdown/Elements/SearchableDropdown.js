import styled from "styled-components"
import { DropdownButton, Dropdown } from "react-bootstrap"

const StyledItemWrapper = styled.div`
  font-size: 0.9rem;
`

const StyledDropdown = styled(DropdownButton)`
  display: flex;
  button {
    font-size: 1rem;
    font-weight: 400;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    height: 100%;
    background: none;
    color: #495057;
    padding: 0 0.5rem;
  }
  button:active,
  button:hover,
  button:focus-within,
  button:focus-visible,
  .dropdown-toggle,
  button:focus {
    box-shadow: none !important;
    color: #495057 !important;
    background-color: white !important;
    background: none !important;
  }
`

const StyledInput = styled.input`
  display: block;
  width: 90%;
  padding: 0.1rem 0.1rem;
  margin: 0.2rem 0;
  margin-left: auto;
  margin-right: auto;
  border-radius: 6px;
  border: 1px solid #e5e5e5;
  &:focus {
    outline: none;
  }
`

const StyledImg = styled.img`
  pointer-events: none;
  margin-top: auto;
  margin-bottom: auto;
  height: 15px !important;
  width: 15px !important;
`

const StyledDropdownItem = styled(Dropdown.Item)`
  color: #525252;
  border-bottom: 1px solid #f0f0f0;
  background-color: ${(props) => (props.selected ? "#00abff17" : "white")};
  a:focus,
  a:hover {
    color: #525252;
    background-color: ${(props) => (props.selected ? "#00abff17" : "white")};
    outline: none;
  }
`

export {
  StyledDropdown,
  StyledDropdownItem,
  StyledImg,
  StyledInput,
  StyledItemWrapper,
}
