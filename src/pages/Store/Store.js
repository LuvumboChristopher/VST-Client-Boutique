import React, { useState } from 'react'
import VinylsList from './screens/Vinylist/VinylsList'
import { ContentContainer, StoreContainer } from './style.js'
import { Search } from './screens/Search/Search'
import { StoreFooter } from './components/StoreFooter'
import StoreHeader from './components/StoreHeader'

const Store = () => {
  const [searchTerm, setSerchTerm] = useState('')

  const search = (data) => {
    const keys = ['title', 'author', 'description']
    return Object.values(data).filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(searchTerm))
    )
  }

  return (
    <StoreContainer>
      <StoreHeader />
      <ContentContainer>
        <Search setSerchTerm={setSerchTerm} />
        <VinylsList search={search} />
      </ContentContainer>
      <StoreFooter />
    </StoreContainer>
  )
}

export default Store
