import React from 'react'
import './BoxDetails.css'


const BoxDetails = () => {
  return (
    <div>
      <form>
      <label>
    number of Boxes:
    <input type="Number" id="input-search" name="name" placeholder='Number of Boxes' />
  </label>
  <input type="Submit"  id ="search-btn" value="Submit" />
</form>
    </div>
  )
}

export default BoxDetails
