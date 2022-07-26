import { AnimatePresence } from "framer-motion"
import PropTypes from "prop-types"
import moment from "moment"
import { useHistory } from "react-router-dom"
import { useRef } from "react"
import { useClickAway } from "react-use"
import classNames from "classnames"

import {
  NotificationContainer,
  NotificationListContainer,
  NotificationEmptyContainer,
} from "./elements"

import EmptyNoficationIcon from "../../../../../assets/icons/empty-notification.png"
import MarkAllReadIcon from "../../../../../assets/icons/mark-read.svg"

export const Notification = ({
  isVisible,
  onClose,
  notification,
  unSeenNotification,
  isAdmin,
  isTeacher,
  isStudent,
  onClick,
}) => {
  const containerElement = useRef(null)
  useClickAway(containerElement, onClose)
  const history = useHistory()
  const formatTime = (timeToFormat) => {
    const timeAgo = timeToFormat && moment(timeToFormat).fromNow()
    return timeAgo
  }

  return (
    <AnimatePresence>
      {isVisible ? (
        <NotificationContainer
          animate={{
            opacity: 1,
            translateY: 0,
          }}
          exit={{
            opacity: 0,
            translateY: "-0.5rem",
          }}
          className="d-flex flex-column position-absolute"
          initial={{
            opacity: 0,
            translateY: "-0.5rem",
          }}
          ref={containerElement}
          transition={{
            duration: 0.2,
            type: "keyframes",
          }}
        >
          <div className="arrow-up" />
          {notification?.length ? (
            <NotificationListContainer>
              <div className="notification-container">
                <div className="notification-header">
                  <div className="header-title">
                    Notification{" "}
                    <span className="count">{unSeenNotification?.length}</span>
                  </div>
                  {unSeenNotification?.length ? (
                    <button
                      className="mark-read-button"
                      type="button"
                      onClick={onClick}
                    >
                      <img
                        alt="seen"
                        className="mark-image"
                        src={MarkAllReadIcon}
                      />
                      <div className="mark-read-text ">Mark all as read</div>
                    </button>
                  ) : null}
                </div>
                <div className="divider" />
                <div className="notification-content">
                  {notification?.slice(0, 4)?.map((item) => (
                    <button
                      className="notication-messages"
                      type="button"
                      onClick={() => {
                        if (
                          item?.al_id_auditlog_type === 11 ||
                          item?.al_id_auditlog_type === 12
                        ) {
                          history.push("/admin/users/admin")
                        } else if (item?.al_id_auditlog_type === 10) {
                          history.push("/admin/users/student")
                        } else if (
                          item?.al_id_auditlog_type === 19 ||
                          item?.al_id_auditlog_type === 24
                        ) {
                          history.push(
                            `/stream/${item?.aoui_id_orgunitinstance}/live`
                          )
                        }
                        onClose()
                      }}
                    >
                      <div className="creator-profile">
                        <div
                          className={classNames("unseen", {
                            "unseen-dot": item?.al_notification_seen === 0,
                          })}
                        />
                        <span className="align-items-center circle d-flex justify-content-center profile-creator">
                          {item?.userProfile?.up_name_first[0]}
                          {item?.userProfile?.up_name_last[0]}
                        </span>
                      </div>
                      <div className="message-details">
                        <div className="message">
                          <span className="message-title">
                            {item?.al_notification_title}
                          </span>
                          <br />
                          {item?.al_notification_text}
                        </div>
                        <div className="received-details">
                          <div>
                            {" "}
                            {`${item?.userProfile?.up_name_first}
                            ${item?.userProfile?.up_name_last}`}
                          </div>
                          <div className="time">
                            • {formatTime(item?.al_timestamp)}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
                <div className="view-all">
                  <button
                    className="view-all-notification"
                    onClick={() => {
                      if (isAdmin) history.push("/admin/all-notification")
                      if (isTeacher) history.push("/all-notification")
                      if (isStudent) history.push("/all-notification")
                      onClose()
                    }}
                    type="button"
                  >
                    View All Notifications
                  </button>
                </div>
              </div>
            </NotificationListContainer>
          ) : (
            <NotificationEmptyContainer>
              <div className="notification-empty-container">
                <div className="notification-header">
                  <div className="header-title">Notification</div>
                  {/* <div className="count">3 NEW</div> */}
                </div>
                <div className="divider" />
                <div className="align-items-center d-flex flex-column justify-content-center empty-notification">
                  <img
                    alt="Empty"
                    className="image"
                    src={EmptyNoficationIcon}
                  />
                  <h3 className="mt-4 empty-title">No acivities found</h3>
                  <p className="empty-description">
                    We will notify you when something arrives.
                  </p>
                </div>
              </div>
            </NotificationEmptyContainer>
          )}
        </NotificationContainer>
      ) : null}
    </AnimatePresence>
  )
}

Notification.defaultProps = {
  isVisible: false,
  notification: {},
  unSeenNotification: 0,
  isAdmin: false,
  isTeacher: false,
  isStudent: false,
  onClick: () => {},
}

Notification.propTypes = {
  isVisible: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  notification: PropTypes.array,
  isAdmin: PropTypes.bool,
  isTeacher: PropTypes.bool,
  isStudent: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  unSeenNotification: PropTypes.array,
  onClick: PropTypes.func,
}
