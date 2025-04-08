import { useEffect, useState } from 'react';
import Project from '../components/project/Project';
import { projects } from '../helpers/projects.list.js';

export default function Projects() {

   const [training, setTraining] = useState(false);
    const [tab, setTab] = useState('all');
    const [projectsList, setProjectsList] = useState(projects);

    useEffect(() => {
        const filteredProjects = training
            ? projects.filter(project => !project.training)
            : projects;

        setProjectsList(tab === 'all'
            ? filteredProjects
            : filteredProjects.filter(project => project.type === tab));
    }, [training, tab]);

    const tabFilter = (filter) => {
        setTab(filter);
    };

    return (
        <>
            <main className="section">
                <div className="container">
                    <h2 className="title-1">Projects</h2>

                    <div className="filter none">
                      <div className="checkbox__button">
                        <input
                        type="checkbox"
                        checked={training}
                        className="cb1 tgl tgl-light"
                        id="training"
                        />

                        <label
                        htmlFor="training"
                        className="tgl-btn"
                        onClick={() => setTraining(prev => !prev)}
                        ></label>

                      </div>
                      <label htmlFor="training">only real projects</label>
                    </div>


                    <div className="tabs">
                        <button className={tab === 'all' ? 'active': ''} onClick={() => tabFilter('all')}>All</button>
                        <button className={tab === 'react' ? 'active': ''} onClick={() => tabFilter('react')}>React</button>
                        <button className={tab === 'wordpress' ? 'active': ''} onClick={() => tabFilter('wordpress')}>Wordpress</button>
                    </div>

                    <ul className="projects">
                        {projectsList.length > 0 ? projectsList.map((project) => (
                            <Project
                                key={project.id}
                                title={project.title}
                                img={project.img}
                                gitLink={project.githubLink}
                                skills={project.skills}
                                id={project.id}
                            />
                        )): <h5 className="projects__info">There is nothing ):</h5>}
                    </ul>
                </div>
            </main>
        </>
    );
}
