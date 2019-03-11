import React from 'react'
import styled from '@emotion/styled'

const Form = styled.form`
  display: flex;
  flex-direction: row;
`

const Button = styled.input``

const Input = styled.input`
  width: 100%;
  height: 200px;
`

export default () => (
  <Form>
    <Input
      type='search'
      placeholder='Enter one of game types V75, V65, V64, V4'
    />
    <Button type='submit' value='Search' />
  </Form>
)
