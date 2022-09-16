import React, { useState } from 'react'

const Footer = () => {

  const [clicks,setClicks]= useState(0)

  const year = new Date().getFullYear();
  const companyName = 'AgushPro';

  //handle y evento que realiza
  const handleClick = () =>{
      setClicks(clicks+1)
  }

  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <span className="text-muted">&copy; {year} {companyName}, clicks={clicks}</span>
          
        </div>

        <span 
          className='col-md-4 d-flex aling-items-center justify-content mb-3 mb-md-0 me-md-auto'
          onClick={handleClick}
        
        >
          <img
            className='App-logo'
            height="52"
            src="rick.png"
            alt="rick-manioso">
          </img>
        </span>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        </ul>
      </footer>
    </div>
  )
}

export default Footer
