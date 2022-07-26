import React from "react"
import { Helmet } from "react-helmet"
import "./App.css"
import {
  Redirect,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom"
// import {ActiveClasses} from './pages/ActiveClasses';
// import AwaitingAssessment from './pages/AwaitingAssesment';
// import Stream from './pages/Stream';
// import Student from './pages/Student';
import User from "./pages/Admin"
import Hotel from "./pages/Hotel"

import ForgotPasswordOld from "./pages/ForgotPasswordOld"
import ResetPassword from "./pages/PasswordReset"
import Signup from "./pages/SignupOld"
import ActivateUser from "./pages/ActivateUser"

import { LoginRoute, PrivateRoute } from "./PrivateRoute"
import { ForgotPassword, Login, Register } from "./pages/Auth/pages"

function App() {
  return (
    <>
      <Helmet>
        <title>Restaurant Table Booking</title>
      </Helmet>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={() => {
              const userType = localStorage.getItem("jc-user-type")
              if (userType === "1") {
                return <Redirect to="/hotel" />
              }
              return <Redirect to="/user" />
            }}
          />

          <PrivateRoute path="/user" component={User} isTeacher />

          <LoginRoute path="/verify/:id" component={ActivateUser} />
          <LoginRoute path="/password-reset/:id" component={ResetPassword} />
          <PrivateRoute path="/hotel" component={Hotel} isAdmin />
          <LoginRoute component={ForgotPassword} path="/forgot-password" />
          <LoginRoute component={Login} path="/login" />
          <LoginRoute
            component={ForgotPasswordOld}
            path="/reset-password-confirmation"
          />
          <LoginRoute component={Register} path="/register" />
          <LoginRoute component={Signup} path="/register-success" />
        </Switch>
      </Router>
    </>
  )
}

export default App
