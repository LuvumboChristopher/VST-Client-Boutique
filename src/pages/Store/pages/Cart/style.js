import styled from 'styled-components'

export const CartContentContainer = styled.div`
  width: 90%;
  max-width: 425px;
  margin: 11rem auto 0;
  flex-direction: column;
  border: none;
  @media (min-width: 631px) {
    max-width: none;
  }
  @media (min-width: 769px) {
    display: flex;
    border: 1px solid black;
    width: 90%;
    max-width: none;
    margin: auto;
  }
  @media (min-width: 1280px) {
    flex-direction: row;
  }
`

export const Panierwrapper = styled.div`
  width: 100%;
  margin: auto;
  display: grid;
  place-items: center;
  @media (min-width: 1280px) {
    flex: 2;
  }
`

export const UnderLine = styled.div`
  width: 100%;
  margin: auto;
  height: 1px;
  background-color: black;
  @media (max-width: 1440px) {
    display: none;
  }
`

export const Totalwrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  flex: 0.9;
  @media (min-width: 1280px) {
    border-left: 1px solid black;
  }
`

export const TotalToPay = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  padding: 1.5rem;
  font-size: 0.75rem;
`
export const ItemResume = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: auto;
  padding: 1rem 1.5rem;
`

export const PaimentButton = styled.button`
  width: 100%;
  margin: 0;
  padding: 2.5rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: white;
  background-color: black;
  border: none;
  cursor: pointer;
  :disabled {
    cursor: not-allowed;
  }
`

export const CartItemWrapper = styled.div`
  width: 100%;
  margin: auto;
  border: none;
  @media (min-width: 769px) and (max-width: 1280px) {
    width: 100%;
    padding: 2.5rem;
    border-bottom: 1px solid black;
  }
  @media (min-width: 1280px) and  (max-width: 1440px) {
    padding: 2rem;
    border-bottom: none;
  }
  @media (max-width: 768px) {
    width: 90%;
    margin: 1rem auto 2rem;
  }
`

export const VinylWrapper = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 630px) {
    gap: 3rem;
  }
  @media (min-width: 1441px) {
    flex-direction: row;
    gap: 3rem;
    padding: 3rem;
  }
`

export const VinylDataWrapper = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 631px) {
    flex-direction: row;
    gap: 2rem;
  }
  @media (min-width: 1440px) {
    flex: 3;
  }
`

export const VinylButtonsWrapper = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 631px) and (max-width: 1440px) {
    flex-direction: row;
    gap: 0;
  }
  @media (min-width: 1441px) {
    display: block;
    flex: 0.5;
  }
`


export const Button = styled.button`
  width: 45px;
  height: 45px;
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.555);
  border-radius: 2px;
  cursor: pointer;
  color: black;
  transition: all 0.18s linear;
  :hover {
    background-color: black;
    color: white;
  }
`

export const Price = styled.h1`
  font-size: 1.2rem;
`
export const QuantityButtonWrapper = styled.div`
  width: 100%;
  margin: 1rem auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 17px;
  border-radius: 2px;
  @media (min-width: 631px) and (max-width: 1440px) {
    width: fit-content;
    margin: 0;
    padding: 0;
  }
`
export const DeleteButton = styled.button`
  width: 100%;
  padding: 1rem 2rem;
  border: 1px solid rgba(0, 0, 0, 0.555);
  border-radius: 2px;
  text-align: center;
  text-transform: uppercase;
  color: white;
  background-color: rgb(129, 8, 8);
  cursor: pointer;
  transition: all 0.18s linear;
  :hover {
    background-color: transparent;
    color: rgb(129, 8, 8);
    border: 1px solid rgb(129, 8, 8);
  }
  @media (min-width: 630px) and (max-width: 1440px) {
    width: 160px;
    margin: 0;
  }
`

export const VinylInfoContainer = styled.div`
  width: 100%;
  margin: auto;
`

export const VinylInfoText = styled.p`
  font-size: 0.8rem;
  text-align: justify;
`

export const VinylInfoHeader = styled.div`
  width: 100%;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 8px;
  border-bottom: 1px solid black;
  gap: 30px;
`

export const CartVinylCover = styled.img`
  width: 100%;
  margin: auto;
  cursor: pointer;
  @media (min-width: 631px) {
    width: 225px;
  }
`
