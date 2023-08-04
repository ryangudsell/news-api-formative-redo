import React from 'react'

const About = () => {
  return (
    <div id="about">
        <h1><span className='big-text'>About the Developer:</span>
        <br/>Ryan Gudsell</h1>
        <div className='about-image'>
          <img src="public/images/developer.jpg" alt="Photo of the developer, Ryan Gudsell" />
        </div>
        <div className='about-details'>
          <p>I am a student web designer/developer working to become a full-time Full Stack Developer.</p>
          <h3>Previous Experience</h3>
          <ul>
            <li><p>5 Years of High School Web Design</p></li>
            <li><p>5 Years of High School App Development</p></li>
            <li><p>1 year of Tertiary Level Web and Graphic Development</p></li>
            <li><p>6 Months of Tertiary Level Web and UX Development</p></li>
          </ul>
          <br/>
          <p>Email: <a href="#">ryangudsell@ryangudsell.com</a></p>
          <p>Ph No: <a href="#">000 0000 0000</a></p>
        </div>
    </div>
  )
}

export default About
