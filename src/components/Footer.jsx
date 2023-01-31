import React from 'react'

function Footer() {
    //Security -> rel="noopener noreferrer"
    //The newly open site (target="_blank") gains limited access to your page via the JavaScript window.opener object. This is a read/write object that any can manipulate. It has a property called window.opener.location that can be changed, causing the browser to go to a new URL instead of staying at your page. 
  return (
    <div>
        <div>
            <a href='https://github.com/Ferclemens' rel="noopener noreferrer" target="_blank">gitHub</a>
            <a href='https://www.linkedin.com/in/foclemens/' rel="noopener noreferrer" target="_blank">LinkedIn</a>
        </div>
    </div>
  )
}

export default Footer