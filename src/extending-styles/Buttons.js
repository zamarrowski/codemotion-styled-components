import styled from 'styled-components'

export const PrimaryButton = styled.button`
  color: white;
  background-color: blue;
  padding: 10px;
  border: 1px solid blue;
`

export const PinkButton = PrimaryButton.extend`
  background-color: pink;
  border-color: pink;
`
