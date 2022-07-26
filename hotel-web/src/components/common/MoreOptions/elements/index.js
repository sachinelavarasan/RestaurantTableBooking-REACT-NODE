import { motion } from "framer-motion"
import styled from "styled-components"

export const DropdownContainer = styled(motion.div)`
  background-color: white;
  border: 0.0625rem solid ${({ theme }) => theme.colors.darkBorder};
  border-radius: 0.5rem;
  min-width: 10.25rem;
  padding: 0.5rem;
  right: 0;
  top: calc(100% + 0.5rem);
  z-index: 10;
`

export const MoreOptionsContainer = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 0.3125rem;
  height: 1.5rem;
  transition: background-color 0.1s;
  width: 1.5rem;

  &.is-open {
    background-color: ${({ theme }) => theme.colors.lighterPrimary};
  }

  :active,
  :focus {
    outline: none;
  }

  .icon {
    height: 100%;
    width: 100%;
  }
`
