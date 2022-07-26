import React, { useEffect, useState } from "react"
import moment from "moment"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Controller, useForm } from "react-hook-form"

import { Header, CommentModal } from "./components"
import { CommentsListContainer } from "./elements"
import { getHotelById, userSelector } from "../../../../redux/UserSlice"
import {
  getAllComments,
  addComment,
  deleteComment,
  commentsSelector,
} from "../../../../redux/commentsSlice"
import { showToast } from "../../../../components/common/Toast"
import addIcons from "../../../../assets/icons/class-success.svg"

import {
  EmptyState,
  TextArea,
  ShowComments,
} from "../../../../components/common"
// import AddToastSuccessImg from "../../../../assets/icons/addtoastadmin.svg"
// import { showToast } from "../../../../components/common/Toast"

export const CommentsList = () => {
  const dispatch = useDispatch()
  //   const history = useHistory()
  const { control } = useForm({
    defaultValues: {
      feedBack: "",
    },
  })
  const [commentModal, setCommentModal] = useState(false)
  const [feedBack, setFeedBack] = useState("")
  const { hotelId } = useParams()

  const {
    viewHotel,
    //  isListLoading
  } = useSelector(userSelector)
  useEffect(() => {
    dispatch(getHotelById(hotelId))
  }, [dispatch, hotelId])

  const { comments, isListLoading } = useSelector(commentsSelector)

  useEffect(() => {
    dispatch(getAllComments(hotelId))
  }, [dispatch])

  const feedBackSubmission = () => {
    dispatch(
      addComment(feedBack, hotelId, () => {
        showToast(addIcons, `Comment created successfully`, false)
      })
    )
    setCommentModal(false)
  }

  const deleteUserComment = (commentId) => {
    dispatch(
      deleteComment(commentId, hotelId, () => {
        showToast(false, `Comment deleted successfully`, true)
      })
    )
    setCommentModal(false)
  }

  return (
    <>
      <CommentsListContainer>
        <Header hotel={viewHotel} />
        <div className="header-container">
          <header>Comments List</header>
          <div className="d-flex">
            <button
              className="add-comments-button"
              onClick={() => {
                setCommentModal(true)
              }}
              type="button"
              id="add-comments-button"
            >
              Add Comments
            </button>
          </div>
        </div>
        {/* {!isListLoading && data?.length ? (
        <div className="row"> */}
        {/* {data.map((item) => ( */}
        <div className="row mt-4">
          {comments?.map((item) => (
            <div className="card-class col-6 mb-4">
              <ShowComments
                data={comments}
                height="100%"
                profile={`${item?.UserProfile?.first_name[0]}${item?.UserProfile?.last_name[0]}`}
                comments={item?.comments_text}
                time={moment(item?.comments_created_at).format(
                  "D MMM YYYY, h:mma"
                )}
                username={`${item?.UserProfile?.first_name} ${item?.UserProfile?.last_name}`}
                key={item?.comments_id}
                deleteOnClick={() => deleteUserComment(item?.comments_id)}
                userType="user"
              />
            </div>
          ))}
        </div>

        {!isListLoading && !comments?.length ? (
          <EmptyState
            description="It seems that there is no items here"
            title="No Comments Found!"
          />
        ) : null}
      </CommentsListContainer>
      <CommentModal
        show={commentModal}
        title="Comment here ?"
        width="23.12rem"
        buttonLabel="Submit Comment"
        // isButtonLoading={isLoadingForAction}
        onButtonClick={feedBackSubmission}
        onHide={() => {
          setCommentModal(false)
        }}
      >
        <div className="Subtitle">
          <p>Feel free to comment about your experience</p>
        </div>
        <div className="feed-back">
          <div className="mt-2">
            <Controller
              control={control}
              name="feedback"
              render={(fields) => (
                <TextArea
                  {...fields}
                  className="mr-4 mt-4"
                  placeholder="Enter here"
                  rows="6"
                  onChange={(e) => {
                    fields.onChange(e)
                    setFeedBack(e.target.value)
                  }}
                />
              )}
            />
          </div>
        </div>
      </CommentModal>
    </>
  )
}
