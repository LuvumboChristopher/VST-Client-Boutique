import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { StoreContext } from '../../../../context/StoreProvider'
import useAuth from '../../../../hooks/useAuth'
import { StoreFooter } from '../../components/StoreFooter'
import StoreHeader from '../../components/StoreHeader'
import { ContentContainer } from '../../style'
import { ExpeditionForm, ExpeditionFormButton, ExpeditionFormInput, ExpeditionHeader } from './style'

const Shipping = () => {
  const { auth } = useAuth()
  const navigate = useNavigate()
  const { state, dispatch: ctxDispatch } = useContext(StoreContext)
  const {
    cart: { shippingAddress },
  } = state

  const [firstName, setFirstName] = useState(shippingAddress.firstName || '')
  const [lastName, setlastName] = useState(shippingAddress.lastName || '')
  const [streetAddress, setStreetAddress] = useState(
    shippingAddress.streetAddress || ''
  )
  const [city, setCity] = useState(shippingAddress.city || '')
  const [zipCode, setZipCode] = useState(shippingAddress.zipCode || '')
  const [country, setCountry] = useState(shippingAddress.country || '')

  const handleSubmit = (e) => {
    e.preventDefault()
    ctxDispatch({
      type: 'SAVE_SHIPPING_ADRESS',
      payload: { firstName, lastName, streetAddress, city, country, zipCode },
    })
    localStorage.setItem(
      'shippingAddress',
      JSON.stringify({
        firstName,
        lastName,
        streetAddress,
        city,
        country,
        zipCode,
      })
    )
    if (auth.user) {
      return navigate('/paiement')
    }
    navigate('/connexion')
  }

  return (
    <>
      <StoreHeader />
      <ContentContainer>
        <ExpeditionHeader>
          <h2>Adresse de livraison</h2>
        </ExpeditionHeader>
        <ExpeditionForm onSubmit={handleSubmit}>
          <ExpeditionFormInput
            type='text'
            name={'lastName'}
            value={lastName}
            placeholder={'Nom'}
            onChange={(e) => setlastName(e.target.value)}
            required
          />
          <ExpeditionFormInput
            type='text'
            name={'name'}
            value={firstName}
            placeholder={'Prenom'}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <ExpeditionFormInput
            type='text'
            name={'street address'}
            value={streetAddress}
            placeholder={'Addresse'}
            onChange={(e) => setStreetAddress(e.target.value)}
            required
          />
          <ExpeditionFormInput
            type='text'
            name={'city'}
            value={city}
            placeholder={'Ville'}
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <ExpeditionFormInput
            type='number'
            name={'zip code'}
            value={zipCode}
            placeholder={'Code postal'}
            maxLength={6}
            onChange={(e) => setZipCode(e.target.value)}
            required
          />
          <ExpeditionFormInput
            type='text'
            name={'country'}
            value={country}
            placeholder={'Pays'}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
          <ExpeditionFormButton type='submit'>Soumettre</ExpeditionFormButton>
        </ExpeditionForm>
      </ContentContainer>
      <StoreFooter />
    </>
  )
}

export default Shipping
