import styled, { css } from 'styled-components'

export default styled.button`
  border-radius: 5px;
  color: black;
  background-color: white;
  padding: 10px;

  ${props => props.danger && css`
    background-color: red;
    color: white;
  `}

  ${props => props.warning && css`
    background-color: orange;
    color: white;
  `}

`
