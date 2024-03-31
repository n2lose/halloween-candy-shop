interface ToggleButtonProps {
  isChecked: boolean
  onToggleChange: () => void
}

const ToggleButton = ({ isChecked, onToggleChange }: ToggleButtonProps) => {
  return (
    <div className='flex items-center'>
      <input type='checkbox' id='toggle' className='hidden' checked={isChecked} onChange={onToggleChange} />
      <label
        htmlFor='toggle'
        className={`relative w-12 h-6 flex items-center cursor-pointer transition-colors ${
          isChecked ? 'bg-green-400' : 'bg-gray-300'
        } rounded-full p-1`}
      >
        <div
          className={`absolute w-4 h-4 bg-white rounded-full transition-transform ${
            isChecked ? 'transform translate-x-6' : 'transform translate-x-0'
          }`}
        />
      </label>
    </div>
  )
}

export default ToggleButton
