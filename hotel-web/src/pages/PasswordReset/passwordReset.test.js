import { BrowserRouter as Router } from "react-router-dom"
import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import store from "../../redux/store"
import PasswordReset from "./index"

test("renders reset page with pw fields", async () => {
  const { getByText, getByTestId } = render(
    <Router>
      <Provider store={store}>
        <PasswordReset />
      </Provider>
    </Router>
  )
  expect(getByText(/Update your password/i)).toBeInTheDocument()
  expect(getByTestId("password")).toBeInTheDocument()
  expect(getByTestId("c-password")).toBeInTheDocument()
})
