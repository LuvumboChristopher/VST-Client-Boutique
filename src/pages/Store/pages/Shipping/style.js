import styled from 'styled-components'

export const ExpeditionHeader = styled.div`
  width: 100%;
  margin: auto;
  padding: 2rem;
  border-bottom: 1px solid black;
`

export const ExpeditionForm = styled.form`
  width: 100%;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.589);
  display: flex;
  flex-direction: column;
`

export const ExpeditionFormInput = styled.input`
  letter-spacing: 2px;
  width: 100%;
  margin: auto;
  padding: 2rem;
  border: none;
  border-bottom: 1px solid black;
  :focus {
    outline: none;
  }
`

export const ExpeditionFormButton = styled.button`
  width: 100%;
  margin: 0;
  padding: 2rem 0;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: white;
  background-color: black;
  border: none;
  cursor: pointer;
  :hover {
    background-color: rgb(129, 8, 8);
  }
`
