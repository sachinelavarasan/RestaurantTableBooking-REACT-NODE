import styled from "styled-components"

const PublishedButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: #1cb5d2;
  border-radius: 4px;
  padding: 4px 8px;
  border: 0;
  color: white;
  display: block;

  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
`

export default PublishedButton
