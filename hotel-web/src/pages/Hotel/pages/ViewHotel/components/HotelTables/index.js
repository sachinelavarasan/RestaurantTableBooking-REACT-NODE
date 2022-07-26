/* eslint-disable react/prop-types */
import React, { useEffect, useMemo, useState, useCallback } from "react"

import moment from "moment"
import { useDispatch, useSelector } from "react-redux"
// import { useHistory } from "react-router-dom"

import {
  getHotelTableList,
  deleteTableFromList,
  hotelSelector,
  addTableToHotel,
  updateTableItem,
} from "../../../../../../redux/HotelSlice"
import {
  EmptyState,
  MoreOptions,
  Table,
  Modal,
} from "../../../../../../components/common"
import { DropdownItem } from "../../../../../../components/common/MoreOptions/components"
import AddToastSuccessImg from "../../../../../../assets/icons/addtoastadmin.svg"
import { showToast } from "../../../../../../components/common/Toast"

// import { TableCellLink } from "../../../../../../components/common/Table/styles"
import {
  ListingPageHeader,
  TableSpinner,
} from "../../../../../Admin/components-new"
import { HotelTablesContainer } from "./elements"
import { AddHotelTableModal, EditFoodItemModal } from "./Components"

const DELAY = 500

export const HotelTables = () => {
  const dispatch = useDispatch()
  // const history = useHistory()
  const { hotelTableList, isListLoading, isLoading } =
    useSelector(hotelSelector)
  const [addUnits, setAddUnits] = useState([])

  const [deleteId, setDeleteId] = useState(null)
  const [deleteName, setDeleteName] = useState("")
  const [show, setShow] = useState(false)
  const [editDetails, setEditDetails] = useState(null)

  const clearEditDetails = useCallback(() => {
    setShow(false)
    setAddUnits([])
  }, [])

  const clearEditFoodDetails = useCallback(() => {
    setEditDetails(null)
  }, [])

  const columns = useMemo(
    () => [
      {
        Header: "#",
        accessor: "serial",
        className: "serial",
      },
      {
        Header: "Table Name",
        accessor: "table_name",
        className: "table-name",
      },
      {
        Header: "Seat Count",
        Cell: ({ value }) => (
          <div className="d-flex align-items-center">
            <div className="counts-present">{value}</div>
          </div>
        ),
        accessor: "table_seat_count",
        className: "seat-count",
      },

      {
        Header: "Table Created At",
        Cell: ({ value }) => (
          <div className="total-count">
            {moment(value).format("DD MMM YYYY")}
          </div>
        ),
        accessor: "table_created_at",
        className: "table-creation",
      },
      {
        Header: "Booked Count",
        Cell: ({ value }) => (
          <div className="d-flex align-items-center">
            <div className="booked-counts">{value}</div>
          </div>
        ),
        accessor: "tableBookedCount",
        className: "table-booking-count",
      },
      {
        Header: "",
        Cell: ({ row: { original } }) => (
          <div className="align-items-center d-flex justify-content-center w-100">
            <MoreOptions>
              <DropdownItem
                label="Edit Table"
                onClick={() => {
                  setEditDetails({
                    id: original?.table_id,
                    seatCount: original?.table_seat_count,
                    tableName: original?.table_name,
                  })
                }}
              />
              <DropdownItem
                isDanger
                label="Delete Table"
                onClick={() => {
                  setDeleteId(original?.table_id)
                  setDeleteName(original?.table_name)
                }}
              />
            </MoreOptions>
          </div>
        ),
        accessor: "courses",
        className: "more-option",
      },
    ],
    []
  )

  const onEditSubmit = useCallback(
    (details) => {
      const Data = {
        tableName: details.tableName,
        seatCount: details.seatCount,
      }
      if (!isLoading) {
        dispatch(
          updateTableItem(editDetails.id, Data, () => {
            clearEditFoodDetails()
            showToast(
              AddToastSuccessImg,
              `${Data?.tableName} updated successfully `
            )
          })
        )
      }
    },

    [dispatch, editDetails, isLoading, clearEditFoodDetails]
  )

  // Add a serial number to each row and memoize the data.
  const data = useMemo(
    () => [
      ...(hotelTableList || []).map((item, index) => ({
        ...item,
        serial: index + 1,
      })),
    ],
    [hotelTableList]
  )

  useEffect(() => {
    dispatch(getHotelTableList())
  }, [dispatch])

  const onSubmit = useCallback(() => {
    if (!isLoading && addUnits.length) {
      dispatch(
        addTableToHotel(addUnits, () => {
          showToast(
            AddToastSuccessImg,
            `${addUnits?.length} items added successfully `
          )
          clearEditDetails()
        })
      )
    }
  }, [dispatch, addUnits, clearEditDetails, isLoading])

  return (
    <>
      <HotelTablesContainer>
        <ListingPageHeader
          buttonLabel="Add Table"
          className="add-table mb-4"
          onButtonClick={() => {
            setShow(true)
          }}
          title="All Tables"
        />

        <div className="table-container">
          {isListLoading ? <TableSpinner /> : null}
          {!isListLoading && !hotelTableList?.length ? (
            <EmptyState
              description="try adjusting the search or filter for what you are looking for"
              title="No Table Found"
            />
          ) : null}

          {!isListLoading &&
          hotelTableList?.length &&
          Array.isArray(hotelTableList) &&
          !isListLoading ? (
            <Table
              columns={columns}
              data={data}
              itemName="Tables"
              maxWidth="75rem"
              isSortedBy
            />
          ) : null}
        </div>

        <AddHotelTableModal
          show={show}
          onHide={clearEditDetails}
          onSubmit={onSubmit}
          addUnits={addUnits}
          setAddUnits={setAddUnits}
        />
        <EditFoodItemModal
          editDetails={editDetails}
          onHide={clearEditFoodDetails}
          onSubmit={onEditSubmit}
        />
        <Modal
          buttonLabel="Delete"
          description="Are you sure you want to delete this table from hotel list?"
          isDelete
          isButtonLoading={isLoading}
          loadingButtonLabel="Deleting"
          onButtonClick={() => {
            dispatch(
              deleteTableFromList(deleteId, () => {
                setDeleteId(null)
                showToast(false, `${deleteName} has been deleted.`, true)
                setTimeout(() => {
                  setDeleteName("")
                }, DELAY)
              })
            )
          }}
          onHide={() => {
            setDeleteId(null)

            setTimeout(() => {
              setDeleteName("")
            }, DELAY)
          }}
          show={!!deleteId}
          title={`Delete ${deleteName}`}
          width="41.25rem"
        />
      </HotelTablesContainer>
    </>
  )
}
