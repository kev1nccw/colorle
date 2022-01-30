import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Do you know a color can be expressed in (R, G, B) form using 3&nbsp;
        <a className="link" href='https://en.wikipedia.org/wiki/Hexadecimal'>hexadecimal</a> values?
        For example, #000000 represents black while #FFFFFF represents white.
        This is called the color code.
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        
      </p>
      <br></br>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        This is an open source clone of the game Wordle -{' '}
        <a
          href="https://github.com/hannahcode/wordle"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '}
        and{' '}
        <a
          href="https://www.powerlanguage.co.uk/wordle/"
          className="underline font-bold"
        >
          play the original here
        </a>
      </p>
      <br></br>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Envisaged and developed by Kevin Chan.
      </p>
    </BaseModal>
  )
}
