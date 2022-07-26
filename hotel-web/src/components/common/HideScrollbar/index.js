import { createGlobalStyle } from "styled-components"

const HideScrollbar = createGlobalStyle`
  body,
  #root {
    overflow: -moz-scrollbars-none;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  body::-webkit-scrollbar,
  #root::-webkit-scrollbar {
    width: 0 !important;
    display: none;
  }
`

export { HideScrollbar }
