import React from 'react';
import {ReactComponent as FacebookIcon} from './../../assets/facebook-logo.svg'
import {ReactComponent as TwitterIcon} from './../../assets/twitter-logo.svg'
import {ReactComponent as InstagramIcon} from './../../assets/instagram-logo.svg'
import './social-icons.styles.scss'

const SocialIcons = () => {
    return (
        <div className='social-icons'>
            <ul>
                <li>
                    <a
                        className='icon-link'
                        target='_blank'
                        href='https://instagram.com'
                        rel='noopener noreferrer'
                    >
                        <InstagramIcon className='icon' />
                    </a>
                </li>
                <li>
                    <a
                        className='icon-link'
                        target='_blank'
                        href='https://facebook.com'
                        rel='noopener noreferrer'
                    >
                        <FacebookIcon className='icon' />
                    </a>
                </li>
                <li>
                    <a
                        className='icon-link'
                        target='_blank'
                        href='https://facebook.com'
                        rel='noopener noreferrer'
                    >
                        <TwitterIcon className='icon' />
                    </a>
                </li>
                <li>
                    <a
                        className='icon-link'
                        target='_blank'
                        href='https://facebook.com'
                        rel='noopener noreferrer'
                    >
                        <TwitterIcon className='icon' />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default SocialIcons;