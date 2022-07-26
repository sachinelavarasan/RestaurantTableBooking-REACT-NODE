/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import { useState } from "react"
import { CardContainer } from "./elements"
import { ShowMoreComments } from "./components"

export const Card = ({
  className,
  img,
  description,
  EditOnClick,
  EndOnClick,
  DeleteOnClick,
  isFinished,
}) => {
  const [isShowMoreCommentModal, setShowMoreCommentModal] = useState(false)
  return (
    <CardContainer className={className}>
      <div className="card__body">
        {img ? (
          <img src={img} className="card__image" alt="logo" />
        ) : (
          <div className="no_img">
            <p className="no_img_text">No Image</p>
          </div>
        )}
        <p className="card__description">
          {" "}
          {description?.length > 40
            ? `${description?.slice(0, 40)}...`
            : description}{" "}
          {description?.length > 40 ? (
            !isShowMoreCommentModal ? (
              <button
                onClick={() => setShowMoreCommentModal(true)}
                type="button"
              >
                See more
              </button>
            ) : (
              <button
                onClick={() => setShowMoreCommentModal(false)}
                type="button"
              >
                See less
              </button>
            )
          ) : null}
        </p>
      </div>
      <div className="d-flex justify-content-between card__container">
        {isFinished === 0 ? (
          <>
            <button
              className="card_btn_edit"
              type="button"
              onClick={EditOnClick}
            >
              Edit
            </button>
            <button className="card_btn_end" type="button" onClick={EndOnClick}>
              End Now
            </button>
          </>
        ) : (
          <div className="text">
            <span>Offer Ended</span>
          </div>
        )}
        <button
          className="card_btn_delete"
          type="button"
          onClick={DeleteOnClick}
        >
          Delete
        </button>
      </div>

      <ShowMoreComments
        show={isShowMoreCommentModal}
        comments={description}
        width="40rem"
        onHide={() => {
          setShowMoreCommentModal(false)
        }}
      />
    </CardContainer>
  )
}
