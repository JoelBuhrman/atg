import React, { Fragment } from 'react'
import styled from '@emotion/styled'

const StyledUL = styled.div`
  margin: 0px;
`

const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
`

const FlexItem = styled.div`
  flex: 1;
  color: gray;
`
const FlexItemBox = styled.div`
  flex: 1;
  color: gray;
  display: flex;
  flex-direction: row;
`

const FlexItemSmall = styled.div`
  flex: 1;
  color: gray;
  text-align: right;
  font-weight: bold;
  font-size: 10px;
`

const Divider = styled.div`
  border-bottom: 1px solid rgb(233, 233, 233);
  width: 100%;
`

const B = styled.b`
  color: black;
`

const Header = () => (
  <Fragment>
    <FlexBox>
      <FlexItem>
        <B>StartNumber</B>
      </FlexItem>
      <FlexItem>
        <B>Horse</B>
      </FlexItem>
      <FlexItem>
        <B>Driver</B>
      </FlexItem>
    </FlexBox>
    <Divider />
  </Fragment>
)

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
      <StyledUL>
        <Header />
        {starts.map(start => (
          <Fragment key={start.horse.name}>
            <FlexBox onClick={() => this.toggleExpand(start.number)}>
              <FlexItem>{start.number}</FlexItem>
              <FlexItem>{start.horse.name}</FlexItem>
              <FlexItem>
                {start.driver.firstName} {start.driver.lastName}
              </FlexItem>
            </FlexBox>
            {this.isExpanded(start.number) && (
              <FlexBox>
                <FlexItemSmall>Trainer: </FlexItemSmall>
                <FlexItemBox>
                  <FlexItem>
                    {start.horse.trainer.firstName}{' '}
                    {start.horse.trainer.lastName}
                  </FlexItem>
                  <FlexItemSmall>Father: </FlexItemSmall>
                </FlexItemBox>
                <FlexItem>{start.horse.pedigree.father.name}</FlexItem>
              </FlexBox>
            )}
          </Fragment>
        ))}
      </StyledUL>
    )
  }
}
