import './style.css'

export default function Header(){
    return(
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Hi, my name is <em>Sardor</em></strong><br/>
                    a frontend developer
                </h1>
                <div className="header__text">
                    <p>With passion for learning and creating.</p>
                </div>
                <a
                  href="https://tashkent.hh.uz/applicant/resumes/view?resume=3cc8c37dff0e87e5a70039ed1f514659744e33"
                  className="btn"
                  target="_blank"
                >
                    View CV
                </a>
            </div>
        </header>
    )
}
