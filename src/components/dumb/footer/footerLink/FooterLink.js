import React from 'react';
import './FooterLink.css';

function FooterLink({children}, ...restProps) {
  return (
    <a className='footer-link' {...restProps}>
        {children}
    </a>
  )
}

export default FooterLink