import React from "react"
import { Container, Li } from "./Elements/BookLoader"

function n2A(n) {
  let i = 0
  const arr = []
  // eslint-disable-next-line no-plusplus
  while (i < n) arr[i] = i++
  return arr
}

const Laoder = () => (
  <Container>
    <div className="book">
      <div className="inner">
        <div className="left" />
        <div className="middle" />
        <div className="right" />
      </div>
      <ul>
        {n2A(18).map((key) => (
          <Li num={key} key={key} />
        ))}
      </ul>
    </div>
  </Container>
)

export default Laoder
