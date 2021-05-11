import React from 'react';
import './section-title.styles.scss';

const SectionTitle = ({ type = 'h1', secondaryTitle, mainTitle }) => {
    const Heading = type

    return (
        <Heading className='section-title'>
            { secondaryTitle && <span>{secondaryTitle}</span>}
            <span>{mainTitle}</span>
        </Heading>
    );
};

export default SectionTitle;
