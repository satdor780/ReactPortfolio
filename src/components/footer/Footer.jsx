import './style.css'

import instagram from './../../img/icons/instagram.svg'
import linkedIn from './../../img/icons/linkedIn.svg'
import twitter from './../../img/icons/twitter.svg'
import vk from './../../img/icons/vk.svg'
import github from './../../img/icons/gitHub.svg'
import githubBlack from './../../img/icons/gitHub-black.svg'

export default function Footer(){
    return(
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="https://github.com/satdor780" target="_blank"><img src={github} alt="Link"/></a></li>
                        <li className="social__item"><a href="#!"><img src={linkedIn} alt="Link"/></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}