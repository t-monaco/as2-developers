import React, { useEffect, useState } from 'react';
import Divider from '../divider/divider.component';
import SectionTitle from '../section-title/section-title.component';
import SlickSlider from '../slick-slider/slick-slider.component';
import './blueprint.styles.scss';

const Blueprint = ({
    blueprint,
    blueprintFilters,
    linkName,
    name,
    project_details,
}) => {
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

    const [filterOptions, setFilterOptions] = useState([]);

    const [squareMeterFilter, setSquareMeterFilter] = useState(null);

    const [filterBlueprints, setFilterBlueprints] = useState([]);
    
    useEffect(() => {
        if (blueprintFilters) {
            setFilterOptions(blueprintFilters);
            setSquareMeterFilter(blueprintFilters[0]);
        }else{
            setFilterOptions([35, 50, 70, 120]);
            setSquareMeterFilter(35)
        }
    }, [blueprintFilters]);

    useEffect(() => {
        if (typeof squareMeterFilter === 'string') {
            return setFilterBlueprints(
                blueprint.filter(
                    (floor) => floor.squareMeters === squareMeterFilter
                )
            );
        } else {
            let higherThan = squareMeterFilter;
            let lowerThan =
                squareMeterFilter === filterOptions[filterOptions.length - 1]
                    ? Infinity
                    : filterOptions[
                          filterOptions.indexOf(squareMeterFilter) + 1
                      ];

            return setFilterBlueprints(
                blueprint.filter(
                    (floor) =>
                        floor.squareMeters >= higherThan &&
                        floor.squareMeters < lowerThan
                )
            );
        }
    }, [blueprint, filterOptions, squareMeterFilter]);

    const handleChange = (event) =>{
        if(typeof squareMeterFilter === 'string') {
            return setSquareMeterFilter(event.target.value);
        } else {
            return setSquareMeterFilter(parseInt(event.target.value));
        }
       
    }

    return (
        <div className='blueprint'>
            <div className='blueprint-content'>
                <div className='title-description'>
                    <SectionTitle type='h2' mainTitle='PROJECTO' />
                    <p className='description'>{project_details.description}</p>
                </div>
                <div className='downloadable-input-container'>
                    <a
                        className='downloadable-input'
                        href={`documents/${linkName}/blueprint/${linkName}_proyecto.pdf`}
                        download={`Proyecto - ${name}`}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Descargar projecto
                    </a>
                    {project_details.view_360 && (
                        <a
                            className='downloadable-input'
                            href={project_details.view_360}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Vista 360
                        </a>
                    )}
                </div>
                {blueprint.length > 0 && (
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
                                {typeof value === 'string' ? (
                                    <label htmlFor={key}>{value}</label>
                                ) : (
                                    <label htmlFor={key}>
                                        Desde {value} m2
                                    </label>
                                )}
                            </div>
                        ))}
                    </div>
                )}
                <div className='downloadable-input-container'>
                    {blueprint.length > 0 && (
                        <a
                            className='downloadable-input floors-btn'
                            href={
                                typeof squareMeterFilter === 'string'
                                    ? `documents/${linkName}/blueprint/${linkName}_planos_${squareMeterFilter.replaceAll(' ', '_').toLocaleLowerCase()}.pdf`
                                    : `documents/${linkName}/blueprint/${linkName}_planos_${squareMeterFilter}m2.pdf`
                            }
                            download={`Planos ${name} - ${squareMeterFilter} m2`}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Descargar plantas
                        </a>
                    )}
                </div>
            </div>
            {blueprint.length > 0 && (
                <SlickSlider
                    settings={sliderSettings}
                    images={filterBlueprints.map((floor) => floor.imageUrl)}
                />
            )}
            <Divider />
        </div>
    );
};

export default Blueprint;
