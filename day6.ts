const input = `Time:        44     70     70     80
Distance:   283   1134   1134   1491`

const exampleInput = `Time:      7  15   30
Distance:  9  40  200`

type ParsedInput = { time: number; distance: number }[]

function parseInput1(input: string): ParsedInput {
  const [timeLine, distanceLine] = input.split('\n')
  const times = timeLine
    .split(':')[1]
    .trim()
    .split(' ')
    .filter((x) => x !== '')
    .map(Number)

  const distances = distanceLine
    .split(':')[1]
    .trim()
    .split(' ')
    .filter((x) => x !== '')
    .map(Number)

  const timeAndDistance: { time: number; distance: number }[] = []

  for (let i = 0; i < times.length; i++) {
    timeAndDistance.push({ time: times[i], distance: distances[i] })
  }

  return timeAndDistance
}

function parseInput2(input: string): { time: number; distance: number } {
  const [timeLine, distanceLine] = input.split('\n')

  return {
    time: Number(
      timeLine
        .split(':')[1]
        .trim()
        .split(' ')
        .filter((x) => x !== '')
        .reduce((acc, curr) => acc + curr, ''),
    ),
    distance: Number(
      distanceLine
        .split(':')[1]
        .trim()
        .split(' ')
        .filter((x) => x !== '')
        .reduce((acc, curr) => acc + curr, ''),
    ),
  }
}

export function solution1(input: string) {
  const parsedInput = parseInput1(input)

  console.time('solution 1')
  const waysToWinPerRound: number[] = []

  for (const { time, distance } of parsedInput) {
    let timesWon = 0
    for (let timeHeld = 0; timeHeld <= time; timeHeld++) {
      const speed = timeHeld
      const timeLeft = time - timeHeld
      const distanceTravelled = speed * timeLeft
      if (distanceTravelled > distance) timesWon++
    }
    waysToWinPerRound.push(timesWon)
  }

  console.timeEnd('solution 1')
  return waysToWinPerRound.reduce((acc, curr) => curr * acc, 1)
}

// 60ms
export function solution2FullLoop(input: string): number {
  const parsedInput = parseInput2(input)
  const { time, distance } = parsedInput

  console.time('solution 2 full loop')
  let timesWon = 0

  for (let timeHeld = 0; timeHeld <= time; timeHeld++) {
    const speed = timeHeld
    const timeLeft = time - timeHeld
    const distanceTravelled = speed * timeLeft
    if (distanceTravelled > distance) timesWon++
  }

  console.timeEnd('solution 2 full loop')
  return timesWon
}

// 16 ms
function solution2BreakLoopEarly(input: string): number {
  const parsedInput = parseInput2(input)
  const { time, distance } = parsedInput

  console.time('solution 2 full loop')
  let minTimeNeededForWin = 0
  let maxTimeNeededForWin = 0

  for (let timeHeld = 0; timeHeld <= time; timeHeld++) {
    const speed = timeHeld
    const timeLeft = time - timeHeld
    const distanceTravelled = speed * timeLeft
    if (distanceTravelled > distance) {
      minTimeNeededForWin = timeHeld
      break
    }
  }

  for (let timeHeld = time; timeHeld >= 0; timeHeld--) {
    const speed = timeHeld
    const timeLeft = time - timeHeld
    const distanceTravelled = speed * timeLeft
    if (distanceTravelled > distance) {
      maxTimeNeededForWin = timeHeld
      break
    }
  }

  console.timeEnd('solution 2 full loop')
  return maxTimeNeededForWin - minTimeNeededForWin + 1
}

function quadraticFormula(
  a: number,
  b: number,
  c: number,
): { lowerBound: number; upperBound: number } {
  const root1 = ((-b + Math.sqrt(b * b - 4 * a * c)) / 2) * a
  const root2 = ((-b - Math.sqrt(b * b - 4 * a * c)) / 2) * a

  return {
    lowerBound: Math.min(root1, root2),
    upperBound: Math.max(root1, root2),
  }
}

function solution2QuadarticEquation(input: string): number {
  const parsedInput = parseInput2(input)
  const { time, distance } = parsedInput

  console.time('solution 2 full loop')

  // time - 71530
  // distance - 940200

  // y = distance
  // equation is distance = speed * time
  // speed is = time held
  // time is = startingtime - time held

  // distance = TH * (time - TH)
  // 940200 = TH * (71530 - TH)
  // 940200 = 71530TH - TH^2
  // 0 = -TH^2 + 71530TH - 940200

  const { lowerBound, upperBound } = quadraticFormula(-1, time, -distance)

  console.timeEnd('solution 2 full loop')
  return Math.floor(upperBound) - Math.ceil(lowerBound) + 1
}

export const solution2 = solution2QuadarticEquation

console.log('Solution 1:', solution1(input))

console.log('Solution 2 - full loop:', solution2FullLoop(input))
console.log('Solution 2 - loop break early:', solution2BreakLoopEarly(input))
console.log(
  'Solution 2 - quadratic equation:',
  solution2QuadarticEquation(input),
)
