import { useParams } from 'react-router-dom'

import GitBtn from "../components/githubBtn/gitBtn";
import {projects} from "../helpers/projects.list"


export default function Project(){
    const {id} = useParams()
    const project = projects[id]
    return(
        <>
            <main className="section">
                <div className="container">
                    <div className="project-details">

                        <h1 className="title-1">{project.title}</h1>

                        <img src={project.img} alt="" className="project-details__cover"/>

                        <p className="dec" >{project.dec}</p>

                        <div className="project-details__desc">
                            <p>{project.skills.map(skill => skill + ' ')}</p>
                        </div>
                        
                        {project.link && (
                            <a href={project.link} className="btn-outline view" target="_blank">
                               view site
                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                            </a>
                        )}

                        {project.githubLink && (
                            <GitBtn link={project.githubLink} />
                        )}

                        
                        
                    </div>
                </div>
            </main>
        </>
    )
}