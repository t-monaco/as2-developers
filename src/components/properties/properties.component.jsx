import React from 'react'
import Property from '../property/property.component'
import './properties.styles.scss'

const Properties = () => {
    return (
        <div className='properties'>
            <h2 className='title'>NUESTROS<br />TOUCH'S</h2>
            <ul className='properties-container'>
                <Property name='SUCRE' category='FINALIZADO'></Property>
                <Property name='RAMSAY' category='FINALIZADO'></Property>
            </ul>
        </div>
    )
}

export default Properties
