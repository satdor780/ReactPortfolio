import Header from './../components/header/Header.jsx'

export default function Home(){
    return(
        <>

        <Header />

        <main className="section">
            <div className="container">

                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Frontend</h2>
                            <p>HTML, CSS, JavaScript, ReactJS, Redux Toolkit, Git, Github, REST API, NPM, Vite, StyledComponents</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Backend</h2>
                            <p>php, Wordpress</p>
                        </li>
                    </ul>

            </div>
        </main>

        </>
    )
}