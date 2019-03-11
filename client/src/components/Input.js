import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

const Button = styled.input``

const StyledInput = styled.input`
  width: 100%;
  height: 200px;
`

const Input = ({ fetchGames }) => (
  <Container>
    <StyledInput
      type='search'
      placeholder='Enter one of game types V75, V65, V64, V4'
    />
    <Button type='submit' value='Search' onClick={fetchGames} />
  </Container>
)

export default Input
