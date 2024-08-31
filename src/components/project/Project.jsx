import { NavLink } from "react-router-dom"



export default function Project({title, img, id, skills}){

    return(
        <NavLink to={`/project/${id}`}>
            <li className="project">
                <img src={img} alt={title} className="project__img"/>
                <div className="tags">
                    {skills.map(tab => (
                        <div className="tag" key={tab}>{tab}</div>
                    ))}
                </div>
                <h3 className="project__title">{title}</h3>
            </li>
        </NavLink>
    )
}