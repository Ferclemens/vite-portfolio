import React from 'react'

function Footer() {
    //Security -> rel="noopener noreferrer"
    //The newly open site (target="_blank") gains limited access to your page via the JavaScript window.opener object. This is a read/write object that any can manipulate. It has a property called window.opener.location that can be changed, causing the browser to go to a new URL instead of staying at your page. 
  return (
    <div>
        <div>
            <link href='#' rel="noopener noreferrer" target="_blank">github</link>
            <link href='#' rel="noopener noreferrer" target="_blank"></link>
            <link href='#' rel="noopener noreferrer" target="_blank"></link>
        </div>
    </div>
  )
}

export default Footer