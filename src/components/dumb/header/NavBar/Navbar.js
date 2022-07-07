import React from 'react';
import './NavBar.css';
function Navbar({children, ...restProps}) {
  return (
    <div>
        <nav {...restProps}>
            {children}
        </nav>
    </div>

  )
} 

export default Navbar