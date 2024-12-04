import React from 'react'
import { useNavigate } from 'react-router-dom'


import {
  LoginVideoContainer,
  LoginVideo,
  Overlay,
  LoginHeader,
  VsLogo,
  LoginSubtitle,
  LoginContainer,
  LoginContentContainer,
} from './style'

import Form from './components/Form'

const SinginVideo = '/assets/video/video.mp4'
const Vslogo = '/assets/img/vs_logo.png'

const Login = () => {
  return (
    <LoginVideoContainer>
      <Video />
      <Content />
    </LoginVideoContainer>
  )
}

const Video = () => {
  return (
    <>
      <Overlay></Overlay>
      <LoginVideo src={SinginVideo} autoPlay loop muted />
    </>
  )
}


const Content = () => {
  return (
    <LoginContainer>
      <LoginContentContainer>
        <Title />
        <Form />
      </LoginContentContainer>
    </LoginContainer>
  )
}

const Title = () => {
  const navigate = useNavigate()
  return (
    <LoginHeader
      onClick={() => navigate('/')}
      style={{ cursor: 'pointer' }}
    >
      <VsLogo src={Vslogo} title='VinyleStore Logo' alt='VinylStore Logo' />
      <LoginSubtitle>Bienvenue a la maison du vinyle</LoginSubtitle>
    </LoginHeader>
  )
}


export default Login
