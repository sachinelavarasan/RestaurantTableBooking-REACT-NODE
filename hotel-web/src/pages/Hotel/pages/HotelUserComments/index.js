import React, { useEffect } from "react"
import moment from "moment"
import { useDispatch, useSelector } from "react-redux"
import { CommentsListContainer } from "./elements"
import {
  getHotelUserCommentsList,
  commentsSelector,
} from "../../../../redux/commentsSlice"

import { EmptyState, ShowComments } from "../../../../components/common"

export const HotelUserComments = () => {
  const dispatch = useDispatch()

  const { hotelUserComments, isListLoading } = useSelector(commentsSelector)

  useEffect(() => {
    dispatch(getHotelUserCommentsList())
  }, [dispatch])

  return (
    <>
      <CommentsListContainer>
        {/* <Header hotel={viewHotel} /> */}
        <div className="header-container">
          <header>Comments List</header>
        </div>
        {/* {!isListLoading && data?.length ? (
        <div className="row"> */}
        {/* {data.map((item) => ( */}
        <div className="row mt-4">
          {hotelUserComments?.map((item) => (
            <div className="card-class col-6 mb-4">
              <ShowComments
                data={hotelUserComments}
                height="100%"
                profile={`${item?.UserProfile?.first_name[0]}${item?.UserProfile?.last_name[0]}`}
                comments={item?.comments_text}
                time={moment(item?.comments_created_at).format(
                  "D MMM YYYY, h:mma"
                )}
                username={`${item?.UserProfile?.first_name} ${item?.UserProfile?.last_name}`}
                key={item?.comments_id}
                userType="hotel"
                // deleteOnClick={() => deleteComment(item?.comments_id)}
              />
            </div>
          ))}
        </div>

        {!isListLoading && !hotelUserComments?.length ? (
          <EmptyState
            description="It seems that there is no items here"
            title="No Comments Found!"
          />
        ) : null}
      </CommentsListContainer>
    </>
  )
}
