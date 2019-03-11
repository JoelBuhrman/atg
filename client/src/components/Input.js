import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

const Button = styled.input`
  height: 48px;
  background-image: linear-gradient(to top, rgb(24, 145, 0), rgb(20, 173, 0));
  color: #fff;
  font-size: 14px;
  test-shadow: rgba(0, 0, 0, 0.5) 0px 1px 1px;
`

const StyledInput = styled.input`
  width: 100%;
  height: 48px;
  padding: 12px 16px;
  border-radius: 2px;
  border-color: rgb(187, 203, 222);
  font-size: 16px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 2px 0px inset;
`

const Input = ({ fetchGames }) => (
  <Container>
    <StyledInput
      id='input'
      autoComplete='off'
      type='search'
      placeholder='Enter one of game types V75, V65, V64, V4'
    />
    <Button type='submit' value='SEARCH' onClick={fetchGames} />
  </Container>
)

export default Input
