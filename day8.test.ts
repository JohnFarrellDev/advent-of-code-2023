import { solution1, solution2 } from './day8'

const input = `LLR

AAA = (BBB, BBB)
BBB = (AAA, ZZZ)
ZZZ = (ZZZ, ZZZ)`

const input2 = `LR

11A = (11B, XXX)
11B = (XXX, 11Z)
11Z = (11B, XXX)
22A = (22B, XXX)
22B = (22C, 22C)
22C = (22Z, 22Z)
22Z = (22B, 22B)
XXX = (XXX, XXX`

describe('day 8', () => {
  test('solution 1', () => {
    expect(solution1(input)).toBe(6)
  })

  test('solution 2', () => {
    expect(solution2(input2)).toBe(6)
  })
})
