import React, { useEffect, useReducer } from 'react'
import { Vinyl } from './Vinyl'
import axios from 'axios'

import { VinylListContainer, ListWrapper, VinylList, SearchResultContainer } from '../../style.js'

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'FETCH_REQUEST':
//       return { ...state, loading: true }
//     case 'FETCH_SUCCESS':
//       return { ...state, products: action.payload, loading: false }
//     case 'FETCH_FAIL':
//       return { ...state, error: action.payload, loading: false }
//     default:
//       return state
//   }
// }

let userList = [
  {
    id: "e34fd5",
    name: "John Smith",
    email: "john@smithindustries.com",
    image: "john-smith.jpg",
  },
  {
    id: "f43gn2",
    name: "Jane Smith",
    email: "jane@smithindustries.com",
    image: "jane-smith.jpg",
  },
];

const VinylsList = ({ search, handleAddToCart }) => {
  // const [{ loading, error, products }, dispatch] = useReducer(reducer, {
  //   products: [],
  //   loading: true,
  //   error: '',
  // })

  // useEffect(() => {
  //   const fecthproducts = async () => {
  //     dispatch({ type: 'FETCH_REQUEST' })
  //     try {
  //       const url = '/api/v1/products'
  //       const { data } = await axios.get(url)
  //       dispatch({ type: 'FETCH_SUCCESS', payload: data })
  //     } catch (err) {
  //       const error = 'Erreur de serveur, réessayez plus tard'
  //       dispatch({ type: 'FETCH_FAIL', payload: error })
  //     }
  //   }
  //   fecthproducts()
  // }, [])

  // return (
  //   <>
  //     <>
  //       {loading ? (
  //         <SearchResultContainer>
  //           <p style={{ margin: "1.5rem auto" }}> En cours de chargement...</p>
  //         </SearchResultContainer>
  //       ) : error ? (
  //         <SearchResultContainer>
  //           <p style={{ margin: "1.5rem auto" }}>{error}</p>
  //         </SearchResultContainer>
  //       ) : (
  //         <VinylList>
  //           {/* {products.map((vinyl) => {
  //             return (
  //               <Vinyl
  //                 key={vinyl._id}
  //                 {...vinyl}
  //                 handleAddToCart={handleAddToCart}
  //               ></Vinyl>
  //             );
  //           })} */}
  //           {userList.map((user, i) => {
  //             return (
  //               <div key={i} className="user-card">
  //                 <h2>{user.name}</h2>
  //                 <p>{user.email}</p>
  //               </div>
  //             );
  //           })}
  //         </VinylList>
  //       )}
  //     </>
  //   </>
  // );
  return (
    <VinylList>
      {userList.map((user, i) => {
        return (
          <div key={i} className="user-card">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        );
      })}
    </VinylList>
  );
}

export default VinylsList 
