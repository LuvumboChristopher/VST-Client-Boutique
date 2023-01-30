import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartItem } from './components/CartItem'
import { round2 } from '../Order/Order'
import { CartContentContainer, ItemResume, PaimentButton, Panierwrapper, TotalToPay, Totalwrapper } from './style'
import useAuth from '../../../../hooks/useAuth'
import StoreHeader from '../../components/StoreHeader'
import { StoreFooter } from '../../components/StoreFooter'
import { StoreContext } from '../../../../context/StoreProvider'
import { StoreContainer } from '../../style'


export default function CartScreen() {
  const { auth } = useAuth()
  const navigate = useNavigate()
  const { state, dispatch: ctxDispatch } = useContext(StoreContext)
  const {
    cart: { cartItems },
  } = state

  const updateCartHandler = (item, quantity) => {
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    })
  }

  const removeItemHandler = (item) => {
    ctxDispatch({ type: 'CART_REMOVE_ITEM', payload: item })
  }

  const checkoutHandler = () => {
    navigate('/connexion?redirect=/expedition')
  }

  return (
    <>
      <StoreContainer>
        <StoreHeader />
        <CartContentContainer>
          <Panierwrapper>
            {cartItems.length === 0 ? (
              <div></div>
            ) : (
              <CartItem
                cartItems={cartItems}
                removeItemHandler={removeItemHandler}
                updateCartHandler={updateCartHandler}
              />
            )}
          </Panierwrapper>
          <Totalwrapper>
            <TotalToPay>
              <h1>Panier</h1>
            </TotalToPay>
            <div style={{ width: '100%', margin: 'auto', backgroundColor: 'black', height: '1px' }} />
            {cartItems.map((item) => (
              <div key={item._id}>
                <div>
                  <ItemResume>
                    {item.title} x{item.quantity}
                    <p>{round2(item.price * item.quantity)} €</p>
                  </ItemResume>
                </div>
              </div>
            ))}
            {cartItems.length > 0 && (
              <div style={{ backgroundColor: 'black', height: '1px' }} />
            )}
            <TotalToPay>
              <div>
                <h1>Total</h1>
                <p>({cartItems.reduce((a, c) => a + c.quantity, 0)} Vinyls)</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <h2>
                  {cartItems.reduce(
                    (a, c) => round2(a + c.price * c.quantity),
                    0
                  )}{' '}
                  €
                </h2>
              </div>
            </TotalToPay>
            <PaimentButton
              type='button'
              onClick={checkoutHandler}
              disabled={cartItems.length === 0}
            >
              Procéder au paiement
            </PaimentButton>
          </Totalwrapper>
        </CartContentContainer>
        <StoreFooter />
      </StoreContainer>
    </>
  )
}
