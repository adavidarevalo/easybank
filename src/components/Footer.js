import React from 'react'
import { Link } from "gatsby"
import logoWhite from '../images/logoWhite.svg'
import iconFacebook from '../images/iconFacebook.svg'
import iconYoutube from '../images/iconYoutube.svg'
import iconTwitter from '../images/iconTwitter.svg'
import iconPinterest from '../images/iconPinterest.svg'
import iconInstagram from '../images/iconInstagram.svg'

const Footer = () => {
    return(
        <footer>
            <div className='Container'>
                <div className='ContainerFlex'>
                    <div className='ContainerSocials'>
                        <img 
                        className='Logo'
                        src={logoWhite} alt='Logo'/>
                        <div>
                            <img src={iconFacebook} alt='Facebook'/>
                            <img src={iconYoutube} alt='Youtube'/>
                            <img src={iconTwitter} alt='Twitter'/>
                            <img src={iconPinterest} alt='Twitter'/>
                            <img src={iconInstagram} alt='Twitter'/>
                        </div>
                    </div>
                    <div className='nav'>
                        <Link>About Us</Link>
                        <Link>Contact</Link>
                        <Link>Blog</Link>
                    </div>
                    <div className='nav'>
                        <Link>Careers</Link>
                        <Link>Support</Link>
                        <Link>Privacy Policy</Link>
                    </div>
                </div>
                <div className='InviteContainer'>
                    <button className='ButtonStyle'>Request Invite</button>
                    <p>© Easybank. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer