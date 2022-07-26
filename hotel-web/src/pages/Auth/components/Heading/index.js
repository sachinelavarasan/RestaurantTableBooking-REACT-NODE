import PropTypes from "prop-types"

import { HeadingContainer } from "./elements"

export const Heading = ({ marginBottom, subtitle, title }) => (
  <HeadingContainer className="w-100" marginBottom={marginBottom}>
    <h2 className="mb-2 title" title={title}>
      {title}
    </h2>
    <p className="mb-0 subtitle">{subtitle}</p>
  </HeadingContainer>
)

Heading.defaultProps = {
  marginBottom: "3rem",
}

Heading.propTypes = {
  marginBottom: PropTypes.string,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
