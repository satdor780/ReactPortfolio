import { useEffect, useState } from 'react';
import Project from '../components/project/Project';
import { projects } from '../helpers/projects.list.js';

export default function Projects() {

    const [training, setTraining] = useState(false);
    const [tab, setTab] = useState('all')
    const [projectsList, setProjectsList] = useState(projects);

    function isTraining(project) {
        return !project.training;
    }

    useEffect(() => {
        const filteredProjects = training ? projects.filter(isTraining) : projects;
        setProjectsList(filteredProjects);
    }, [training]);

    const tabFilter = (filter) => {
        setTab(filter);
        if (filter == 'all') {
            setProjectsList(projects);
        }else{
            const filteredProjects = projects.filter(product => product.type === filter);
            setProjectsList(filteredProjects);
        }
    }

    return (
        <>
            <main className="section">
                <div className="container">
                    <h2 className="title-1">Projects</h2>

                    <div className="filter">
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
                        <button className={tab == 'all' ? 'active': ''} onClick={() => tabFilter('all')}>all</button>
                        <button className={tab == 'react' ? 'active': ''} onClick={() => tabFilter('react')}>React</button>
                        <button className={tab == 'wordpress' ? 'active': ''} onClick={() => tabFilter('wordpress')}>wordpress</button>
                    </div>

                    <ul className="projects">
                        {projectsList.map((project, index) => (
                            <Project
                                key={project.id}
                                title={project.title}
                                img={project.img}
                                gitLink={project.githubLink}
                                skills={project.skills}
                                index={index}
                            />
                        ))}
                    </ul>
                </div>
            </main>
        </>
    );
}

// function filterProjects() {
//     switch (activeTab) {
//         case 'react':
//             return projects.filter(project => project.training);
//         case 'wordpress':
//             return projects.filter(project => project.real); // Предполагается, что у вас есть поле real
//         default:
//             return projects;
//     }
// }

// useEffect(() => {
//     setProjectsList(filterProjects());
// }, [tab]);