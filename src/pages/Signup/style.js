import { Link } from 'react-router-dom'
import styled from 'styled-components'

import SingupFond from '../../assets/img/singup_fond.png'

export const SingupContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  color: rgb(0, 0, 0);
`

export const SingupImg = styled.div`
  width: 100%;
  background: url(${SingupFond});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  flex: 65%;
  @media (max-width: 1260px) {
    display: none;
  }
`

export const SingupFormContainer = styled.div`
    width: 100%;
    display: grid;
    place-items: center;
    flex: 45%;
    border-left: 5px solid black;
    @media (max-width: 1260px) {
        width: 100%;
        color: white;
        background: url(${SingupFond});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        border: none;
        &:after {
            content: '' ;
            position: absolute;
            z-index: 1;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            margin: 0;
            background-color: rgba(0, 0, 0, 0.3);
        }
    }
`

export const SingupFormContent = styled.div`
  z-index: 2;
  width: 100%;
  margin: auto;
`

export const SingupFormHeader = styled.header`
  margin: 0 auto 1rem;
`

export const SingupTitle = styled.h1`
  font-family: var(--font-family-title);
  font-size: 3.5rem;
  width: 100%;
  margin: 0;
  text-transform: none;
  text-align: center;
`

export const SingupSubtitle = styled.p`
  margin: 0;
  font-size: 0.55rem;
  text-transform: uppercase;
  letter-spacing: 10px;
  text-align: center;
`

export const SingupForm = styled.form`
  width: 75%;
  margin: auto;
  display: grid;
  place-items: center;
  @media (max-width: 768px) {
    width: 85%;
  }
`
export const SingupInputsContainer = styled.div`
  width: 100%;
  margin: auto;
  display: grid;
  place-items: center;
`
export const Errormessage = styled.span`
  width: 100%;
  font-size: 14px;
  color: red;
  display: none;
`

export const SingupInput = styled.input`
  width: 90%;
  margin: 20px auto;
  padding: 1.5rem 3rem;
  color: white;
  background: transparent;
  border: 1px solid white;
  border-radius: 0;
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  outline: none;

  &:focus {
    outline: none;
    color: white;
    background-color: rgba(255, 255, 255, 0.2);
    ::placeholder {
      opacity: 0.8;
      transition: cubic-bezier(0.075, 0.82, 0.165, 1);
    }
  }
  &::placeholder {
    font-size: 0.55rem;
    font-family: var(--font-family-text);
    text-transform: uppercase;
    color: white;
    opacity: 1;
  }

  @media (min-width: 1260px) {
    background: transparent;
    color: black;
    border: 1px solid rgb(0, 0, 0);
    &:focus {
      color: black;
      ::placeholder {
        color: black;
      }
    }
    &::placeholder {
      color: black;
    }
  }
`


export const LoginScreenLink = styled(Link)`
  font-size: 0.95rem;
  margin: 1rem auto;
  padding: 0.3rem;
  color: rgb(0, 0, 0);
  text-align: center;
  &:hover {
    color: rgba(0, 0, 0, 0.705);
  }
  @media (max-width: 1260px) {
    color: white;
    &:hover {
      color: white;
    }
  }
`

export const SingupButton = styled.button`
  width: fit-content;
  margin: 0.6rem auto;
  padding: 0.85rem 2.85rem;
  background: rgb(0, 0, 0);
  font-size: 0.8rem;
  font-family: var(--font-family-text);
  text-transform: uppercase;
  color: rgb(255, 255, 255);
  opacity: 1;
  cursor: pointer;
  border: none;
  &:hover {
    cursor: pointer;
    color: rgb(255, 255, 255);
    background-color: rgb(129, 8, 8);
  }

  @media (max-width: 1260px) {
    border: none;
    color: rgb(255, 255, 255);
    background-color: rgb(129, 8, 8);
    &:hover {
      background-color: transparent;
      outline: 1px solid white;
      color: rgb(255, 255, 255);
    }
  }
`

export const errorMessage = styled.span`
  width: 100%;
  font-size: 12px;
  color: red;
  display: none;
`
