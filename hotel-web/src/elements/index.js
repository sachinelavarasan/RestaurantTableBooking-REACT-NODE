import { createGlobalStyle } from "styled-components"

export const theme = {
  colors: {
    background: "#f4f5f8",
    border: "#e0e0e0",
    danger: "#eb5757",
    dangerButtonActive: "#cc5454",
    dangerButtonHover: "#ff8787",
    darkBorder: "#c9c9c9",
    darkDanger: "#d64727",
    lighterDanger: "#ffe1e1",
    lighterPrimary: "#ecf6ff",
    lightDanger: "#ebc6be",
    lightPrimary: "#cfe7ff",
    lightText: "#8a8c94",
    placeholder: "#c0c0c0",
    primary: "#40a1ff",
    primaryAlt: "#5ba1f2",
    text: "#3d4457",
  },
}

export const GlobalStyles = createGlobalStyle`
  html,
  body,
  #root {
    height: 100%;
    width: 100%;
  }

  button img {
    object-fit: contain;
    vertical-align: unset;
  }

  .modal-dialog {
    max-width: 100%;

    .modal-content {
      background-color: white;
      border: none;
      border-radius: 0.75rem;
      box-shadow: 0.0625rem 0.0625rem 0.25rem rgba(0, 0, 0, 0.04);
      margin: auto;
      width: auto;
    }
  }

  .rbc-overlay {
    border-color: #e0e0e0;
    border-radius: 0.25rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.12);
    padding: 0.5rem;
    width: 19.5rem;

    .rbc-overlay-header {
      border-bottom-color: #e6e7e8;
      color: #0c181f;
      font-size: 1rem;
      font-weight: 600;
      line-height: 1.5rem;
      margin: -0.5rem -0.5rem 0 -0.5rem;
      padding: 0.75rem 1rem;
    }
  }

  @keyframes spin {
    from {
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -moz-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`
