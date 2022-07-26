import styled from "styled-components"

// import BackgroundImage from "../../../../../assets/frontpage/foodimage.jpeg"

export const HeroSectionContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.primary};
  background-position: center;
  background-size: cover;
  height: 100%;

  .junglecat-logo {
    height: 2.3125rem;
    left: 3rem;
    top: 2.5rem;
    width: 10.5rem;
  }

  .hero-text-extension {
    height: 3.5rem;
    left: 50%;
    top: calc(24% - 3.5rem);
    transform: translateX(-30%);
    width: 10.375rem;
    z-index: 10;
  }

  .hero-text {
    color: white;
    font-size: 2.25rem;
    font-weight: 600;
    left: 0;
    letter-spacing: 0.02875rem;
    line-height: 3.20375rem;
    top: 28%;
    text-align: center;
    width: 100%;
    z-index: 10;

    .hero-text-arrow {
      height: 0.9375rem;
      margin-bottom: -1rem;
      width: 1rem;
    }
  }

  .hero-image {
    bottom: 1rem;
    right: -6.2%;
  }
`
