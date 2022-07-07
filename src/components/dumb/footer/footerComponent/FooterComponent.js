import React from 'react';
import './FooterComponent.css';
import FooterLink from '../footerLink/FooterLink';

function FooterComponent() {
    return (
        <div className='footer-section'>
            <div className='footer-wrapper'>
                <div className='footer-text'>Questions? Call 000-800-040-1843</div>
                <div className='footer-wrapper-grid'>
                    <div className='footer-column'>
                        <FooterLink>FAQ</FooterLink>
                        <FooterLink>Investor Relation</FooterLink>
                        <FooterLink>Privacy</FooterLink>
                        <FooterLink>Speed Test</FooterLink>
                    </div>
                    <div className='footer-column'>
                        <FooterLink>Help Center</FooterLink>
                        <FooterLink>Jobs</FooterLink>
                        <FooterLink>Cookie Preferences</FooterLink>
                        <FooterLink>Legal Notices</FooterLink>
                    </div>
                    <div className='footer-column'>
                        <FooterLink>Accounts</FooterLink>
                        <FooterLink>Ways To Watch</FooterLink>
                        <FooterLink>Corporate Information</FooterLink>
                        <FooterLink>Only On Netflix</FooterLink>
                    </div>
                    <div className='footer-column'>
                        <FooterLink>Media Center</FooterLink>
                        <FooterLink>Terms Of Use</FooterLink>
                        <FooterLink>Contact Us</FooterLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterComponent