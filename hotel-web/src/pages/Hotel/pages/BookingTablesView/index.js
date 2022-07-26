import React from "react"
import { Helmet } from "react-helmet"

import { ViewHotelContainer } from "./elements"
import { HotelTables } from "./components"

export const BookedTables = () => (
  <>
    <Helmet>
      <title>View Table | Hotel</title>
    </Helmet>

    <ViewHotelContainer>
      <HotelTables />
    </ViewHotelContainer>
  </>
)
