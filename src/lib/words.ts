const letters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]

function generateWord(array: string[]) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array.slice(0, 6).join("")
}

export const isWordInWordList = (word: string) => {
  let flag: boolean = true
  for (const c of word) {
    if (!letters.includes(c)) {
      flag = false
      break
    }
  }
  return flag
}

export const isWinningWord = (word: string) => {
  return solution === word
}

export const getWordOfDay = () => {
  
  // January 1, 2022 Game Epoch
  const epochMs = new Date('January 1, 2022 00:00:00').valueOf()
  const now = Date.now()
  const msInDay = 86400000
  const index = Math.floor((now - epochMs) / msInDay)
  const nextday = (index + 1) * msInDay + epochMs

  const solution = generateWord(letters)

  return {
    solution: solution.toUpperCase(),
    solutionIndex: index,
    tomorrow: nextday,
  }
}

export const { solution, solutionIndex, tomorrow } = getWordOfDay()
