import React from 'react';
import Hero from '../../components/hero/hero.component';
import ProjectContent from '../../components/project-content/project-content.component';
import './project.styles.scss';

const Project = () => {
    return (
        <div>
            <Hero imgUrl='https://picsum.photos/1500/700' />
            <ProjectContent />
        </div>
    );
};

export default Project;
