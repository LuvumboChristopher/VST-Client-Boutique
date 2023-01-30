import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../../../hooks/useAuth'
import { ContentContainer, StoreContainer } from '../../style'
import StoreHeader from '../../components/StoreHeader'
import { ProductScreenWrapper } from '../Product/style'
import { StoreFooter } from '../../components/StoreFooter'


const  Historique = ()=> {
  const { auth } = useAuth()
  const navigate = useNavigate()

  const [ orders, setOrders ] = useState([])
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const { data } = await axios.get(
          '/api/v1/orders',
          {
            withCredentials: true
          }
        )
        setLoading(false)
        setOrders(data)
      } catch (err) {
        setLoading(false)
        setError(err.message)
      }
    }
    fetchData()
  }, [auth.user])

  return (
    <>
        <StoreHeader />
        <ContentContainer>
          <ProductScreenWrapper>
            {loading ? (
              <div>
                <p> En cours de chargement...</p>
              </div>
            ) : error ? (
              <p>{error}</p>
            ) : orders ? (
          <table className='table'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Total</th>
                <th>Payé</th>
                <th>Livré</th>
                <th>Voir</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>{order.totalPrice.toFixed(2)}</td>
                  <td>{order.isPaid ? order.paidAt.substring(0, 10) : 'No'}</td>
                  <td>
                    {order.isDelivered
                      ? order.deliveredAt.substring(0, 10)
                      : 'No'}
                  </td>
                  <td>
                    <button
                      type='button'
                      variant='light'
                      onClick={() => {
                        navigate(`/commande/${order._id}`)
                      }}
                    >
                      Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          'Pas de Commandes'
        )}
          </ProductScreenWrapper>
        </ContentContainer>
        <StoreFooter />
    </>
  )
}

export default Historique
