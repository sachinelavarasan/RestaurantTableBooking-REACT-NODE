import styled from "styled-components"
import { motion } from "framer-motion"
/* eslint-disable import/prefer-default-export */

// import {Color} from '../../../../constants';

export const ProfileDownContainer = styled(motion.div)`
  background-color: #ffffff;
  overflow-x: hidden;
  height: 100vh;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 2000;
  display: none !important;
  @media (max-width: 31.25rem) {
    & {
      display: block !important;
    }
  }
  .top-part {
    display: flex;
    padding: 2rem;
    flex-direction: column;
    background: #f3f3f3;
    height: 18rem;
    border-bottom: 0.0625rem solid #e0e0e0;
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
  .profile {
    width: 4.5rem;
    height: 4.5rem;
  }
  .detail {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
  }

  .menu-button {
    background-color: white;
    border: none;
    padding: 1.25rem 2.375rem;
    width: 100%;

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
  .close-btn {
    background-color: transparent;
    border: unset;
    outline: unset;
  }
  .close-icon {
    display: flex;
    vertical-align: middle;
    align-items: center;
    justify-content: flex-end;
  }
  .bottom-part {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
