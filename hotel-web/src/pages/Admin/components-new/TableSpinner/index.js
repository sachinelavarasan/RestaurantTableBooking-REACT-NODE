import TableSpinnerIcon from "../../../../assets/icons/refactor/table-spinner.svg"
import { TableSpinnerContainer } from "./elements"

export const TableSpinner = () => (
  <TableSpinnerContainer className="align-items-center d-flex justify-content-center">
    <img alt="Loading" className="spinner-icon" src={TableSpinnerIcon} />
  </TableSpinnerContainer>
)
