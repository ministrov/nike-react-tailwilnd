import { useEffect } from 'react'

const ToggleButton = ({ handleToggle }) => {
  useEffect(() => {

    handleToggle ? console.log('clicked') : console.log('not clicked');
  });

  return (
    <div id="toggleDark" onClick={handleToggle} className="ml-auto border-2 border-purple-500 rounded p-2">

    </div>
  )
}

export default ToggleButton