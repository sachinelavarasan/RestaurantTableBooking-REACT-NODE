/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import { NavLink, useHistory } from "react-router-dom"
import { useSelector } from "react-redux"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import classNames from "classnames"

import arrowBlue from "../../../assets/icons/arrowup-new.svg"
import arrowBlueDown from "../../../assets/icons/blue-arrow-down.svg"
import arrowGrey from "../../../assets/icons/arrowdown-new.svg"

import logo from "../../../assets/icons/jc-logo-white.svg"
import jcLogo from "../../../assets/icons/jc-mini-logo-white.svg"

import ClassesIcon from "../../../assets/icons/classes-new.svg"
import UsersIcon from "../../../assets/icons/users-new.svg"
import OrganisationIcon from "../../../assets/icons/organisation-new.svg"
import LibraryIcon from "../../../assets/icons/library-new.svg"
import CoursesIcon from "../../../assets/icons/courses-new.svg"
import DashboardIcon from "../../../assets/icons/dashboard-new.svg"
import SessionIcon from "../../../assets/icons/schedule-new.svg"
import QualificationIcon from "../../../assets/icons/qualifications-new.svg"
import ActivityIcon from "../../../assets/icons/activity-new.svg"
import StudentsIcon from "../../../assets/icons/students-new.svg"
import AssessmentMapIcon from "../../../assets/icons/assessment-map-new.svg"

import ClassesActiveIcon from "../../../assets/icons/classes-active.svg"
import UsersActiveIcon from "../../../assets/icons/users-active.svg"
import OrganisationActiveIcon from "../../../assets/icons/organisation-active.svg"
import LibraryActiveIcon from "../../../assets/icons/library-active.svg"
import CoursesActiveIcon from "../../../assets/icons/courses-active.svg"
import DashboardActiveIcon from "../../../assets/icons/dashboard-active.svg"
import SessionActiveIcon from "../../../assets/icons/schedule-active.svg"
import QualificationActiveIcon from "../../../assets/icons/qualifications-active.svg"
import ActivityActiveIcon from "../../../assets/icons/activity-active.svg"
import StudentsActiveIcon from "../../../assets/icons/students-active.svg"
import AssessmentMapActiveIcon from "../../../assets/icons/assessment-map-active.svg"

import { IconStatus } from "./components"
import { SideNavBarContainer } from "./elements"
import { authSelector } from "../../../redux/authSlice"

