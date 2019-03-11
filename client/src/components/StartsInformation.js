import React, { Fragment } from 'react'
import styled from '@emotion/styled'

const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
`

const FlexItem = styled.div`
  flex: 1;
  color: gray;
  padding: 0px 5px;
`

const ExpandedItem = styled.div`
  color: gray;
  font-weight: bold;
  font-size: 10px;
  margin-left: 34%;
`

const Number = styled.div`
  border-radius: 50%;
  width: 23px;
  height: 23px;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
    rgb(255, 255, 255) 0%,
    rgb(219, 228, 239) 100%
  );
  align-items: center;
  color: #004da1;
  font-weight: bold;
`

const ListItem = styled.li`
  padding: 5px;
`

const Container = styled.div`
  background: #fff;
  margin: 10px;
  border: 1px solid gray;
`

export default class StartsInformation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded: []
    }
  }

  isExpanded = number => this.state.expanded.includes(number)

  getIndex = number => this.state.expanded.indexOf(number)

  toggleExpand = number =>
    !this.isExpanded(number)
      ? this.setState({ expanded: [...this.state.expanded, number] })
      : this.setState(
          this.state.expanded.splice(this.getIndex(number), 1).slice()
        )

  render() {
    const { starts } = this.props
    return (
      <Container>
        <ul>
          {starts.map((start, index) => (
            <ListItem>
              <Fragment key={start.horse.name}>
                <FlexBox onClick={() => this.toggleExpand(start.number)}>
                  <FlexItem>
                    <Number>{start.number}</Number>
                  </FlexItem>
                  <FlexItem>{start.horse.name}</FlexItem>
                  <FlexItem>
                    {start.driver.firstName} {start.driver.lastName}
                  </FlexItem>
                </FlexBox>
                {this.isExpanded(start.number) && (
                  <ExpandedItem>
                    Trainer:
                    {start.horse.trainer.firstName}{' '}
                    {start.horse.trainer.lastName}, Father:
                    {start.horse.pedigree.father.name}
                  </ExpandedItem>
                )}
              </Fragment>
            </ListItem>
          ))}
        </ul>
      </Container>
    )
  }
}
