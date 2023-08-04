import React from 'react'

const Header = () => {
  return (
    <header>
      <div id='header'>
        <div><h1>News API</h1></div>
        <div>
          <a href="#"><p><span className='bold'>Home</span></p></a>
          <a href="#/about"><p><span className='bold'>About</span></p></a>
        </div>
      </div>
    </header>
  )
}

export default Header