export const SideNavBar = ({ profileType, isStream, classId }) => {
  const [openSideNav, setOpenSideNav] = useState(false)
  const [isOrgDropdownOpen, setIsOrgDropdownOpen] = useState(false)
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false)
  const [isSessionDropdownOpen, setIsSessionDropdownOpen] = useState(false)
  const history = useHistory()
  const { pathname } = history.location
  const { userOrganisation } = useSelector(authSelector)

  return (
    <SideNavBarContainer>
      <div
        className={classNames("sidebar", {
          "open-class": openSideNav,
        })}
        onMouseEnter={() => {
          setOpenSideNav(true)
        }}
        onMouseLeave={() => {
          setOpenSideNav(false)
          setIsSessionDropdownOpen(false)
          setIsOrgDropdownOpen(false)
          setIsUserDropdownOpen(false)
        }}
      >
        <div className="menu-bar">
          <div className="menu">
            {openSideNav ? (
              <div className="brand-container">
                <img src={logo} alt="logo" className="brand-logo-full" />
                {profileType === 4 ? (
                  <div className="admin-badge">
                    <p>ADMIN</p>
                  </div>
                ) : null}
              </div>
            ) : (
              <div className="brand-container">
                <img src={jcLogo} alt="logo" className="brand-logo" />
              </div>
            )}
            <div className="options-bar">
              {/* #######################------------admin-navbar----------------####################### */}

              {profileType === 4 ? (
                <ul className="menu-links">
                  <li className="">
                    <NavLink
                      className={classNames(" d-flex align-items-center", {
                        activeLink: pathname === "/admin" && openSideNav,
                        activeIcon: pathname === "/admin" && !openSideNav,
                      })}
                      to="/admin"
                      exact
                      id="dashboard-id"
                    >
                      {!openSideNav ? (
                        pathname === "/admin" ? (
                          <img
                            src={DashboardActiveIcon}
                            alt="logo"
                            className="icon-image-close"
                          />
                        ) : (
                          <img
                            src={DashboardIcon}
                            alt="logo"
                            className="icon-image"
                          />
                        )
                      ) : pathname === "/admin" ? (
                        <img
                          src={DashboardActiveIcon}
                          alt="logo"
                          className="icon-image"
                        />
                      ) : (
                        <img
                          src={DashboardIcon}
                          alt="logo"
                          className="icon-image"
                        />
                      )}
                      <span className="text nav-text">Dashboard</span>
                    </NavLink>
                  </li>
                  {/* ################## --organisation dropdown start-- ################### */}
                  <li>
                    <button
                      type="button"
                      className={classNames(
                        "active-dropdown d-flex align-items-center",
                        {
                          activeLink:
                            (pathname.includes("/organisation") &&
                              openSideNav) ||
                            isOrgDropdownOpen,
                          activeIcon:
                            pathname.includes("/organisation") && !openSideNav,
                        }
                      )}
                      onClick={() => {
                        setIsOrgDropdownOpen((state) => !state)
                        setIsSessionDropdownOpen(false)
                        setIsUserDropdownOpen(false)
                      }}
                    >
                      <div className="w-100 d-flex align-items-center">
                        <IconStatus
                          openSideNav={openSideNav}
                          pathName={pathname}
                          ActivePath="/organisation"
                          Icon={OrganisationIcon}
                          ActiveIcon={OrganisationActiveIcon}
                          expandedIcon={isOrgDropdownOpen}
                        />
                        <span
                          className="text nav-text"
                          style={{ marginLeft: "-1px" }}
                        >
                          Organisation
                        </span>
                        <div className="w-100 d-flex justify-content-end align-items-center">
                          <img
                            alt="Show Works"
                            className="button-arrow"
                            src={
                              isOrgDropdownOpen
                                ? arrowBlue
                                : pathname.includes("/organisation")
                                ? arrowBlueDown
                                : arrowGrey
                            }
                          />
                        </div>
                      </div>
                    </button>
                  </li>
                  <AnimatePresence>
                    {isOrgDropdownOpen ? (
                      <motion.ul
                        animate={{ height: 180 }}
                        exit={{
                          height: 0,
                        }}
                        initial={{
                          height: 0,
                        }}
                        transition={{
                          duration: 0.2,
                          type: "keyframes",
                        }}
                        className={classNames("expanded-menu", {
                          active:
                            pathname.includes("admin/organisation") ||
                            isOrgDropdownOpen,
                        })}
                      >
                        <li href="#">
                          <button
                            className={classNames("expanded-menu-item", {
                              active: pathname.includes(
                                "/organisation/basic-info"
                              ),
                            })}
                            onClick={() => {
                              setIsSessionDropdownOpen(false)
                              setIsUserDropdownOpen(false)
                              history.push(`/admin/organisation/basic-info`)
                            }}
                            type="button"
                          >
                            <span
                              className={classNames("dropdown-text", {
                                "active-text": pathname.includes(
                                  "/organisation/basic-info"
                                ),
                              })}
                            >
                              Basic Info
                            </span>
                          </button>
                        </li>
                        <li href="#">
                          <button
                            className={classNames("expanded-menu-item", {
                              active: pathname.includes(
                                "/organisation/departments"
                              ),
                            })}
                            onClick={() => {
                              setIsSessionDropdownOpen(false)
                              setIsUserDropdownOpen(false)
                              history.push(`/admin/organisation/departments`)
                            }}
                            type="button"
                          >
                            <span
                              className={classNames("dropdown-text", {
                                "active-text": pathname.includes(
                                  "/organisation/departments"
                                ),
                              })}
                            >
                              Departments
                            </span>
                          </button>
                        </li>
                        <li href="#">
                          <button
                            className={classNames("expanded-menu-item", {
                              active: pathname.includes(
                                "/organisation/academicyear"
                              ),
                            })}
                            onClick={() => {
                              history.push(`/admin/organisation/academicyear`)
                              setIsSessionDropdownOpen(false)
                              setIsUserDropdownOpen(false)
                            }}
                            type="button"
                          >
                            <span
                              className={classNames("dropdown-text", {
                                "active-text": pathname.includes(
                                  "/organisation/academicyear"
                                ),
                              })}
                            >
                              Academic Years
                            </span>
                          </button>
                        </li>
                      </motion.ul>
                    ) : null}
                  </AnimatePresence>

                  {/* ################## --organisation dropdown end-- ################### */}
                  {/* ################## --users dropdown start-- ################### */}
                  <li>
                    <button
                      type="button"
                      className={classNames(
                        "active-dropdown d-flex align-items-center",
                        {
                          activeLink:
                            (pathname.includes("/users") && openSideNav) ||
                            isUserDropdownOpen,
                          activeIcon:
                            pathname.includes("/users") && !openSideNav,
                        }
                      )}
                      onClick={() => {
                        setIsUserDropdownOpen((state) => !state)
                        setIsSessionDropdownOpen(false)
                        setIsOrgDropdownOpen(false)
                      }}
                    >
                      <div className="w-100 d-flex align-items-center">
                        <IconStatus
                          openSideNav={openSideNav}
                          pathName={pathname}
                          ActivePath="/users"
                          Icon={UsersIcon}
                          ActiveIcon={UsersActiveIcon}
                          expandedIcon={isUserDropdownOpen}
                        />

                        <span className="text nav-text">Users</span>
                        <div className="w-100 d-flex justify-content-end align-items-center">
                          <img
                            alt="Show Works"
                            className="button-arrow"
                            src={
                              isUserDropdownOpen
                                ? arrowBlue
                                : pathname.includes("/users")
                                ? arrowBlueDown
                                : arrowGrey
                            }
                          />
                        </div>
                      </div>
                    </button>
                  </li>
                  <AnimatePresence>
                    {isUserDropdownOpen ? (
                      <motion.ul
                        animate={{ height: 120 }}
                        exit={{
                          height: 0,
                        }}
                        initial={{
                          height: 0,
                        }}
                        transition={{
                          duration: 0.2,
                          type: "keyframes",
                        }}
                        className={classNames("expanded-menu", {
                          active:
                            pathname.includes("admin/users") ||
                            isUserDropdownOpen,
                        })}
                      >
                        <li href="#">
                          <button
                            className={classNames("expanded-menu-item", {
                              active: pathname.includes("/users/admin"),
                            })}
                            onClick={() => {
                              setIsSessionDropdownOpen(false)
                              setIsOrgDropdownOpen(false)
                              history.push(`/admin/users/admin`)
                            }}
                            type="button"
                          >
                            <span
                              className={classNames("dropdown-text", {
                                "active-text":
                                  pathname.includes("/users/admin"),
                              })}
                            >
                              Admin & Teacher
                            </span>
                          </button>
                        </li>
                        <li href="#">
                          <button
                            className={classNames("expanded-menu-item", {
                              active: pathname.includes("/users/student"),
                            })}
                            onClick={() => {
                              setIsSessionDropdownOpen(false)
                              setIsOrgDropdownOpen(false)
                              history.push(`/admin/users/student`)
                            }}
                            type="button"
                          >
                            <span
                              className={classNames("dropdown-text", {
                                "active-text":
                                  pathname.includes("/users/student"),
                              })}
                            >
                              Students
                            </span>
                          </button>
                        </li>
                      </motion.ul>
                    ) : null}
                  </AnimatePresence>
                  {/* ################## --users dropdown end-- ################### */}
                  <li className="">
                    <NavLink
                      className={classNames("d-flex align-items-center", {
                        activeLink:
                          pathname.includes("/qualifications") && openSideNav,
                        activeIcon:
                          pathname.includes("/qualifications") && !openSideNav,
                      })}
                      exact
                      to="/admin/qualifications"
                      id="qualifications-id"
                    >
                      <IconStatus
                        openSideNav={openSideNav}
                        pathName={pathname}
                        ActivePath="/qualifications"
                        Icon={QualificationIcon}
                        ActiveIcon={QualificationActiveIcon}
                      />
                      <span
                        className="text nav-text"
                        style={{ marginLeft: "-1px" }}
                      >
                        Qualifications
                      </span>
                    </NavLink>
                  </li>
                  <li className="">
                    <NavLink
                      className={classNames("d-flex align-items-center", {
                        activeLink:
                          pathname.includes("/courses/active-courses") &&
                          openSideNav,
                        activeIcon:
                          pathname.includes("/courses/active-courses") &&
                          !openSideNav,
                      })}
                      exact
                      to="/admin/courses/active-courses"
                      id="courses-id"
                    >
                      <IconStatus
                        openSideNav={openSideNav}
                        pathName={pathname}
                        ActivePath="/courses/active-courses"
                        Icon={CoursesIcon}
                        ActiveIcon={CoursesActiveIcon}
                      />
                      <span className="text nav-text">Courses</span>
                    </NavLink>
                  </li>
                  <li className="">
                    <NavLink
                      className={classNames("d-flex align-items-center", {
                        activeLink:
                          pathname.includes("/classes") && openSideNav,
                        activeIcon:
                          pathname.includes("/classes") && !openSideNav,
                      })}
                      exact
                      to="/admin/classes"
                      id="classes-id"
                    >
                      <IconStatus
                        openSideNav={openSideNav}
                        pathName={pathname}
                        ActivePath="/classes"
                        Icon={ClassesIcon}
                        ActiveIcon={ClassesActiveIcon}
                        margin="-3px"
                      />

                      <span
                        className="text nav-text"
                        style={{ marginLeft: "-1px" }}
                      >
                        Classes
                      </span>
                    </NavLink>
                  </li>
                  {/* ################## --sessions dropdown start-- ################### */}

                  <li>
                    <button
                      type="button"
                      className={classNames(
                        "active-dropdown d-flex align-items-center",
                        {
                          activeLink:
                            (pathname.includes("/sessions") && openSideNav) ||
                            isSessionDropdownOpen,
                          activeIcon:
                            pathname.includes("/sessions") && !openSideNav,
                        }
                      )}
                      onClick={() => {
                        setIsSessionDropdownOpen((state) => !state)
                        setIsOrgDropdownOpen(false)
                        setIsUserDropdownOpen(false)
                      }}
                    >
                      <div className="w-100 d-flex align-items-center">
                        <IconStatus
                          openSideNav={openSideNav}
                          pathName={pathname}
                          ActivePath="/sessions"
                          Icon={SessionIcon}
                          ActiveIcon={SessionActiveIcon}
                          expandedIcon={isSessionDropdownOpen}
                        />

                        <span className="text nav-text">Sessions</span>
                        <div className="w-100 d-flex justify-content-end align-items-center">
                          <img
                            alt="Show Works"
                            className="button-icon"
                            src={
                              isSessionDropdownOpen
                                ? arrowBlue
                                : pathname.includes("/sessions")
                                ? arrowBlueDown
                                : arrowGrey
                            }
                          />
                        </div>
                      </div>
                    </button>
                  </li>
                  <AnimatePresence>
                    {isSessionDropdownOpen ? (
                      <motion.ul
                        animate={{ height: 120 }}
                        exit={{
                          height: 0,
                        }}
                        initial={{
                          height: 0,
                        }}
                        transition={{
                          duration: 0.2,
                          type: "keyframes",
                        }}
                        className={classNames("expanded-menu", {
                          active:
                            pathname.includes("admin/sessions") ||
                            setIsSessionDropdownOpen,
                        })}
                      >
                        <li href="#">
                          <button
                            className={classNames("expanded-menu-item", {
                              active: pathname === "/admin/sessions",
                            })}
                            onClick={() => {
                              setIsUserDropdownOpen(false)
                              setIsOrgDropdownOpen(false)
                              history.push(`/admin/sessions`)
                            }}
                            type="button"
                          >
                            <span
                              className={classNames("dropdown-text", {
                                "active-text": pathname === "/admin/sessions",
                              })}
                            >
                              All Sessions
                            </span>
                          </button>
                        </li>
                        <li href="#">
                          <button
                            className={classNames("expanded-menu-item", {
                              active: pathname.includes("/sessions/calendar"),
                            })}
                            onClick={() => {
                              setIsUserDropdownOpen(false)
                              setIsOrgDropdownOpen(false)
                              history.push(`/admin/sessions/calendar`)
                            }}
                            type="button"
                          >
                            <span
                              className={classNames("dropdown-text", {
                                "active-text":
                                  pathname.includes("/sessions/calendar"),
                              })}
                            >
                              Calendar
                            </span>
                          </button>
                        </li>
                      </motion.ul>
                    ) : null}
                  </AnimatePresence>
                  {/* ################## --sessions dropdown end-- ################### */}
                  <li>
                    <NavLink
                      className={classNames("d-flex align-items-center", {
                        activeLink:
                          pathname.includes("/library") && openSideNav,
                        activeIcon:
                          pathname.includes("/library") && !openSideNav,
                      })}
                      exact
                      to="/admin/library"
                      id="admin-library-id"
                    >
                      <IconStatus
                        openSideNav={openSideNav}
                        pathName={pathname}
                        ActivePath="/library"
                        Icon={LibraryIcon}
                        ActiveIcon={LibraryActiveIcon}
                        margin="-2px"
                      />
                      <span className="text nav-text">Library</span>
                    </NavLink>
                  </li>
                </ul>
              ) : null}

              {/* #######################------------teacher-navbar----------------####################### */}

              {profileType === 3 && isStream ? (
                <ul className="menu-links">
                  <li className="">
                    <NavLink
                      className={classNames("d-flex align-items-center", {
                        activeLink:
                          pathname.includes(`/stream/${classId}/live`) &&
                          openSideNav,
                        activeIcon:
                          pathname.includes(`/stream/${classId}/live`) &&
                          !openSideNav,
                      })}
                      exact
                      to={`/stream/${classId}/live`}
                      id="stream-id"
                    >
                      <IconStatus
                        openSideNav={openSideNav}
                        pathName={pathname}
                        ActivePath={`/stream/${classId}/live`}
                        Icon={ActivityIcon}
                        ActiveIcon={ActivityActiveIcon}
                      />
                      <span className="text nav-text">Stream</span>
                    </NavLink>
                  </li>
                  <li className="">
                    <NavLink
                      className={classNames("d-flex align-items-center", {
                        activeLink:
                          pathname.includes(`/stream/${classId}/works`) &&
                          openSideNav,
                        activeIcon:
                          pathname.includes(`/stream/${classId}/works`) &&
                          !openSideNav,
                      })}
                      exact
                      to={`/stream/${classId}/works`}
                      id="work-id"
                    >
                      <IconStatus
                        openSideNav={openSideNav}
                        pathName={pathname}
                        ActivePath={`/stream/${classId}/works`}
                        Icon={CoursesIcon}
                        ActiveIcon={CoursesActiveIcon}
                      />
                      <span className="text nav-text">Works</span>
                    </NavLink>
                  </li>
                  <li className="" style={{ marginLeft: "-2px" }}>
                    <NavLink
                      className={classNames("d-flex align-items-center", {
                        activeLink:
                          pathname.includes(`/stream/${classId}/students`) &&
                          openSideNav,
                        activeIcon:
                          pathname.includes(`/stream/${classId}/students`) &&
                          !openSideNav,
                      })}
                      exact
                      to={`/stream/${classId}/students`}
                      id="student-teachapp-id"
                    >
                      <IconStatus
                        openSideNav={openSideNav}
                        pathName={pathname}
                        ActivePath={`/stream/${classId}/students`}
                        Icon={StudentsIcon}
                        ActiveIcon={StudentsActiveIcon}
                      />
                      <span className="text nav-text">Students</span>
                    </NavLink>
                  </li>
                  {userOrganisation?.or_rto_code ? (
                    <li className="" style={{ marginLeft: "2px" }}>
                      <NavLink
                        className={classNames("d-flex align-items-center", {
                          activeLink:
                            pathname.includes(
                              `/stream/${classId}/assessment-map`
                            ) && openSideNav,
                          activeIcon:
                            pathname.includes(
                              `/stream/${classId}/assessment-map`
                            ) && !openSideNav,
                        })}
                        exact
                        to={`/stream/${classId}/assessment-map`}
                        id="assessment-map-id"
                      >
                        <IconStatus
                          openSideNav={openSideNav}
                          pathName={pathname}
                          ActivePath={`/stream/${classId}/assessment-map`}
                          Icon={AssessmentMapIcon}
                          ActiveIcon={AssessmentMapActiveIcon}
                        />
                        <span className="text nav-text">Assessment Map</span>
                      </NavLink>
                    </li>
                  ) : null}
                  <li style={{ marginLeft: "-1px" }}>
                    <NavLink
                      className={classNames("d-flex align-items-center", {
                        activeLink:
                          pathname.includes(`/stream/${classId}/library`) &&
                          openSideNav,
                        activeIcon:
                          pathname.includes(`/stream/${classId}/library`) &&
                          !openSideNav,
                      })}
                      exact
                      to={`/stream/${classId}/library`}
                      id="teacher-library-id"
                    >
                      <IconStatus
                        openSideNav={openSideNav}
                        pathName={pathname}
                        ActivePath={`/stream/${classId}/library`}
                        Icon={LibraryIcon}
                        ActiveIcon={LibraryActiveIcon}
                        margin="-1px"
                      />
                      <span className="text nav-text">Library</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={classNames("d-flex align-items-center", {
                        activeLink:
                          pathname.includes(
                            `/stream/${classId}/sessions/calendar`
                          ) && openSideNav,
                        activeIcon:
                          pathname.includes(
                            `/stream/${classId}/sessions/calendar`
                          ) && !openSideNav,
                      })}
                      exact
                      to={`/stream/${classId}/sessions/calendar`}
                      id="session-calendar-id"
                    >
                      <IconStatus
                        openSideNav={openSideNav}
                        pathName={pathname}
                        ActivePath={`/stream/${classId}/sessions/calendar`}
                        Icon={SessionIcon}
                        ActiveIcon={SessionActiveIcon}
                        margin="1px"
                      />
                      <span className="text nav-text">Sessions</span>
                    </NavLink>
                  </li>
                </ul>
              ) : null}

              {/* #######################------------student-navbar----------------####################### */}

              {profileType === 2 && isStream ? (
                <ul className="menu-links">
                  <li className="">
                    <NavLink
                      className={classNames("d-flex align-items-center", {
                        activeLink:
                          pathname.includes(`/stream/${classId}/live`) &&
                          openSideNav,
                        activeIcon:
                          pathname.includes(`/stream/${classId}/live`) &&
                          !openSideNav,
                      })}
                      exact
                      to={`/stream/${classId}/live`}
                      id="stream-id"
                    >
                      <IconStatus
                        openSideNav={openSideNav}
                        pathName={pathname}
                        ActivePath={`/stream/${classId}/live`}
                        Icon={ActivityIcon}
                        ActiveIcon={ActivityActiveIcon}
                        margin="-2px"
                      />
                      <span
                        className="text nav-text"
                        style={{ marginLeft: "2px" }}
                      >
                        Stream
                      </span>
                    </NavLink>
                  </li>
                  <li className="">
                    <NavLink
                      className={classNames("d-flex align-items-center", {
                        activeLink:
                          pathname.includes(`/stream/${classId}/works`) &&
                          openSideNav,
                        activeIcon:
                          pathname.includes(`/stream/${classId}/works`) &&
                          !openSideNav,
                      })}
                      exact
                      to={`/stream/${classId}/works`}
                      id="work-id"
                    >
                      <IconStatus
                        openSideNav={openSideNav}
                        pathName={pathname}
                        ActivePath={`/stream/${classId}/works`}
                        Icon={CoursesIcon}
                        ActiveIcon={CoursesActiveIcon}
                        margin="-2px"
                      />
                      <span
                        className="text nav-text"
                        style={{ marginLeft: "2px" }}
                      >
                        Works
                      </span>
                    </NavLink>
                  </li>
                  <li style={{ marginLeft: "-1px" }}>
                    <NavLink
                      className={classNames("d-flex align-items-center", {
                        activeLink:
                          pathname.includes(
                            `/stream/${classId}/library-student`
                          ) && openSideNav,
                        activeIcon:
                          pathname.includes(
                            `/stream/${classId}/library-student`
                          ) && !openSideNav,
                      })}
                      exact
                      to={`/stream/${classId}/library-student`}
                      id="teacher-library-id"
                    >
                      <IconStatus
                        openSideNav={openSideNav}
                        pathName={pathname}
                        ActivePath={`/stream/${classId}/library-student`}
                        Icon={LibraryIcon}
                        ActiveIcon={LibraryActiveIcon}
                        margin="-2px"
                      />
                      <span
                        className="text nav-text"
                        style={{ marginLeft: "1px" }}
                      >
                        Library
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={classNames("d-flex align-items-center", {
                        activeLink:
                          pathname.includes(
                            `/stream/${classId}/sessions/calendar`
                          ) && openSideNav,
                        activeIcon:
                          pathname.includes(
                            `/stream/${classId}/sessions/calendar`
                          ) && !openSideNav,
                      })}
                      exact
                      to={`/stream/${classId}/sessions/calendar`}
                      id="session-calendar-id"
                    >
                      <IconStatus
                        openSideNav={openSideNav}
                        pathName={pathname}
                        ActivePath={`/stream/${classId}/sessions/calendar`}
                        Icon={SessionIcon}
                        ActiveIcon={SessionActiveIcon}
                        margin="1px"
                      />
                      <span className="text nav-text">Sessions</span>
                    </NavLink>
                  </li>
                </ul>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </SideNavBarContainer>
  )
}
