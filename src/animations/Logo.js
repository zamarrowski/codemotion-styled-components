import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  to {
    transform: rotate(360deg)
  }
`

export default styled.img`
  height: 100px;
  animation: ${rotate} 10s infinite linear;
`
