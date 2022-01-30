import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the color code in 6 tries. After each guess, the color of the tiles
        will change to show how close your guess was to the color code.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="3" status="correct" />
        <Cell value="2" />
        <Cell value="F" />
        <Cell value="A" />
        <Cell value="4" />
        <Cell value="5" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The value 3 is in the color code and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="E" />
        <Cell value="B" />
        <Cell value="F" status="present" />
        <Cell value="A" />
        <Cell value="3" />
        <Cell value="1" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The value F is in the color code but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="3" />
        <Cell value="0" />
        <Cell value="C" />
        <Cell value="B" status="absent" />
        <Cell value="7" />
        <Cell value="9" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The value B is not in the color code in any spot.
      </p>
      <br></br>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Each hexadecimal value will only be used once.
      </p>
    </BaseModal>
  )
}
