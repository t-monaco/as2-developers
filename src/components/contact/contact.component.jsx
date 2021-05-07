import React from 'react';
import Divider from '../divider/divider.component';
import SectionTitle from '../section-title/section-title.component';
import SocialIcons from '../social-icons/social-icons.component';
import './contact.styles.scss';

const Contact = () => {
    return (
        <div className='contact' id='contacto'>
            <SectionTitle
                type='h2'
                secondaryTitle='MAS INFO'
                mainTitle='CONTACTANOS'
            />
            <div className='contact-info'>
                <ul>
                    <li className='phone'>
                        <h4>TELÉFONO</h4>
                        <a href='tel:+5491160095550'>(+54) 9 11 6009 5550</a>
                    </li>
                    <li className='address'>
                        <h4>DIRECCIÓN</h4>
                        <a
                            href='https://goo.gl/maps/fSM14fjxeusiyAEZ8'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            DEHEZA 1671
                        </a>
                    </li>
                    <Divider />
                    <li className='email'>
                        <h4>EMAIL</h4>
                        <a href='mailto:as@as2developers.com'>
                            AS@AS2DEVELOPERS.COM
                        </a>
                    </li>
                </ul>
                <Divider />
                <SocialIcons />
            </div>
        </div>
    );
};

export default Contact;
