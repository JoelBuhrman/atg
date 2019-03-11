const { formatName } = require('./formatName')

const testCases = [
  {
    input: 'STL Klass I, Försök 7 i Meeting 2 (Final Solvalla 30 mars 2019)',
    expectedOutput: 'STL Klass I'
  },
  {
    input: 'Stolopp',
    expectedOutput: 'Stolopp'
  },
  {
    input:
      'STL Gulddivisionen, Försök 6 i Meeting 2 (Final Solvalla 30 mars 2019)',
    expectedOutput: 'STL Gulddivisionen'
  },
  {
    input: undefined,
    expectedOutput: ''
  }
]

describe('formatName', () => {
  it('should format the name correctly', () => {
    testCases.map(({ input, expectedOutput }) =>
      expect(formatName(input)).toBe(expectedOutput)
    )
  })
})
