import { solution1, solution1B, solution2 } from './day11'

const input = `...#......
.......#..
#.........
..........
......#...
.#........
.........#
..........
.......#..
#...#.....`

describe('day 11', () => {
  test('solution 1 a', () => {
    expect(solution1(input)).toBe(374)
  })

  test('solution 1 b', () => {
    expect(solution1B(input)).toBe(374)
  })

  test('solution 2', () => {
    expect(solution2(input)).toBe(82000210)
  })
})
