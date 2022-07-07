import React from 'react';
import './SignupComponent.css';
import SignTitle from '../../dumb/SignTitle/SignTitle';
import SignButton from '../../dumb/SignButton/SignButton';
import SignText from '../../dumb/SignText/SignText';
import SignInput from '../../dumb/SignInput/SignInput';
import SignLink from '../../dumb/SignLink/SignLink';
import SignCaptcha from '../../dumb/SignCaptcha/SignCaptcha';

function SignupComponent() {
    return (
        <div className='sign-form-wrapper'  >
            <form className='sign-form-base'>
                <SignTitle>Sign Up</SignTitle>
                <SignInput
                    type='text'
                    placeholder='Name'
                />
                <SignInput
                    type='text'
                    placeholder='Email Address'
                />
                <SignInput
                    type='password'
                    placeholder='Password'
                    autoComplete='off'
                />
                <SignButton>Sign Up</SignButton>
                <SignText>Already a user?<SignLink>Signin Now</SignLink></SignText>
                <SignCaptcha>This page is protected by Google reCAPTCHA to ensure you're not a bot.</SignCaptcha>
            </form>
        </div>
    )
}

export default SignupComponent