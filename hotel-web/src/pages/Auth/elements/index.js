import styled from "styled-components"

export const AuthContainer = styled.div`
  margin: 0 -0.9375rem;
  height: 100vh;
  overflow-y: hidden;
  width: 100vw;

  .bg {
    animation: slide 3s ease-in-out infinite alternate;
    background-image: linear-gradient(-60deg, #2b7a78 50%, #3aafa9 50%);
    bottom: 0;
    left: -50%;
    opacity: 0.5;
    position: fixed;
    right: -50%;
    top: 0;
    z-index: -1;
  }

  .bg2 {
    animation-direction: alternate-reverse;
    animation-duration: 4s;
  }

  .bg3 {
    animation-duration: 5s;
  }

  .content {
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 0.25em;
    box-shadow: 0 0 0.25em rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    left: 50%;
    padding: 10vmin;
    position: fixed;
    text-align: center;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  h1 {
    font-family: monospace;
  }

  @keyframes slide {
    0% {
      transform: translateX(-25%);
    }
    100% {
      transform: translateX(25%);
    }
  }
  .main-section {
    height: 100%;
    overflow-y: auto;

    .main-content {
      /* height: 80%; */
      max-width: 27rem;
      background: #17252a;
      padding: 2rem;
      /* overflow: ; */
      border-radius: 0.5rem;
    }
  }
  .title {
    color: #3aafa9;
  }
  .subtitle {
    color: white;
  }

  .input-field,
  .input-fields {
    label {
      color: white;
    }
  }
`
