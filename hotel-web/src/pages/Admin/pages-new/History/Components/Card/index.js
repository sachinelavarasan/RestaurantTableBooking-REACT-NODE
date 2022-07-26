import moment from "moment"
import { CardContainer } from "./elements"

export const Card = ({
  description,
  bookedOn,
  eventDate,
  phone,
  item,
  className,
  DeleteOnClick,
}) => (
  <CardContainer className={className}>
    <div className="card__body">
      <span className="badge">
        Hotel : {item.hotel_name} - {item.table_name}
      </span>
      <h2 className="card__title mt-2">Event : {description}</h2>
      <div className="d-flex flex-column">
        <span className="details mt-2">Phone Number : {phone}</span>
        <span className="details mt-2">
          Booked On : {moment(bookedOn).format("DD MMM YYYY")}
        </span>
        <div className="badge mt-2">
          <span>Event Date : {moment(eventDate).format("DD MMM YYYY")}</span>
        </div>
        <div className="time-badge mt-2">
          <span>
            &nbsp; Event Time :
            {` ${moment(item.booking_start_time, "HH:mm")
              .format("h:mm A")
              .replace(/:00/g, "")} - 
              ${moment(item.booking_end_time, "HH:mm")
                .format("h:mm A")
                .replace(/:00/g, "")}`}
          </span>
        </div>
      </div>
    </div>

    <div className="d-flex align-items-center mt-2">
      {!item.is_booking_deleted ? (
        <button
          className="card_btn_delete ml-2"
          type="button"
          onClick={DeleteOnClick}
        >
          Cancel Booking
        </button>
      ) : null}
    </div>
  </CardContainer>
)
