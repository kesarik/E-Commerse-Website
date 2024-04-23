import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Unlock exclusive perks with a simple click – subscribe now</p>
      <div>
        <input type="email" placeholder='Your email id'/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
