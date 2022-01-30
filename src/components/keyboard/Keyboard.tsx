import { KeyValue } from '../../lib/keyboard'
import { getStatuses } from '../../lib/statuses'
import { Key } from './Key'
import { useEffect } from 'react'
import { ENTER_TEXT, DELETE_TEXT } from '../../constants/strings'

type Props = {
  onChar: (value: KeyValue) => void
  onDelete: () => void
  onEnter: () => void
  guesses: string[]
}

export const Keyboard = ({ onChar, onDelete, onEnter, guesses }: Props) => {
  const charStatuses = getStatuses(guesses)

  const onClick = (value: KeyValue) => {
    if (value === 'ENTER') {
      onEnter()
    } else if (value === 'DELETE') {
      onDelete()
    } else {
      onChar(value)
    }
  }

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        onEnter()
      } else if (e.code === 'Backspace') {
        onDelete()
      } else {
        const key = e.key.toUpperCase()
        if (
          key.length === 1 &&
          ((key >= 'A' && key <= 'F') || (key >= '0' && key <= '9'))
        ) {
          onChar(key as KeyValue)
        }
      }
    }
    window.addEventListener('keyup', listener)
    return () => {
      window.removeEventListener('keyup', listener)
    }
  }, [onEnter, onDelete, onChar])

  return (
    <div>
      <div className="flex justify-center mb-1">
        <Key value="0" onClick={onClick} status={charStatuses['0']} />
        <Key value="1" onClick={onClick} status={charStatuses['1']} />
        <Key value="2" onClick={onClick} status={charStatuses['2']} />
        <Key value="3" onClick={onClick} status={charStatuses['3']} />
        <Key value="4" onClick={onClick} status={charStatuses['4']} />
        <Key value="5" onClick={onClick} status={charStatuses['5']} />
        <Key value="6" onClick={onClick} status={charStatuses['6']} />
        <Key value="7" onClick={onClick} status={charStatuses['7']} />
        <Key value="8" onClick={onClick} status={charStatuses['8']} />
        <Key value="9" onClick={onClick} status={charStatuses['9']} />
      </div>
      <div className="flex justify-center">
        <Key width={65.4} value="ENTER" onClick={onClick}>
          {ENTER_TEXT}
        </Key>
        <Key value="A" onClick={onClick} status={charStatuses['A']} />
        <Key value="B" onClick={onClick} status={charStatuses['B']} />
        <Key value="C" onClick={onClick} status={charStatuses['C']} />
        <Key value="D" onClick={onClick} status={charStatuses['D']} />
        <Key value="E" onClick={onClick} status={charStatuses['E']} />
        <Key value="F" onClick={onClick} status={charStatuses['F']} />
        <Key width={65.4} value="DELETE" onClick={onClick}>
          {DELETE_TEXT}
        </Key>
      </div>
    </div>
  )
}
