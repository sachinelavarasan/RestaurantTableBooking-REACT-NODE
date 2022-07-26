import { motion } from "framer-motion"
import styled from "styled-components"

export const ProfileMenuContainer = styled(motion.div)`
  background-color: #f3f3f3;
  border: 0.0625rem solid ${({ theme }) => theme.colors.border};
  border-radius: 0.5rem;
  box-shadow: 0.0625rem 0.0625rem 0.25rem rgba(0, 0, 0, 0.04);
  overflow: hidden;
  right: 0;
  top: calc(100% + 0.5rem);
  min-width: 13.625rem;
  @media (max-width: 31.25rem) {
    & {
      display: none !important;
    }
  }

  .name {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5rem;
  }

  .email {
    color: ${({ theme }) => theme.colors.lightText};
    font-size: 0.75rem;
    line-height: 1.125rem;
  }

  .menu-button {
    background-color: white;
    border: none;
    padding: 1.25rem 1rem;

    &.is-first {
      border-bottom: 0.0625rem solid ${({ theme }) => theme.colors.border};
    }

    :active,
    :focus {
      outline: none;
    }

    .button-icon {
      height: 1.5rem;
      width: 1.5rem;
    }

    .button-label {
      color: ${({ theme }) => theme.colors.text};
      font-size: 0.875rem;
      font-weight: 500;
      line-height: 0.875rem;
      margin-right: auto;
      text-align: left;
    }
  }
`
