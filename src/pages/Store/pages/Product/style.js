import styled from 'styled-components'

export const ProductContentContainer = styled.div`
  width: 90%;
  margin: auto;
  @media (max-width: 769px) {
    width: 85%;
    max-width: 425px;
    margin: 12rem auto auto;
  }
`

export const ProductScreenWrapper = styled.div`
  width: fit-content;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 4rem;
  @media (max-width: 768px) {
    padding: 0;
    margin: auto;
    flex-direction: column;
    place-items: center;
    gap: 1rem;
  }
`

export const ContentWrapper = styled.div`
  width: 100%;
  margin: auto;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0 auto 2rem;
  }
`


export const DetailsTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid black;
`

export const Description = styled.p`
  text-align: justify;
  margin: 1.5rem auto;
`

export const DetailsContainer = styled.div`
  width: 100%;
  margin: auto;
`

export const ProductVinylCoverContainer = styled.div`
  width: 100%;
  margin: 0 auto 10px;
  display: grid;
  place-items: center;
  flex: 1.15;
  @media (max-width: 1380px) {
    flex: 1.6;
  }
`

export const ProductVinylCover = styled.img`
  width: 100%;
  margin: auto;
  box-shadow: 2px 3px 23px -3px rgba(0, 0, 0, 0.25);
  transition: transform 100ms ease-in-out;
  cursor: zoom-in;
`

export const InfoContainer = styled.div`
  width: 100%;
  margin: auto;
  flex: 2;
`

export const ProductButtonsContainer = styled.div`
  width: 100%;
  margin: 2rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ProductButtonsContent = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: start;
  @media (max-width: 1440px) {
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const ProductButtons = styled.button`
  width: 100%;
  margin: auto;
  padding: 1rem;
  border: 1px solid black;
  background-color: transparent;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 15px;
  font-size: 0.65rem;
  text-align: left;
  text-transform: uppercase;
  letter-spacing: 3px;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: white;
    background-color: rgb(129, 8, 8);
    box-shadow: 2px 3px 23px -3px rgba(0, 0, 0, 0.25);
  }
  @media (max-width: 1380px) {
    width: 100%;
    text-align: center;
  }
`

export const ProductHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  margin: 0 auto;
  border-bottom: 1px solid black;
`
