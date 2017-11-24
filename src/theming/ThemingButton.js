import styled from 'styled-components'

export default styled.button`
  padding: 10px;
  background-color: ${props => props.theme.success};
  color: white;
  border: 1px solid ${props => props.theme.success};
`
