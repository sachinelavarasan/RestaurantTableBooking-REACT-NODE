import styled from "styled-components"

export const CommentsListContainer = styled.div`
  background-color: #17252a;
  min-height: 100vh;
  margin: 0 -0.9375rem;
  padding: 7.0625rem 4rem 4.0625rem 4rem;
  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    header {
      font-size: 1.5rem;
      font-weight: 600;
      color: white;
      margin-bottom: 1rem;
    }
  }
  .Subtitle {
    margin: 0 1.5rem;
    border-radius: 0.5rem;
    p {
      margin-bottom: unset;
      font-weight: 400;
      font-size: 1rem;
      color: #838383;
    }
  }
  .feed-back {
    margin: 1.5rem 1.5rem 0 1.5rem;
  }
  .card-class {
    padding-bottom: calc(10%);
  }
  .add-comments-button {
    background-color: red;
    color: white;
    outline: none;
    border: none;
    padding: 0.5rem;
    margin-right: 1rem;
    border-radius: 0.3rem;
  }
`
