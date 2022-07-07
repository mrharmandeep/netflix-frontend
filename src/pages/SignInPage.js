import React from 'react'
import HeaderWrapper from '../components/dumb/header/HeaderWrapper/HeaderWrapper';
import NavBar from '../components/dumb/header/NavBar/Navbar';
import Logo from '../components/dumb/header/Logo/Logo';
import SignInComponent from '../components/smart/SignInComponent/SignInComponent';
import FooterComponent from '../components/dumb/footer/footerComponent/FooterComponent';
function SignInPage() {
    return (
    <>
    <HeaderWrapper>
        <NavBar className='navbar-home'>
            <Logo/>
        </NavBar>
        <SignInComponent/>
    </HeaderWrapper>
    <FooterComponent/>
    </>

  )
}

export default SignInPage