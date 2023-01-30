import React, { useContext, useEffect, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { StoreContext } from '../../../../context/StoreProvider'
import useAuth from '../../../../hooks/useAuth'
import StoreHeader from '../../components/StoreHeader'
import { StoreFooter } from '../../components/StoreFooter'
import { ExpeditionFormButton, ExpeditionHeader } from '../Shipping/style'
import { ItemResume, TotalToPay, Totalwrapper } from '../Cart/style'
import { ContentContainer } from '../../style'


const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_REQUEST':
      return { ...state, loading: true }
    case 'CREATE_SUCCESS':
      return { ...state, loading: false }
    case 'CREATE_FAIL':
      return { ...state, loading: false }
    default:
      return state
  }
}

export const round2 = (num) => Math.round(num * 100 + Number.EPSILON) / 100 // 123.2345 => 123.23

export default function Order() {
  const navigate = useNavigate()
  const { auth, checkUser } = useAuth()

  const [{loading, error }, dispatch] = useReducer(reducer, {
    loading: false,
    error: '',
  })

  const { state, dispatch: ctxDispatch } = useContext(StoreContext)
  const {
    cart,
    cart: { cartItems },
  } = state

  cart.itemsPrice = round2(
    cart.cartItems.reduce((a, c) => a + c.quantity * c.price, 0)
  )
  cart.shippingPrice = cart.itemsPrice > 100 ? round2(0) : round2(10)
  cart.taxPrice = round2(0.15 * cart.itemsPrice)
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice

  const placeOrderHandler = async (e) => {
    e.preventDefault()
    try {
      dispatch({ type: 'CREATE_REQUEST' })
      console.log(cart.shippingAddress)

      const { data } = await axios.post(
        '/api/v1/orders',
        {
          orderItems: cart.cartItems,
          shippingAddress: cart.shippingAddress,
          paymentMethod: cart.paymentMethod,
          itemsPrice: cart.itemsPrice,
          shippingPrice: cart.shippingPrice,
          taxPrice: cart.taxPrice,
          totalPrice: cart.totalPrice,
        },
        {
          withCredentials: true,
        }
      )
      ctxDispatch({ type: 'CART_CLEAR' })
      dispatch({ type: 'CREATE_SUCCESS' })
        
      checkUser()
      if (auth.user) {
        localStorage.removeItem('cartItems')
        return navigate(`/commande/${data.order._id}`)
      }
      navigate('/connexion')
    } catch (err) {
      dispatch({ type: 'CREATE_FAIL' })
    }
  }

  useEffect(() => {
    if (!cart.paymentMethod) {
      navigate('/paiement')
    }
  }, [cart, navigate])

  return (
    <>
      <StoreHeader />
      <ContentContainer>
        <ExpeditionHeader>
          <h2>Prévisualiser la commande</h2>
        </ExpeditionHeader>
        <section style={{ width: '100%', margin: '0', textAlign: 'center' }}>
          {/* Mi primer bloque de datos */}
          <div className='vinyls' style={{ width: '100%', margin: 'auto' }}>
            <Totalwrapper>
              <TotalToPay>
                <h2>Vinyls</h2>
              </TotalToPay>
              <hr style={{ background: 'black', height: '2px' }} />
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
            </Totalwrapper>
            <ExpeditionFormButton
              onClick={() => navigate('/panier')}
              style={{
                color: 'white',
                backgroundColor: 'black',
              }}
            >
              Modifier
            </ExpeditionFormButton>
          </div>
          {/* Mi segundo bloque de datos */}
          <div className='expedition' style={{ width: '100%', margin: 'auto' }}>
            <Totalwrapper>
              <TotalToPay>
                <h2>Adresse d'expedition</h2>
              </TotalToPay>
              <hr style={{ background: 'black', height: '2px' }} />
              <div>
                <ItemResume>
                  <p>Nom:</p>
                  {cart.shippingAddress.lastName}
                </ItemResume>
                <ItemResume>
                  <p>Prenom:</p>
                  {cart.shippingAddress.firstName}
                </ItemResume>

                <ItemResume>
                  <p>Address: </p>
                  {cart.shippingAddress.streetAddress}
                  <br />
                  {`${cart.shippingAddress.city} ${cart.shippingAddress.zipCode} ${cart.shippingAddress.country}`}
                </ItemResume>
              </div>
            </Totalwrapper>
            <ExpeditionFormButton
              onClick={() => navigate('/expedition')}
              style={{
                color: 'white',
                backgroundColor: 'black',
              }}
            >
              Modifier
            </ExpeditionFormButton>
          </div>
          {/* Mi tercer bloque de datos */}
          <div className='payment' style={{ width: '100%', margin: 'auto' }}>
            <div>
              <TotalToPay>
                <h2>Payment</h2>
              </TotalToPay>

              <hr style={{ background: 'black', height: '2px' }} />

              <ItemResume>
                <p>Method:</p> {cart.paymentMethod}
              </ItemResume>
              <ExpeditionFormButton
                onClick={() => navigate('/paiement')}
                style={{
                  color: 'white',
                  backgroundColor: 'black',
                  }}
              >
                Modifier
              </ExpeditionFormButton>
            </div>
          </div>
          {/* Mi cuarto bloque de datos */}
          <div className='summary' style={{ width: '100%', margin: 'auto' }}>
            <TotalToPay>
              <h2>Sommaire de la commande</h2>
            </TotalToPay>{' '}
            <hr style={{ background: 'black', height: '2px' }} />
            <div variant='flush'>
              <ItemResume>
                <p>Vinyls</p>x{cart.cartItems.length}
              </ItemResume>
              <ItemResume>
                <p>Montant</p>
                {cart.itemsPrice.toFixed(2)}
              </ItemResume>

              <ItemResume>
                <p>Expedition</p>
                {cart.shippingPrice.toFixed(2)}€
              </ItemResume>

              <ItemResume>
                <p>TVA </p>
                {cart.taxPrice.toFixed(2)}€
              </ItemResume>

              <ItemResume>
                <p>Total </p>
                {cart.totalPrice.toFixed(2)}€
              </ItemResume>

              <ExpeditionFormButton
                onClick={placeOrderHandler}
                disabled={cart.cartItems.length === 0}
              >
                Commander
              </ExpeditionFormButton>
            </div>
          </div>
        </section>
      </ContentContainer>
      <StoreFooter />
    </>
  )
}
