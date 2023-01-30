import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { StoreContext } from '../../../../context/StoreProvider'
import useAuth from '../../../../hooks/useAuth'

import { ContentContainer } from '../../style'
import StoreHeader from '../../components/StoreHeader'
import { StoreFooter } from '../../components/StoreFooter'

import {
  ExpeditionFormRadio,
  PaymentCheckBox,
  PaymentFormContainer,
} from './style'
import {
  ExpeditionForm,
  ExpeditionFormButton,
  ExpeditionHeader,
} from '../Shipping/style'

export default function Payment() {
  const { auth, checkUser } = useAuth()
  const navigate = useNavigate()
  const { state, dispatch: ctxDispatch } = useContext(StoreContext)
  const {
    cart: { paymentMethod },
  } = state

  const [paymentMethodName, setPaymentMethod] = useState(
    paymentMethod || 'PayPal'
  )

  const submitHandler = (e) => {
    e.preventDefault()
    ctxDispatch({ type: 'SAVE_PAYMENT_METHOD', payload: paymentMethodName })
    localStorage.setItem('paymentMethod', paymentMethodName)
    checkUser()
    if (auth.user) {
      return navigate('/commander')
    }
    navigate('/connexion')
  }

  return (
    <>
      <StoreHeader />
      <ContentContainer>
        <ExpeditionHeader>
          <h2>Mode de paiement</h2>
        </ExpeditionHeader>
        <ExpeditionForm onSubmit={submitHandler}>
          <PaymentCheckBox>
            PayPal
            <ExpeditionFormRadio
              type='radio'
              id='PayPal'
              label='PayPal'
              value='PayPal'
              checked={paymentMethodName === 'PayPal'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </PaymentCheckBox>
          <PaymentCheckBox>
            Stripe
            <ExpeditionFormRadio
              type='radio'
              id='Stripe'
              label='Stripe'
              value='Stripe'
              checked={paymentMethodName === 'Stripe'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </PaymentCheckBox>
          <ExpeditionFormButton type='submit'>Continuer</ExpeditionFormButton>
        </ExpeditionForm>
      </ContentContainer>
      <StoreFooter />
    </>
  )
}
