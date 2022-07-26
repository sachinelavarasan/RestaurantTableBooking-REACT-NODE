import React from "react"
import { useRouteMatch, Route, Switch } from "react-router-dom"

import Navbar from "../../components/shared/Navbar"
import {
  HotelMenuList,
  OffersList,
  ViewHotelTables,
  BookingCalender,
  BookedTables,
  HotelUserComments,
} from "./pages"

const Hotel = () => {
  const match = useRouteMatch()
  return (
    <>
      <Switch>
        <Route
          exact
          path={[
            `${match.path}/units/view-unit/:orgUnitInstanceId`,
            `${match.path}/qualifications/add-qualifications-old`,
            `${match.path}/qualifications/add-qualifications`,
            `${match.path}/qualifications/singleQualification/:qualificationId/addUnits`,
            `${match.path}/users/admin/addAdmin`,
            `${match.path}/users/teacher/addTeacher`,
            `${match.path}/users/student/addStudent`,
            `${match.path}/units/add-unit`,
            `${match.path}/qualifications/:qualificationId/add_units`,
            `${match.path}/qualifications/units/add-units`,
            `${match.path}/qualifications/:qualificationId/units/add-units`,
            `${match.path}/classes/add-class`,
            `${match.path}/units/view-unit/:orgUnitInstanceId/add-student`,
            `${match.path}/classes/view-class/:orgClassId/manage-units`,
            `${match.path}/classes/view-class/:orgClassId/add-students`,
            `${match.path}/courses/active-courses/add-courses`,
            `${match.path}/sessions/add-session`,
            `${match.path}/sessions/:sessionId/attendance`,
          ]}
          render={() => null}
        />
        <Route component={Navbar} />
      </Switch>
      <Switch>
        <Route component={HotelMenuList} exact path={`${match.path}/`} />
        <Route component={OffersList} exact path={`${match.path}/offers`} />
        <Route
          component={ViewHotelTables}
          exact
          path={`${match.path}/tables`}
        />
        <Route
          component={BookingCalender}
          exact
          path={`${match.path}/reservations/calender`}
        />
        <Route
          component={BookedTables}
          exact
          path={`${match.path}/reservations`}
        />
        <Route
          component={HotelUserComments}
          exact
          path={`${match.path}/comments`}
        />
      </Switch>
    </>
  )
}

export default Hotel
