import { CardContainer } from "./elements"

export const Card = ({
  className,
  // , img, title, description, onClick
}) => (
  <CardContainer className={className}>
    <div className="comment-content">
      <button className="comment-messages" type="button" onClick={() => {}}>
        <div className="creator-profile">
          <span className="align-items-center circle d-flex justify-content-center">
            EJ
          </span>
        </div>
        <div className="comment-details">
          <div className="comment-header">
            <div className="message-title">xzvnc,x</div>
            <div className="time">time</div>
          </div>
          <div className="received-details">
            <div>cxvmn</div>
          </div>
        </div>
      </button>
      {/* ))} */}
    </div>
  </CardContainer>
)
