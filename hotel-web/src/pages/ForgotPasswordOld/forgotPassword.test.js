import { BrowserRouter as Router } from "react-router-dom"
import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import store from "../../redux/store"
import ForgotPassword from "./index"

test("renders forgot page with user email fields", async () => {
  const { getByText, getByTestId } = render(
    <Router>
      <Provider store={store}>
        <ForgotPassword />
      </Provider>
    </Router>
  )
  expect(getByText(/Enter your registered/i)).toBeInTheDocument()
  expect(getByText(/Email below/i)).toBeInTheDocument()
  expect(getByTestId("email")).toBeInTheDocument()
})
