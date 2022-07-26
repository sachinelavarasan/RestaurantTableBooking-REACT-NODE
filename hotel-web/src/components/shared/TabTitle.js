import PropTypes from "prop-types"
import styled from "styled-components"

import { Colors } from "../../constants"
import rem from "../../utils/rem"

const TabTitleContainer = styled.div`
  border-bottom: ${rem(2)} solid
    ${({ isActive }) => (isActive ? Colors.Primary : "transparent")};
  padding-bottom: ${rem(12)};
  margin-right: ${rem(32)};

  img {
    height: ${rem(20)};
    margin-right: ${rem(6)};
    object-fit: contain;
    width: ${rem(20)};
  }

  .title {
    color: ${({ isActive }) => (isActive ? Colors.Primary : Colors.LightText)};
    font-size: ${rem(16)};
    font-weight: 500;
    line-height: 1.125;
    margin-right: ${rem(12)};
  }

  .item-count {
    background-color: ${({ isActive }) =>
      isActive ? Colors.Primary : Colors.Placeholder};
    border-radius: ${rem(10)};
    color: white;
    font-size: ${rem(10)};
    font-weight: 500;
    height: ${rem(20)};
    line-height: 1.2;
    width: ${rem(20)};
  }
`

const TabTitle = ({ icon, isActive, itemCount, title }) => (
  <TabTitleContainer
    className="align-items-center d-flex tab-name"
    isActive={isActive}
  >
    <img alt={title} src={icon} />
    <span className="title">{title}</span>
    <span className="align-items-center d-flex item-count justify-content-center">
      {itemCount}
    </span>
  </TabTitleContainer>
)

TabTitle.propTypes = {
  itemCount: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
}

export default TabTitle
