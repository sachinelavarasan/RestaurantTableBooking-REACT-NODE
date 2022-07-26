/* eslint-disable react/prop-types */
import { NavLink, useHistory } from "react-router-dom"
import React, { useState } from "react"

import { SideDrawerContainer } from "../Elements/SideDrawerContainer"
import arrowBlueUp from "../../../../assets/icons/arrowBlueUp.svg"
import arrowGrey from "../../../../assets/icons/arrowgrey.svg"
import drawerClose from "../../../../assets/icons/drawerclose.svg"

const SideDrawer = ({
  profileType,
  classId,
  setSideDrawerOpen,
  sideDrawerOpen,
}) => {
  const history = useHistory()
  const { pathname } = history.location
  const [isOrgDropdownOpen, setIsOrgDropdownOpen] = useState(false)
  const [isQualificationDropdownOpen, setIsQualificationDropdownOpen] =
    useState(false)
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false)
  const [isSessionDropdownOpen, setIsSessionDropdownOpen] = useState(false)

  return (
    <SideDrawerContainer>
      <ul className={`sidepanel ${sideDrawerOpen ? "openDrawer" : ""}`}>
        <button
          type="button"
          onClick={() => setSideDrawerOpen(false)}
          className="activebtn"
        >
          <img alt="Show Works" className="drawerClose" src={drawerClose} />
        </button>
        {profileType === 4 ? (
          <div>
            <li>
              <NavLink
                className=""
                activeClassName="activeLink"
                to="/admin"
                exact
                onClick={() => setSideDrawerOpen(false)}
              >
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <button
                type="button"
                className={`activebtn d-flex align-items-center${
                  pathname.includes("/organisation") ? " activeLink" : ""
                }`}
                onClick={() => {
                  setIsOrgDropdownOpen((state) => !state)
                }}
              >
                <span>Organisation</span>
                <img
                  alt="Show Works"
                  className="organisation-button-icon"
                  src={
                    pathname.includes("/organisation") ? arrowBlueUp : arrowGrey
                  }
                />
              </button>
              {isOrgDropdownOpen ? (
                <div className="dropdown-container">
                  <li href="#">
                    <button
                      className={`organisation-dropdown-item${
                        pathname.includes("/organisation/basic-info")
                          ? " activeLink"
                          : ""
                      }`}
                      onClick={() => {
                        setIsOrgDropdownOpen(false)
                        setSideDrawerOpen(false)
                        history.push(`/admin/organisation/basic-info`)
                      }}
                      type="button"
                    >
                      <span className="dropdown-text">Basic Info</span>
                    </button>
                  </li>
                  <li href="#">
                    <button
                      className={`organisation-dropdown-item${
                        pathname.includes("/organisation/departments")
                          ? " activeLink"
                          : ""
                      }`}
                      onClick={() => {
                        setIsOrgDropdownOpen(false)
                        setSideDrawerOpen(false)
                        history.push(`/admin/organisation/departments`)
                      }}
                      type="button"
                    >
                      <span className="dropdown-text">Departments</span>
                    </button>
                  </li>
                  <li href="#">
                    <button
                      className={`organisation-dropdown-item${
                        pathname.includes("/organisation/academicyear")
                          ? " activeLink"
                          : ""
                      }`}
                      onClick={() => {
                        history.push(`/admin/organisation/academicyear`)
                        setIsOrgDropdownOpen(false)
                        setSideDrawerOpen(false)
                      }}
                      type="button"
                    >
                      <span className="dropdown-text">Academic Years</span>
                    </button>
                  </li>
                </div>
              ) : null}
            </li>

            <li>
              <button
                type="button"
                className={`activebtn d-flex align-items-center${
                  pathname.includes("/qualifications") ? " activeLink" : ""
                }`}
                onClick={() => {
                  setIsQualificationDropdownOpen((state) => !state)
                }}
              >
                <span>Qualification</span>
                <img
                  alt="Show Works"
                  className="add-works-button-icon"
                  src={
                    pathname.includes("/qualifications")
                      ? arrowBlueUp
                      : arrowGrey
                  }
                />
              </button>
              {isQualificationDropdownOpen ? (
                <div className="dropdown-container">
                  <li href="#">
                    <button
                      className={`organisation-dropdown-item${
                        pathname.includes("/qualifications")
                          ? " activeLink"
                          : ""
                      }`}
                      onClick={() => {
                        setIsQualificationDropdownOpen(false)
                        setSideDrawerOpen(false)
                        history.push(`/admin/qualifications`)
                      }}
                      type="button"
                    >
                      <span className="dropdown-text">All qualification</span>
                    </button>
                  </li>
                  <li href="#">
                    <button
                      className={`organisation-dropdown-item${
                        pathname.includes("/qualifications/units")
                          ? " activeLink"
                          : ""
                      }`}
                      onClick={() => {
                        setIsQualificationDropdownOpen(false)
                        setSideDrawerOpen(false)
                        history.push(`/admin/qualifications/units`)
                      }}
                      type="button"
                    >
                      <span className="dropdown-text">All units</span>
                    </button>
                  </li>
                </div>
              ) : null}
            </li>
            <li>
              <NavLink
                activeClassName="activeLink"
                to="/admin/courses/active-courses"
                onClick={() => setSideDrawerOpen(false)}
              >
                <span>Courses</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="activeLink"
                to="/admin/classes"
                onClick={() => setSideDrawerOpen(false)}
              >
                <span>Classes</span>
              </NavLink>
            </li>
            <li>
              <button
                type="button"
                className={`activebtn d-flex align-items-center${
                  pathname.includes("/users") ? " activeLink" : ""
                }`}
                onClick={() => {
                  setIsUserDropdownOpen((state) => !state)
                }}
              >
                <span>Users</span>
                <img
                  alt="Show Works"
                  className="add-works-button-icon"
                  src={pathname.includes("/users") ? arrowBlueUp : arrowGrey}
                />
              </button>
              {isUserDropdownOpen ? (
                <div className="dropdown-container">
                  <li href="#">
                    <button
                      className={`organisation-dropdown-item${
                        pathname.includes("/users/admin") ? " activeLink" : ""
                      }`}
                      onClick={() => {
                        setIsUserDropdownOpen(false)
                        setSideDrawerOpen(false)
                        history.push(`/admin/users/admin`)
                      }}
                      type="button"
                    >
                      <span className="dropdown-text">Admins & Teachers</span>
                    </button>
                  </li>
                  <li href="#">
                    <button
                      className={`organisation-dropdown-item${
                        pathname.includes("/users/student") ? " activeLink" : ""
                      }`}
                      onClick={() => {
                        setIsUserDropdownOpen(false)
                        setSideDrawerOpen(false)
                        history.push(`/admin/users/student`)
                      }}
                      type="button"
                    >
                      <span className="dropdown-text">Students</span>
                    </button>
                  </li>
                </div>
              ) : null}
            </li>
            <li>
              <button
                type="button"
                className={`activebtn d-flex align-items-center${
                  pathname.includes("/sessions") ? " activeLink" : ""
                }`}
                onClick={() => {
                  setIsSessionDropdownOpen((state) => !state)
                }}
              >
                <span>Sessions</span>
                <img
                  alt="Show Works"
                  className="add-works-button-icon"
                  src={pathname.includes("/sessions") ? arrowBlueUp : arrowGrey}
                />
              </button>
              {isSessionDropdownOpen ? (
                <div className="dropdown-container">
                  <li href="#">
                    <button
                      className={`organisation-dropdown-item${
                        pathname === "/admin/sessions" ? " activeLink" : ""
                      }`}
                      onClick={() => {
                        setIsSessionDropdownOpen(false)
                        setSideDrawerOpen(false)
                        history.push(`/admin/sessions`)
                      }}
                      type="button"
                    >
                      <span className="dropdown-text">All Sessions</span>
                    </button>
                  </li>
                  <li href="#">
                    <button
                      className={`organisation-dropdown-item${
                        pathname.includes("/admin/sessions/calendar")
                          ? " activeLink"
                          : ""
                      }`}
                      onClick={() => {
                        setIsSessionDropdownOpen(false)
                        setSideDrawerOpen(false)
                        history.push(`/admin/sessions/calendar`)
                      }}
                      type="button"
                    >
                      <span className="dropdown-text">Calendar</span>
                    </button>
                  </li>
                </div>
              ) : null}
            </li>
            <li>
              <NavLink
                activeClassName="activeLink"
                to="/admin/library"
                onClick={() => setSideDrawerOpen(false)}
              >
                <span>Library</span>
              </NavLink>
            </li>
          </div>
        ) : null}
        {profileType === 3 ? (
          <>
            <li>
              <NavLink
                activeClassName="activeLink"
                to={`/stream/${classId}/live`}
                onClick={() => setSideDrawerOpen(false)}
              >
                <span>Stream</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="activeLink"
                to={`/stream/${classId}/works`}
                onClick={() => setSideDrawerOpen(false)}
              >
                <span>Works</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                activeClassName="activeLink"
                to={`/stream/${classId}/students`}
                onClick={() => setSideDrawerOpen(false)}
              >
                <span>Students</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="activeLink"
                to={`/stream/${classId}/assessment-map`}
                onClick={() => setSideDrawerOpen(false)}
              >
                <span>Assessment Map</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="activeLink"
                to={`/stream/${classId}/library`}
                onClick={() => setSideDrawerOpen(false)}
              >
                <span>Library</span>
              </NavLink>
            </li>
          </>
        ) : null}
        {profileType === 2 ? (
          <>
            <li>
              <NavLink
                activeClassName="activeLink"
                to={`/stream/${classId}/live`}
                onClick={() => setSideDrawerOpen(false)}
              >
                <span>Stream</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="activeLink"
                to={`/stream/${classId}/works`}
                onClick={() => setSideDrawerOpen(false)}
              >
                <span>Works</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="activeLink"
                to={`/stream/${classId}/library-student`}
                onClick={() => setSideDrawerOpen(false)}
              >
                <span>Library</span>
              </NavLink>
            </li>
          </>
        ) : null}
      </ul>
    </SideDrawerContainer>
  )
}
export default SideDrawer
