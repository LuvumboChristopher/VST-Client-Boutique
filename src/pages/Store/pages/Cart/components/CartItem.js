import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, CartItemWrapper, CartVinylCover, DeleteButton, Price, QuantityButtonWrapper, UnderLine, VinylButtonsWrapper, VinylDataWrapper, VinylInfoContainer, VinylInfoHeader, VinylInfoText, VinylWrapper } from '../style'

export const CartItem = ({
  cartItems,
  updateCartHandler,
  removeItemHandler,
}) => {
  const navigate = useNavigate()

  return (
    <>
      {cartItems.map((item, index) => (
        <div key={item._id}>
          <CartItemWrapper>
            <VinylWrapper>
              <VinylDataWrapper>
              {/*  seccion 1 */}
              <CartVinylCover
                src={item.img}
                alt={item.title}
                onClick={() => navigate(`/products/${item._id}`)}
              />
              {/*  seccion 2 */}
              <VinylInfoContainer>
                <VinylInfoHeader>
                  <div>
                    <h2
                      onClick={() => navigate(`/products/${item._id}`)}
                      style={{
                        cursor: 'pointer',
                      }}
                    >
                      {item.title}
                    </h2>
                    <h5>{item.author}</h5>
                    <h5>{item.year}</h5>
                  </div>
                  <Price>{item.price}€</Price>
                </VinylInfoHeader>
                <VinylInfoText>
                  {item.description.slice(0, 220)}
                  {item.description.length > 220 && '...'}
                </VinylInfoText>
              </VinylInfoContainer>
              </VinylDataWrapper>
              <VinylButtonsWrapper>
                {/*  seccion 3 */}
              <QuantityButtonWrapper>
                <Button
                  onClick={() => updateCartHandler(item, item.quantity - 1)}
                  disabled={item.quantity === 1}
                >
                  -
                </Button>
                <span>{item.quantity}</span>
                <Button
                  onClick={() => updateCartHandler(item, item.quantity + 1)}
                >
                  +
                </Button>
              </QuantityButtonWrapper>
              {/*  seccion 4  */}
              <DeleteButton onClick={() => removeItemHandler(item)}>
                Supprimer
              </DeleteButton>        
              </VinylButtonsWrapper>
              
            </VinylWrapper>
            {item === cartItems[cartItems.length - 1] ? '' : <UnderLine/>}
          </CartItemWrapper>
        </div>
      ))}
    </>
  )
}
