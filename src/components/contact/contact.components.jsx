import React from 'react';
import './contact.styles.scss';

const Contact = () => {
    return (
        <div className='contact'>
            <h2 className='title'>
                <span>MAS INFO</span>
                <span>CONTACTANOS</span>
            </h2>
            <div className='contaxt-info'>
                <ul>
                    <li className='phone'>
                        <h4>TELÉFONO</h4>
                        <a>(+54) 9 11 6009 5550</a>
                    </li>
                    <li className='email'>
                        <h4>EMAIL</h4>
                        <a>as@as2developers.com</a>
                    </li>
                    <li className='address'>
                        <h4>DIRECCIÓN</h4>
                        <a>DEHEZA 1671</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Contact;
