import React from 'react'
import HeaderWrapper from '../components/dumb/header/HeaderWrapper/HeaderWrapper';
import NavBar from '../components/dumb/header/NavBar/Navbar';
import Logo from '../components/dumb/header/Logo/Logo';
import SignupComponent from '../components/smart/SignupComponent/SignupComponent';
import FooterComponent from '../components/dumb/footer/footerComponent/FooterComponent';
function SignupPage() {
    return (
    <>
    <HeaderWrapper>
        <NavBar className='navbar-home'>
            <Logo/>
        </NavBar>
        <SignupComponent/>
    </HeaderWrapper>
    <FooterComponent/>
    </>

  )
}

export default SignupPage