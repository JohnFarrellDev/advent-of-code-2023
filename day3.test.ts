import { solution1, solution2 } from './day3'

const input = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`

describe('day 3', () => {
  test('solution 1', () => {
    expect(solution1(input)).toBe(4361)
  })

  test('solution 2', () => {
    expect(solution2(input)).toBe(467835)
  })
})
