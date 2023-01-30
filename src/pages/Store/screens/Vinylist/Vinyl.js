import React from 'react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../../../context/StoreProvider'
import { CartVinylCover, VinylInfoText } from '../../pages/Cart/style'

import {
  VinylItem,
  VinylCoverContainer,
  VinylCover,
  VinylData,
  VinylPurchase,
  VinylPurchaseButton,
  VinylDescription,
  VinylDataTitle,
  VinylInfoContainer,
} from '../../style.js'

const Vinyl = (vinyl) => {
  const { _id, title, author, img, description, year, price } = vinyl

  const { state, dispatch: ctxDispatch } = useContext(StoreContext)
  const { cart } = state
  const navigate = useNavigate()

  const handleAddToCart = async () => {
    const existItem = cart.cartItems.find(
      (element) => element._id === _id
    )
    const quantity = existItem ? existItem.quantity + 1 : 1
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...vinyl, quantity },
    })
    navigate('/panier')
  }

  return (
    <VinylItem>
      <VinylCover             
        src={img}
        alt={title}
        onClick={() => navigate(`/products/${_id}`)}
      />
      <VinylInfoContainer>
        <div>
          <div>
            <h2
              onClick={() => navigate(`/products/${_id}`)}
              style={{
                cursor: 'pointer',
              }}
            >
              {title}
            </h2>
            <h5>{author}</h5>
            <h5>{year}</h5>
          </div>
          <VinylInfoText>
            {description.slice(0, 220)}
            {description.length > 220 && '...'}
          </VinylInfoText>
        </div>
        <VinylPurchase>
          <div>
            <Link to={`/products/${_id}`}>
              <VinylPurchaseButton voir={true}>Voir</VinylPurchaseButton>
            </Link>
            <VinylPurchaseButton onClick={handleAddToCart}>
              Acheter
            </VinylPurchaseButton>
          </div>
          <h1 style={{ fontSize: '1.20rem' }}>{price} €</h1>
        </VinylPurchase>
      </VinylInfoContainer>
    </VinylItem>
  )
}

export { Vinyl }

/**
 *  <div key={_id}>  
                  <CartVinylCover
                    
                    src={img}
                    alt={title}
                    onClick={() => Navigate(`/products/${_id}`)}
                  />
                  <VinylInfoContainer>
                    <VinylInfoHeader>
                      <div>
                        <h2
                          onClick={() => Navigate(`/products/${_id}`)}
                          style={{
                            cursor: 'pointer',
                          }}
                        >
                          {title}
                        </h2>
                        <h5>{author}</h5>
                        <h5>{year}</h5>
                      </div>
                      <Price>{price}€</Price>
                    </VinylInfoHeader>
                    <VinylInfoText>
                      {description.slice(0, 220)}
                      {description.length > 220 && '...'}
                    </VinylInfoText>
                  </VinylInfoContainer>
                </div>
 */


/**
 *  <VinylItem>
      <VinylCoverContainer>
        <Link to={`/products/${_id}`}>
          <VinylCover src={img} alt='Vinyl cover' />
        </Link>
      </VinylCoverContainer>
      <VinylInfoContainer>
        <div>
          <VinylData>
            <VinylDataTitle>{title}</VinylDataTitle>
            <h5>{author}</h5>
            <h5>{year}</h5>
          </VinylData>
          <VinylDescription>
            {description.slice(0, 158)}
            {description.length > 158 && '...'}
          </VinylDescription>
        </div>
        <VinylPurchase>
          <div>
            <Link to={`/products/${_id}`}>
              <VinylPurchaseButton voir={true}>Voir</VinylPurchaseButton>
            </Link>
            <VinylPurchaseButton onClick={handleAddToCart}>
              Acheter
            </VinylPurchaseButton>
          </div>
          <h1 style={{ fontSize: '1.20rem' }}>{price} €</h1>
        </VinylPurchase>
      </VinylInfoContainer>
    </VinylItem>
 */