import "bootstrap/dist/css/bootstrap.css"
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { ThemeProvider } from "styled-components"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import "./index.css"
import App from "./App"
import { GlobalStyles, theme } from "./elements"
import store from "./redux/store"
import reportWebVitals from "./reportWebVitals"

toast.configure()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
