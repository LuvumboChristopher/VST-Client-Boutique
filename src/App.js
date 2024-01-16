import React, { useEffect } from 'react'
import './css/style.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import useAuth from './hooks/useAuth'
import {ScrollToTop} from './pages/Store/components/ScrollToTop'

import Singup from './pages/Signup/Singup'
import Login from './pages/Login/Login'
import Store from './pages/Store/Store'
import Cart from './pages/Store/pages/Cart/Cart'
import Product from './pages/Store/pages/Product/Product'
import Shipping from './pages/Store/pages/Shipping/Shipping'
import RequireAuth from './utils/RequireAuth'
import Payment from './pages/Store/pages/Payment/Payment'
import Order from './pages/Store/pages/Order/Order'
import Commande from './pages/Store/pages/Commande/Commande'
import UserProfile from './pages/Store/pages/UserProfile/UserProfile'
import Historique  from './pages/Store/pages/Historique/Historique'


function App() {

  const { auth, checkUser } = useAuth()
  const location = useLocation()

  useEffect(() => {
    checkUser()
  }, [checkUser, auth.user, location])

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Store />} />
        <Route path='/inscription' element={<Singup />} />
        <Route path='/connexion' element={<Login />} />
        <Route path='/panier' element={<Cart />} />
        <Route path='/products/:id' element={<Product />} />

        <Route
          path='/expedition'
          element={
            <RequireAuth>
              <Shipping />
            </RequireAuth>
          }
        />
        <Route
          path='/paiement'
          element={
            <RequireAuth>
              <Payment />
            </RequireAuth>
          }
        />
        <Route
          path='/commander'
          element={
            <RequireAuth>
              <Order />
            </RequireAuth>
          }
        />
        <Route
          path='/commande/:id'
          element={
            <RequireAuth>
              <Commande />
            </RequireAuth>
          }
        />
        <Route
          path='/profil'
          element={
            <RequireAuth>
              <UserProfile />
            </RequireAuth>
          }
        />
        <Route
          path='/historique'
          element={
            <RequireAuth>
              <Historique />
            </RequireAuth>
          }
        />
      </Routes>
    </>
  )
}

export default App
