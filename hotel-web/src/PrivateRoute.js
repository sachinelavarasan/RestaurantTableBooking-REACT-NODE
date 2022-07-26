/* eslint react/prop-types: 0 */

import * as React from "react"
import { useDispatch } from "react-redux"
import { Route, Redirect, useHistory } from "react-router-dom"

// import {getProfile} from './pages/AuthOld/authSlice';
import { fetchProfile } from "./redux/authSlice"

/** checks and returns the token in the localstorage */
const isAuthenticated = () => {
  const token = localStorage.getItem("jwtToken")
  return token
}

export const PrivateRoute = ({
  component: Component,
  isAdmin,
  isTeacher,
  ...rest
}) => {
  const token = React.useRef(isAuthenticated()).current

  const dispatch = useDispatch()
  const history = useHistory()

  React.useEffect(() => {
    if (token) {
      dispatch(
        fetchProfile(() => {
          history.push("/login")
        })
      )
    }
  }, [token, history, dispatch])

  // if (isLoading) {
  //   return null
  // }

  return (
    <Route
      {...rest}
      render={(props) => {
        if (token) {
          if (isAdmin) {
            if (localStorage.getItem("jc-user-type") === "1") {
              return <Component {...props} />
            }

            return (
              <Redirect
                to={{
                  pathname: "/user",
                  state: { from: props.location },
                }}
              />
            )
          }
          if (isTeacher) {
            if (localStorage.getItem("jc-user-type") === "2") {
              return <Component {...props} />
            }

            return (
              <Redirect
                to={{
                  pathname: "/hotel",
                  state: { from: props.location },
                }}
              />
            )
          }
          return <Component {...props} />
        }

        return (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }}
    />
  )
}

export const LoginRoute = ({ component: Component, ...rest }) =>
  isAuthenticated() ? (
    <Redirect to={{ pathname: "/classes" }} />
  ) : (
    <Route {...rest} render={(props) => <Component {...rest} {...props} />} />
  )
