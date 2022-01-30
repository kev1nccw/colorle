import { WORDS } from '../constants/wordlist'

const letters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]

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
  
  // January 30, 2022 Game Epoch
  const epochMs = new Date('January 30, 2022 00:00:00').valueOf()
  const now = Date.now()
  const msInDay = 86400000
  const index = Math.floor((now - epochMs) / msInDay)
  const nextday = (index + 1) * msInDay + epochMs

  const solution = WORDS[index % WORDS.length].toUpperCase()

  return {
    solution: solution,
    solutionIndex: index,
    tomorrow: nextday,
  }
}

export const { solution, solutionIndex, tomorrow } = getWordOfDay()
