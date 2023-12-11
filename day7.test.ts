import { solution1, solution2 } from './day7'

const input = `32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483`

describe('day 7', () => {
  test('solution 1', () => {
    expect(solution1(input)).toBe(6440)
  })

  test('solution 2', () => {
    expect(solution2(input)).toBe(5905)
  })
})
