import { solution1, solution2 } from './day9'

const input = `0 3 6 9 12 15
1 3 6 10 15 21
10 13 16 21 30 45`

describe('day 9', () => {
  test('solution 1', () => {
    expect(solution1(input)).toBe(114)
  })

  test('solution 2', () => {
    expect(solution2(input)).toBe(2)
  })
})
