/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import ReactTooltip from "react-tooltip"
import classNames from "classnames"
import { useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

import { ShowCommentsCardContainer, FileContainer } from "./elements"
import { ShowMoreComments } from "./components"
import DeleteCommentIcon from "../../../assets/icons/delete-modal.svg"

const squareVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "Tween", duration: 0.7 },
  },
  hidden: { opacity: 0, scale: 0 },
}

export const ShowComments = ({
  profile,
  comments,
  username,
  time,
  className,
  height,
  deleteOnClick,
  userType,
  // editOnClick,
  rest,
}) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])
  const [isShowMoreCommentModal, setShowMoreCommentModal] = useState(false)
  return (
    <>
      <ShowCommentsCardContainer
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={squareVariants}
        className={classNames("flex-shrink-0", className)}
        {...rest}
      >
        <FileContainer height={height}>
          <div className="comment-content">
            <button
              className="comment-messages"
              type="button"
              onClick={() => {}}
            >
              <div className="creator-profile">
                <span className="align-items-center circle d-flex justify-content-center">
                  {profile}
                </span>
              </div>
              <div className="comment-details">
                <div className="comment-header">
                  <div className="message-title">{username}</div>
                  <div className="card-right">
                    <div className="time">{time}</div>
                    {userType !== "hotel" ? (
                      <div
                        className="delete-comment"
                        data-html
                        data-for="tooltip"
                        data-tip={`<div className="tooltip-values">Delete Your Comment</div>`}
                      >
                        <button type="button" onClick={deleteOnClick}>
                          <img src={DeleteCommentIcon} alt="Delete" />
                        </button>

                        <ReactTooltip
                          backgroundColor="#3d4457"
                          effect="solid"
                          place="left"
                          id="tooltip"
                        />
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="received-details">
                  <div className="comments">
                    <p>
                      {comments?.length > 128
                        ? `${comments?.slice(0, 128)}...`
                        : comments}{" "}
                      {comments?.length > 128 ? (
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
                </div>
              </div>
            </button>
            {/* ))} */}
          </div>
        </FileContainer>
      </ShowCommentsCardContainer>
      <ShowMoreComments
        show={isShowMoreCommentModal}
        username={username}
        profile={profile}
        comments={comments}
        time={time}
        width="40rem"
        buttonLabel="Submit Comment"
        // isButtonLoading={isLoadingForAction}
        // onButtonClick={feedBackSubmission}
        onHide={() => {
          setShowMoreCommentModal(false)
        }}
      />
    </>
  )
}

ShowComments.defaultProps = {
  className: "",
  height: "",
  width: "",
  userType: "",
  deleteOnClick: () => {},
  // editOnClick: () => {},
}

ShowComments.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  comments: PropTypes.string.isRequired,
  profile: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  deleteOnClick: PropTypes.func,
  userType: PropTypes.string,
  // editOnClick: PropTypes.func,
}
