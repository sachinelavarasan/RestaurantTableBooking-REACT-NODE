import PropTypes from "prop-types"
import styled from "styled-components"

import { Colors } from "../../constants"
import rem from "../../utils/rem"

const ProfilePictureContainer = styled.div`
  align-items: center;
  background-color: ${Colors.Primary};
  border-radius: ${rem(16)};
  color: white;
  display: flex;
  font-size: ${rem(12)};
  font-weight: 500;
  height: ${rem(32)};
  justify-content: center;
  line-height: 1.5;
  width: ${rem(32)};
`

const ProfilePicture = ({ name, ...rest }) => {
  const [firstName, lastName] = name.split(" ")
  return (
    <ProfilePictureContainer {...rest}>
      {firstName[0]}
      {lastName[0]}
    </ProfilePictureContainer>
  )
}

ProfilePicture.propTypes = {
  name: PropTypes.string.isRequired,
}

export default ProfilePicture
