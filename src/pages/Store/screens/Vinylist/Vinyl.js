import React from 'react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../../../context/StoreProvider'
import { VinylInfoText } from '../../pages/Cart/style'

import {
  VinylItem,
  VinylCover,
  VinylPurchase,
  VinylPurchaseButton,
  VinylInfoContainer,
  VinylCoverContainer,
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
      <VinylCoverContainer>
        <VinylCover
          src={img}
          alt={title}
          onClick={() => navigate(`/products/${_id}`)}
        />
      </VinylCoverContainer>
      <VinylInfoContainer>
        <div>
          <div>
            <h2
              onClick={() => navigate(`/products/${_id}`)}
              style={{
                cursor: "pointer",
              }}
            >
              {title}
            </h2>
            <h5>{author}</h5>
            <h5>{year}</h5>
          </div>
          <VinylInfoText>
            {description.slice(0, 220)}
            {description.length > 220 && "..."}
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
          <h1 style={{ fontSize: "1.20rem" }}>{price} €</h1>
        </VinylPurchase>
      </VinylInfoContainer>
    </VinylItem>
  );
}

export { Vinyl }
