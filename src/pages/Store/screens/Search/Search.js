import React from 'react'
import { IoSearch } from 'react-icons/io5'
import { SearchInput, SearchWrapper } from '../../style'

export const Input = ({ setSerchTerm }) => {
  return (
    <>
      <SearchInput
        type='text'
        name='search'
        id='search'
        placeholder='chercher'
        onChange={(e) => setSerchTerm(e.target.value.toLowerCase())}
      />
      <IoSearch style={{ fontSize: "1.3rem" }}/>
    </>
  )
}

export const Search = ({ setSerchTerm }) => {
  return (
      <SearchWrapper>
        <Input setSerchTerm={setSerchTerm} />
      </SearchWrapper>
  )
}