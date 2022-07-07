import React from 'react';
import './SignInput.css';

function SignInput({ ...restProps}) {
  return (
    <div>
        <input className='sign-input' {...restProps}/>
    </div>
  )
}

export default SignInput