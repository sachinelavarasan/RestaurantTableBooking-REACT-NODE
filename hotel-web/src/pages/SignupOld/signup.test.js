import { BrowserRouter as Router } from "react-router-dom"
import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import store from "../../redux/store"
import Signup from "./index"

test("renders invitecode screen first", async () => {
  const { getByText, getByTestId } = render(
    <Router>
      <Provider store={store}>
        <Signup />
      </Provider>
    </Router>
  )
  expect(getByText(/Please enter it below/i)).toBeInTheDocument()
  expect(getByTestId("inv_code")).toBeInTheDocument()
})
