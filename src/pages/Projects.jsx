import pr01 from '../img/projects/01.jpg'
import pr02 from '../img/projects/02.jpg'
import pr03 from '../img/projects/03.jpg'
import pr04 from '../img/projects/04.jpg'
import pr05 from '../img/projects/05.jpg'
import pr06 from '../img/projects/06.jpg'

import Project from '../components/project/Project'
import {projects} from '../helpers/projects.list.js'


export default function Projects(){
    return(
        <>

        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">

                    {console.log(projects)}

                    {projects.map((project, index) => {
                        return(
                            <Project knpmey={project.title} title={project.title} img={project.img} gitLink={project.githubLink} index={index} />
                        )
                    })}

                </ul>
            </div>
        </main>

    </>
    )
}