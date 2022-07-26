import { motion } from "framer-motion"
import styled from "styled-components"

export const ErrorAlertContainer = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.danger};
  left: 0;
  top: 0;
  z-index: 10;

  .icon {
    height: 1.25rem;
    width: 1.25rem;
  }

  .message {
    color: white;
    font-size: 0.875rem;
    line-height: 1.05875rem;
  }
`
