import React from 'react'
import styled from '@emotion/styled'
import StartsInformation from './StartsInformation'
import { formatDate, formatName } from '../utils'

const Header = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  align-items: center;
  background-image: linear-gradient(rgb(2, 102, 176) 0%, rgb(9, 66, 143) 100%);
`

const RaceInfo = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px 10px;
  font-size: 12px;
`

const Container = styled.div`
  background: #f5f5f2;
  margin-top: 20px;
  padding-bottom: 5px;
`

export default ({ gameInformation, gameType }) =>
  gameInformation.map(game => (
    <Container key={game.id}>
      <Header>{gameType}</Header>
      <RaceInfo>
        RACE {game.number}, {formatName(game.name)},{' '}
        {formatDate(game.startTime)}
      </RaceInfo>
      <StartsInformation starts={game.starts} />
    </Container>
  ))
