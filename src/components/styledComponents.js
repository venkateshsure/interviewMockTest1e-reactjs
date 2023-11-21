import styled from 'styled-components'

export const Con = styled.div`
  background-color: #25262c;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const InnerCon = styled.div`
  background-color: #1b1c22;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  padding: 20px;
`

export const SecInnerCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Head = styled.h1`
  color: #ffffff;
  font-size: 20px;
`

export const InnerSecCon = styled.div`
  background-color: #25262c;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ffffff;
`

export const SecCon = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Button = styled.button`
  background: transparent;
  cursor: pointer;
  color: ${props => (props.isActive === true ? `#faff00` : ` #f1f5f9 `)};
`

export const Input = styled.textarea`
  width: 90%;
  background: transparent;
  color: #ffffff;
  font-weight: ${props => (props.isBoldActive === true ? `bold` : `normal`)};
  font-style: ${props => (props.isItalicActive === true ? `italic` : `normal`)};
  text-decoration: ${props =>
    props.isUnderlineActive === true ? `underline` : `normal`};
`

export const List = styled.li`
  list-style-type: none;
`
