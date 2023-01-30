import React from 'react'
import { Copyright } from '../style'

export const StoreFooter = () => {
  const currentYear = new Date().getFullYear()
  return (
    <Copyright>
      <p>© {currentYear} VinylSore All Rights Reserved </p>
    </Copyright>
  )
}

