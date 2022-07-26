import { CardContainer } from "./elements"

export const Card = ({ className, img, title, description, onClick }) => (
  <CardContainer className={className}>
    <div className="card__body">
      {img ? (
        <img src={img} className="card__image" alt="logo" />
      ) : (
        <div className="no_img">
          <p className="no_img_text">No Image</p>
        </div>
      )}
      <h2 className="card__title">{title}</h2>
      <p className="card__description">{description}</p>
    </div>
    <button className="card__btn" type="button" onClick={onClick}>
      View Hotel
    </button>
  </CardContainer>
)
