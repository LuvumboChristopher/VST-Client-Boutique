import React, { useContext } from 'react'
import VsLogoBlack from '../../../assets/img/vs_logo_black.png'
import { IoBagSharp } from 'react-icons/io5'
import { RiLoginCircleFill } from 'react-icons/ri'
import { BsClipboardData, BsHeartFill } from 'react-icons/bs'
import { BsDoorOpenFill } from 'react-icons/bs'
import { BsPersonCircle } from 'react-icons/bs'
import { BsFillVinylFill } from 'react-icons/bs'
import { SiHomebridge } from 'react-icons/si'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../../context/StoreProvider'
import Axios from 'axios'
import useAuth from '../../../hooks/useAuth'
import { Amount, BacktoSiteButton, CartButton, CartButtonContainer, DropDown, DropDownContent, DropDownLink, LogoStore, StoreHeaderContainer, StoreHeaderContent, StoreNavButtons, StoreNavContainer } from '../style'

const StoreHeader = () => {
  const { auth, logout } = useAuth()
  const { state } = useContext(StoreContext)
  const { cart } = state
  const navigate = useNavigate()

  const signoutHandler = async () => {
    try {
      await Axios.get('/api/v1/auth/logout', {
        withCredentials: true,
      })
      logout()
      navigate('/store')
      const refresh = () => window.location.reload(false)
      refresh()
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <StoreHeaderContainer>
      <StoreHeaderContent>
        <Link to='/store'>
        <LogoStore src={VsLogoBlack} alt='logo' />
      </Link>
      <StoreNavContainer>
        {auth.user ? (
          <DropDown>
            <StoreNavButtons to={''}>
              <BsFillVinylFill style={{ margin: 'auto', fontSize: '1.3em' }} />
            </StoreNavButtons>
            <DropDownContent>
              <DropDownLink to={''}>
                <BsPersonCircle style={{ fontSize: '1.6em' }} />
                <p>Profil</p>
              </DropDownLink>
              <DropDownLink to='/historique'>
                <BsClipboardData style={{ fontSize: '1.6em' }} />
                <p>Suivi des commandes</p>
              </DropDownLink>
              <DropDownLink to=''>
                <BsHeartFill style={{ fontSize: '1.6em' }} />
                <p>Coups de cœur</p>
              </DropDownLink>
              <DropDownLink to={''} onClick={signoutHandler}>
                <BsDoorOpenFill style={{ fontSize: '1.6em' }} />
                <p>Déconnexion</p>
              </DropDownLink>
            </DropDownContent>
          </DropDown>
        ) : (
          <StoreNavButtons
            to='/connexion'
          >
            <RiLoginCircleFill style={{ margin: 'auto', fontSize: '1.6em' }} />
          </StoreNavButtons>
        )}
        <BacktoSiteButton to='/' >
          <SiHomebridge style={{ margin: 'auto', fontSize: '1.3em' }} />
        </BacktoSiteButton>
        <CartButton to='/panier'>
          <CartButtonContainer
          >
            <IoBagSharp style={{ color: 'white', fontSize: '1.3em' }} />
            <div>
              {cart.cartItems.length > 0 ? (
                <Amount>
                  {cart.cartItems.reduce(
                    (acc, current) => acc + current.quantity,
                    0
                  )}
                </Amount>
              ) : (
                <Amount>0</Amount>
              )}
            </div>
          </CartButtonContainer>
        </CartButton>
      </StoreNavContainer>
      </StoreHeaderContent>
     
    </StoreHeaderContainer>
  )
}

export default StoreHeader