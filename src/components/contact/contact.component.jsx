import React from 'react';
import { Link } from 'react-router-dom';
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
                        <Link>(+54) 9 11 6009 5550</Link>
                    </li>
                    <li className='address'>
                        <h4>DIRECCIÓN</h4>
                        <Link>DEHEZA 1671</Link>
                    </li>
                    <Divider />
                    <li className='email'>
                        <h4>EMAIL</h4>
                        <Link>AS@AS2DEVELOPERS.COM</Link>
                    </li>
                </ul>
                <Divider />
                <SocialIcons />
            </div>
        </div>
    );
};

export default Contact;
