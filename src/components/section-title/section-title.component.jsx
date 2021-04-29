import React from 'react';
import './section-title.styles.scss';

const SectionTitle = ({ type, topText, bottomText }) => {
    const Heading = type

    return (
        <Heading className='section-title'>
            { topText && <span>{topText}</span>}
            <span>{bottomText}</span>
        </Heading>
    );
};

export default SectionTitle;
