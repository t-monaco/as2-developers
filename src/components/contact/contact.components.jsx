import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../section-title/section-title.component';
import './contact.styles.scss';

const Contact = () => {
    return (
        <div className='contact' id='contacto'>
            <SectionTitle type='h2' topText='MAS INFO' bottomText='CONTACTANOS' />
            <div className='contaxt-info'>
                <ul>
                    <li className='phone'>
                        <h4>TELÉFONO</h4>
                        <Link>(+54) 9 11 6009 5550</Link>
                    </li>
                    <li className='email'>
                        <h4>EMAIL</h4>
                        <Link>AS@AS2DEVELOPERS.COM</Link>
                    </li>
                    <li className='address'>
                        <h4>DIRECCIÓN</h4>
                        <Link>DEHEZA 1671</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Contact;
