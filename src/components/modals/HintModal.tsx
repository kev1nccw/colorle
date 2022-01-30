import { BaseModal } from './BaseModal'
import { colorCode } from './HintHandler'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const HintModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Hint" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The color of the day is:
      </p>
      <div className="hint-block" style={{background:`${colorCode}`}}></div>
    </BaseModal>
  )
}
