import { formatDate } from './formatDate'

describe('formatDate', () => {
  const input = '2019-03-16T16:20:00'
  const expectedOutput = '2019-03-16 16:20'
  it('should format the date correctly', () => {
    expect(formatDate(input)).toBe(expectedOutput)
  })
})
