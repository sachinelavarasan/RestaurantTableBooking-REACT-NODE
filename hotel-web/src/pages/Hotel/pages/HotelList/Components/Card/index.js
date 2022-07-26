import { CardContainer } from "./elements"

export const Card = ({
  className,
  menuName,
  itemType,
  EditOnClick,
  DeleteOnClick,
}) => (
  <CardContainer className={className}>
    <div className="card__body">
      <h2 className="card__title">{menuName}</h2>
    </div>
    <div className="d-flex align-items-center">
      <div className="badge mr-3">
        <span>{itemType}</span>
      </div>
      <button className="card_btn_edit" type="button" onClick={EditOnClick}>
        Edit
      </button>
      <button
        className="card_btn_delete ml-2"
        type="button"
        onClick={DeleteOnClick}
      >
        Delete
      </button>
    </div>
  </CardContainer>
)
