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
                mainTitle='CONTACTO'
            />
            <div className='contact-info'>
                <ul>
                    <li className='address'>
                        <h4>DIRECCIÓN</h4>
                        <a
                            href='https://goo.gl/maps/DLTWoupQTW3TjCXN6'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Paraguay 754 Piso 3 Of B - CABA
                        </a>
                    </li>
                    <li className='email'>
                        <h4>EMAIL</h4>
                        <a href='mailto:data@as2developers.com'>
                            data@as2developers.com
                        </a>
                    </li>
                    <li className='phone'>
                        <h4>TELÉFONO</h4>
                        <a href='tel:+5491128450000'>(+54) 9 11 2845 0000</a>
                    </li>
                </ul>
            </div>
            <Divider />
            <SocialIcons />
        </div>
    );
};

export default Contact;
