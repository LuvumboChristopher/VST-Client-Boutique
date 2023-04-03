import React, { useState, useEffect } from 'react'
import { Vinyl } from './Vinyl'
import axios from 'axios'

import { VinylListContainer, ListWrapper, VinylList, SearchResultContainer } from '../../style.js'

const VinylsList = ({ search, handleAddToCart }) => {

  const [products , setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error , setError] = useState('');

  useEffect(() => {
    const fecthproducts = async () => {
      try {
        const url = '/api/v1/products'
        const { data } = await axios.get(url)
        setProducts(data);
        setIsLoading(false)
      } catch (err) {
        setError('Erreur de serveur, réessayez plus tard')
        setIsLoading(false);
      }
    }
    fecthproducts()
  }, [])

  return (
    <>
      <>
        {isLoading ? (
          <SearchResultContainer>
            <p style={{ margin: "1.5rem auto" }}> En cours de chargement...</p>
          </SearchResultContainer>
        ) : error ? (
          <SearchResultContainer>
            <p style={{ margin: "1.5rem auto" }}>{error}</p>
          </SearchResultContainer>
        ) : (
          <VinylList>
            {products.map((vinyl) => {
              return (
                <Vinyl
                  key={vinyl._id}
                  {...vinyl}
                  handleAddToCart={handleAddToCart}
                ></Vinyl>
              );
            })}
          </VinylList>
        )}
      </>
    </>
  );
}

export default VinylsList 
