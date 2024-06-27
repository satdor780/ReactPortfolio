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

                        <img src={project.imgBig} alt="" className="project-details__cover"/>

                        <div className="project-details__desc">
                            <p>{project.skills}</p>
                        </div>

                        {project.githubLink && (
                            <GitBtn link={project.githubLink} />
                        )}
                       

                    </div>
                </div>
            </main>
        </>
    )
}