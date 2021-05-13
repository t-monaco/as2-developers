import React, { useEffect, useState } from 'react';
import Divider from '../divider/divider.component';
import SectionTitle from '../section-title/section-title.component';
import SlickSlider from '../slick-slider/slick-slider.component';
import './blueprint.styles.scss';

const Blueprint = ({ blueprint, linkName, name }) => {
    const sliderSettings = {
        autoplay: true,
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
    };

    const [filterOptions] = useState([35, 50, 70, 120]);

    const [squareMeterFilter, setSquareMeterFilter] = useState(
        filterOptions[0]
    );

    const [filterBlueprints, setFilterBlueprints] = useState([]);

    useEffect(() => {
        let higherThan = squareMeterFilter;
        let lowerThan =
            squareMeterFilter === filterOptions[filterOptions.length - 1]
                ? Infinity
                : filterOptions[filterOptions.indexOf(squareMeterFilter) + 1];

        return setFilterBlueprints(
            blueprint.filter(
                (floor) =>
                    floor.squareMeters >= higherThan &&
                    floor.squareMeters < lowerThan
            )
        );
    }, [blueprint, filterOptions, squareMeterFilter]);

    const handleChange = (event) =>
        setSquareMeterFilter(parseInt(event.target.value));

    return (
        <div className='blueprint'>
            <div className='blueprint-content'>
                <div className='title-description'>
                    <SectionTitle type='h2' mainTitle='PLANTAS' />
                    <p className='description'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laboriosam quam doloribus amet voluptates quod explicabo
                        accusantium aliquid!
                    </p>
                </div>
                <div className='input-container'>
                    {filterOptions.map((value, key) => (
                        <div className='input-group' key={key}>
                            <input
                                id={key}
                                type='radio'
                                value={value}
                                onChange={handleChange}
                                checked={squareMeterFilter === value}
                            />
                            <label htmlFor={key}>Desde {value} m2</label>
                        </div>
                    ))}
                </div>
                <a
                    className='blueprint-download-pdf'
                    href={`documents/${linkName}/blueprint/${linkName}_planos_${squareMeterFilter}m2.pdf`}
                    download={`Planos ${name} - ${squareMeterFilter} m2`}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Descargar plantas
                </a>
            </div>
            <SlickSlider
                settings={sliderSettings}
                images={filterBlueprints.map((floor) => floor.imageUrl)}
            />
            <Divider />
        </div>
    );
};

export default Blueprint;
