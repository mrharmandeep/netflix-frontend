import React from 'react';
import './FeatureTitle.css';

function FeatureTitle({children, ...restProps}) {
  return (
    <>
    <h1 {...restProps}>
         {children}
    </h1>
    <h3 className='txt1'>Watch anywhere. Cancel anytime.</h3>
    <h4 className='txt2'>Ready to watch? Enter your email to create or restart your membership.</h4>
    </>
  )
}

export default FeatureTitle