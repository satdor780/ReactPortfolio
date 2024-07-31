import GitBtnImg from "./../../img/icons/gitHub-black.svg"

export default function GitBtn({link}){
    return(
        <a href={link} className="btn-outline" target="_blank">
            <img src={GitBtnImg} alt=""/>
            GitHub repo
        </a>
    )
}