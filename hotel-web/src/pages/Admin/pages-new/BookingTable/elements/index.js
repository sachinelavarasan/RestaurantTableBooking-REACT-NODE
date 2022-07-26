import styled from "styled-components"
import { motion } from "framer-motion"

export const BookingContainer = styled(motion.div)`
  background-color: #17252a;
  min-height: 100vh;
  margin: 0 -0.9375rem;
  padding: 7.0625rem 4rem 4.0625rem 4rem;
  .select-date {
    color: white;
  }
  .choose-time label {
    color: white;
  }
  .date-time-div {
    display: flex;
    width: 70%;
  }
  .react-datepicker__input-container {
    input {
      border: 0.0625rem solid ${({ theme }) => theme.colors.border};
      border-radius: 0.5rem;
      overflow: hidden;
      transition: border-color 0.1s, box-shadow 0.1s;
      padding: 0.3rem 0.9rem !important;
      height: 45px;
    }

    &.has-error {
      border-color: ${({ theme }) => theme.colors.danger} !important;

      &.is-focused {
        box-shadow: 0 0 0 0.125rem ${({ theme }) => theme.colors.lightDanger};
      }
    }
  }

  &.is-focused {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 0.125rem ${({ theme }) => theme.colors.lightPrimary};
  }
  .get-tables-button {
    background-color: #e63946;
    border: 1px solid #e63946;
    color: white;
    outline: none;
    border: none;
    padding: 0.5rem;
    margin-left: 1rem;
    margin-top: 1.4rem;
    border-radius: 0.3rem;
  }
  .pizza-cta {
    padding-top: 4%;
  }

  .looking-for-pizza {
    font-size: 2.5rem;
    padding-bottom: 1.8%;
    padding-right: 3%;
    padding-left: 3%;
  }

  .book-table-btn {
    color: white;
    font-size: 1.2rem;
    padding: 2% 8%;
    border-radius: 25px;
    background-color: #e74c3c;
    border: 2px white solid;
    font-family: ABeeZee, sans-serif;
  }
  .book-table-btn:hover {
    color: #e74c3c;
    background-color: white !important;
    border: 2px solid black !important;
  }

  @media (min-width: 768px) {
    .book-table-btn {
      font-size: 1.4rem;
      padding: 0.5% 5%;
    }
  }
  .big-img-container {
    padding: 10% 0;
  }

  @media (min-width: 768px) {
    .big-img-container {
      padding: 4% 0;
    }
  }
  .big-img {
    width: 96%;
    border-radius: 25px;
    border-bottom-left-radius: 25px;
  }

  .selected-table {
    font-size: 1.25rem;
    padding-bottom: 2%;
  }

  input[type="date"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  input[type="date"]::-webkit-calendar-picker-indicator {
    -webkit-appearance: none;
    display: none;
  }

  .booking-dropdown {
    width: 85%;
    padding: 4% 0;
    background-color: #e74c3c;
    color: white;
    margin: 2% 0;
    font-family: "Roboto";
    font-size: 1.1rem;
    border: none;
    border-radius: 5px;
    text-align: center;
  }
  .booking-dropdown:hover {
    background-color: #e74c3c;
    color: white;
  }
  .booking-dropdown:focus {
    outline: none;
    box-shadow: none;
  }
  .booking-dropdown-menu {
    outline: none;
  }
  .booking-dropdown-item:hover {
    background-color: white;
  }
  .booking-dropdown-item:active {
    background-color: white;
    color: black;
  }

  @media (min-width: 768px) {
    .booking-dropdown {
      font-size: 1.2rem;
    }
  }
  .table-display-message {
    padding: 2% 0;
    text-align: center;
    font-size: 1.3rem;
    color: white;
  }

  .tables-display {
    /* background-color: #def2f1; */
    margin-top: 2%;
    padding: 3%;
    border-radius: 25px;
  }

  /* @media (min-width: 768px) {
    .tables-display {
      margin: 6% 2.5%;
    }
  } */
  .table-key {
    padding-top: 1%;
    padding-bottom: 4.5%;
    color: white;
  }

  .available-tables {
    color: white;
    font-size: 1.2rem;
    font-family: Roboto, sans-serif;
  }

  .table-container {
    margin: 0 1%;
  }

  .table {
    background-color: rgba(245, 246, 250, 0.4);
    padding: 15px;
    border-radius: 25px;
    min-width: 80px;
  }

  .table-row {
    margin-bottom: 8px;
  }

  .selectable-table:hover {
    cursor: pointer;
  }
  .selectable-table:hover-row {
    padding: 5px;
  }

  .full-table {
    background-color: white;
    border: solid 2px white;
    border-radius: 50%;
    padding: 1px 10px;
    margin: 3px;
  }

  .empty-table {
    background-color: #e74c3c;
    border: solid 2px white;
    border-radius: 50%;
    padding: 1px 10px;
    margin: 3px;
  }

  .table-name {
    color: white;
    font-size: 0.875rem;
    font-weight: bold;
    padding-top: 15px;
    font-family: Roboto, sans-serif;
  }

  .reservation-details-container {
    padding: 0 4%;
    padding-bottom: 5%;
  }

  .reservation-details {
    margin: 0 2%;
    margin-bottom: 5%;
  }

  @media (min-width: 768px) {
    .reservation-details {
      margin-bottom: 0;
    }
  }
  .reservation-input:focus {
    border-color: black;
    box-shadow: 0 0;
  }

  .reservation-error {
    color: #c0392b;
    font-size: 1.1rem;
    padding-bottom: 3%;
  }

  .thanks-header {
    padding: 5% 0;
    padding-top: 10%;
    font-size: 2.5rem;
  }

  .thanks-subtext {
    font-size: 1.2rem;
    padding: 2%;
  }

  .thank-you-pizza {
    font-size: 4rem;
    color: #e74c3c;
    padding-bottom: 8%;
  }

  @media (min-width: 768px) {
    .thanks-header {
      font-size: 5.5rem;
    }

    .thanks-subtext {
      font-size: 2.2rem;
    }

    .thank-you-pizza {
      font-size: 7rem;
      padding-bottom: 4%;
    }
  }
`
