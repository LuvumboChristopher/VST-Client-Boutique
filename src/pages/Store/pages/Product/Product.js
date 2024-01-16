import React, { useContext, useEffect, useReducer, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { BsCartPlusFill } from 'react-icons/bs'
import { BsFillBagFill } from 'react-icons/bs'
import { BsFillHeartFill } from 'react-icons/bs'
import {
  ContentWrapper,
  Description,
  DetailsContainer,
  DetailsTitle,
  InfoContainer,
  ProductButtons,
  ProductButtonsContainer,
  ProductButtonsContent,
  ProductContentContainer,
  ProductHeader,
  ProductScreenWrapper,
  ProductVinylCover,
  ProductVinylCoverContainer,
} from './style'
import { StoreContext } from '../../../../context/StoreProvider'
import {StoreHeader} from '../../components/StoreHeader'
import { StoreFooter } from '../../components/StoreFooter'
import { StoreContainer } from '../../style'

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true }
    case 'FETCH_SUCCESS':
      return { ...state, product: action.payload, loading: false }
    case 'FETCH_FAIL':
      return { ...state, error: action.payload, loading: false }
    default:
      return state
  }
}

const Product = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [display, setDisplay] = useState({
    details: true,
    retours: true,
    livraison: true,
  })

  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: {},
    loading: true,
    error: '',
  })

  useEffect(() => {
    const fecthproducts = async () => {
      dispatch({ type: 'FETCH_REQUEST' })
      try {
        const url = `https://vst-server.vercel.app/api/v1/products/${id}`
        const { data } = await axios.get(url)
        dispatch({ type: 'FETCH_SUCCESS', payload: data })
      } catch (err) {
        const error = 'Erreur de serveur, réessayez plus tard'
        dispatch({ type: 'FETCH_FAIL', payload: error })
      }
    }
    fecthproducts()
  }, [id])

  const { state, dispatch: ctxDispatch } = useContext(StoreContext)
  const { cart } = state

  const handleAddToCartAndNavigate = async () => {
    const existItem = cart.cartItems.find(
      (element) => element._id === product._id
    )
    const quantity = existItem ? existItem.quantity + 1 : 1
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...product, quantity },
    })
    navigate('/panier')
  }

  const handleAddToCart = async () => {
    const existItem = cart.cartItems.find(
      (element) => element._id === product._id
    )
    const quantity = existItem ? existItem.quantity + 1 : 1
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...product, quantity },
    })
  }

  return (
    <StoreContainer>
      <StoreHeader/>
      <ProductContentContainer>
          <ProductScreenWrapper>
            {loading ? (
              <div style={{ textAlign: "center" }}>
                <p> En cours de chargement...</p>
              </div>
            ) : error ? (
              <div style={{ textAlign: "center" }}>
                <p>{error}</p>
              </div>
            ) : (
              product && (
                <>
                  <ProductVinylCoverContainer>
                    <ProductVinylCover src={product.img} alt={product.title} />
                  </ProductVinylCoverContainer>
                  <InfoContainer>
                    <ContentWrapper>
                      <div>
                        <ProductHeader>
                          <div>
                            <h2>{product.title}</h2>
                            <h4>{product.author}</h4>
                            <h4>{product.year}</h4>
                          </div>
                          <h3>{product.price}€</h3>
                        </ProductHeader>
                        <ProductButtonsContainer>
                          <ProductButtonsContent>
                            <ProductButtons onClick={handleAddToCart}>
                              <BsCartPlusFill style={{ fontSize: "1.5rem" }} />
                              Ajouter au panier
                            </ProductButtons>
                            <ProductButtons
                              onClick={handleAddToCartAndNavigate}
                            >
                              <BsFillBagFill style={{ fontSize: "1.5rem" }} />
                              Achetez maintenant{" "}
                            </ProductButtons>
                            <ProductButtons>
                              <BsFillHeartFill style={{ fontSize: "1.5rem" }} />
                              Coups de cœur
                            </ProductButtons>
                          </ProductButtonsContent>
                        </ProductButtonsContainer>
                      </div>
                      <DetailsContainer>
                        <DetailsTitle>
                          <h3>Détails du produit</h3>
                          <span
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              setDisplay({
                                ...display,
                                details: !display.details,
                              })
                            }
                          >
                            {display.details ? <h3>-</h3> : <h3>+</h3>}
                          </span>
                        </DetailsTitle>

                        {display.details && (
                          <Description>{product.description}</Description>
                        )}

                        <DetailsTitle>
                          <h3>Politique de retour et de remboursement</h3>
                          <span
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              setDisplay({
                                ...display,
                                retours: !display.retours,
                              })
                            }
                          >
                            {display.retours ? <h3>-</h3> : <h3>+</h3>}
                          </span>
                        </DetailsTitle>

                        {display.retours && (
                          <Description>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. In iaculis blandit orci, eget feugiat lorem
                            hendrerit id. Proin pulvinar, enim eu ultricies
                            efficitur, elit neque scelerisque ligula, ac
                            ultrices sapien ex sit amet sapien. Nunc accumsan
                            aliquam dignissim. Nulla eu euismod felis, quis
                            auctor dolor.
                          </Description>
                        )}
                        <DetailsTitle>
                          <h3>Info sur la livraison</h3>
                          <span
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              setDisplay({
                                ...display,
                                livraison: !display.livraison,
                              })
                            }
                          >
                            {display.livraison ? <h3>-</h3> : <h3>+</h3>}
                          </span>
                        </DetailsTitle>

                        {display.livraison && (
                          <Description>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. In iaculis blandit orci, eget feugiat lorem
                            hendrerit id. Proin pulvinar, enim eu ultricies
                            efficitur, elit neque scelerisque ligula, ac
                            ultrices sapien ex sit amet sapien. Nunc accumsan
                            aliquam dignissim. Nulla eu euismod felis, quis
                            auctor dolor.
                          </Description>
                        )}
                      </DetailsContainer>
                    </ContentWrapper>
                  </InfoContainer>
                </>
              )
            )}
          </ProductScreenWrapper>
      </ProductContentContainer>  
      <StoreFooter />
    </StoreContainer>
  );
}

export default Product
