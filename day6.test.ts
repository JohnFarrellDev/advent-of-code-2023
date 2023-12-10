import { solution1, solution2 } from './day6'

const exampleInput = `Time:      7  15   30
Distance:  9  40  200`

describe('day 6', () => {
  test('solution 1', () => {
    const result = solution1(exampleInput)

    expect(result).toBe(288)
  })

  test('solution 2', () => {
    const result = solution2(exampleInput)

    expect(result).toBe(71503)
  })
})
