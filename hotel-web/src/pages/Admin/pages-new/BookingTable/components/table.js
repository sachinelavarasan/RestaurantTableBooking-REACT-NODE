/* eslint-disable no-plusplus */

import React, { useCallback, useState } from "react"
import { Row, Col } from "reactstrap"
import { AddBookingModel } from "./AddBookingModel"

export const Table = ({ chairs, empty, name, id, hotelId }) => {
  const [show, setShow] = useState(false)
  const [tableId, setTableId] = useState(null)
  const [tableName, setTableName] = useState("")

  const clearEditDetails = useCallback(() => {
    setShow(false)
    setTableId(null)
    setTableName("")
  }, [])

  const getRow1 = useCallback(() => {
    const chairs1 = []
    for (let i = 0; i < Math.ceil(chairs / 2); ) {
      chairs1.push(
        <span key={i} className={empty ? "empty-table" : "full-table"} />
      )
      i += 1
    }
    return chairs1
  }, [chairs, empty])

  const getRow2 = useCallback(() => {
    const chairs2 = []

    for (let i = 0; i < Math.floor(chairs / 2); ) {
      chairs2.push(
        <span key={i} className={empty ? "empty-table" : "full-table"} />
      )
      i += 1
    }
    return chairs2
  }, [chairs, empty])

  return (
    <div className="table-container">
      <Col
        className={empty ? "table selectable-table" : "table"}
        onClick={() => {
          if (empty) {
            setTableId(id)
            setTableName(name)
            setShow(true)
          }
        }}
      >
        <Row noGutters className="table-row">
          <Col className="text-center">{getRow1()}</Col>
        </Row>
        <Row noGutters className="table-row">
          <Col className="text-center">{getRow2()}</Col>
        </Row>

        <p className="text-center table-name">{name}</p>
      </Col>
      <AddBookingModel
        show={show}
        onHide={clearEditDetails}
        tableId={tableId}
        tableName={tableName}
        hotelId={hotelId}
      />
    </div>
  )
}
