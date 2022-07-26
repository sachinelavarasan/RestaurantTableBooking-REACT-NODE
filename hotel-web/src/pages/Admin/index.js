import React from "react"
import { useRouteMatch, Route, Switch } from "react-router-dom"
import Navbar from "../../components/shared/Navbar"

import {
  HotelList,
  ViewHotel,
  CommentsList,
  MenuAndOfferHotel,
  BookingTable,
  HistoryList,
} from "./pages-new"

const Admin = () => {
  const match = useRouteMatch()

  return (
    <>
      <Switch>
        <Route
          exact
          path={[
            `${match.path}/hotelList/:hotelId/view`,
            `${match.path}/hotelList/:hotelId/view-comments`,
            `${match.path}/hotelList/:hotelId/book-table`,
          ]}
          render={() => null}
        />
        <Route component={Navbar} />
      </Switch>
      <Switch>
        <Route component={HotelList} exact path={`${match.path}/`} />
        <Route component={HistoryList} exact path={`${match.path}/history`} />

        <Route
          component={ViewHotel}
          exact
          path={`${match.path}/hotelList/:hotelId/view`}
        />
        <Route
          component={CommentsList}
          exact
          path={`${match.path}/hotelList/:hotelId/view-comments`}
        />
        <Route
          component={MenuAndOfferHotel}
          exact
          path={`${match.path}/hotelList/:hotelId/menu-offer`}
        />
        <Route
          component={BookingTable}
          exact
          path={`${match.path}/hotelList/:hotelId/book-table`}
        />
      </Switch>
    </>
  )
}

export default Admin
