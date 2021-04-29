import React from 'react';
import './about.styles.scss';

const About = () => {
    return (
        <div className='about'>
            <h2 className='title'>
                <span>SOBRE</span>
                <span>NOSOTROS</span>
            </h2>
            <article className='description'>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Sit excepturi fugiat fuga, vel animi ea eaque eligendi
                    similique, perferendis natus tempore officiis quos odio
                    soluta recusandae error at saepe cupiditate. Enim saepe
                    tenetur, vero laboriosam voluptatum eius nemo sequi non
                    facilis sunt ratione quisquam natus perspiciatis nihil
                    provident accusantium sit! Optio commodi porro eveniet ex
                    voluptate voluptas, magnam corrupti ducimus!
                </p>
                <p>
                    Ducimus in excepturi atque, explicabo dicta fugiat nobis
                    eaque amet possimus tempora sit cumque velit voluptatem ad
                    quibusdam quia quis voluptatum similique cupidita
                </p>
                <img src='https://picsum.photos/650/350' alt='' />
            </article>
        </div>
    );
};

export default About;