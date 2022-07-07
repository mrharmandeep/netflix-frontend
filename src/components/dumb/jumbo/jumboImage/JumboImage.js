import React from 'react';
import './JumboImage.css';

function JumboImage({...restProps}) {
  return (
    <img className='jumbo-image' alt='' {...restProps}/>
  )
}

export default JumboImage