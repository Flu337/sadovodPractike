import { Link } from 'react-router-dom'

import './error.css'

const NotFound = () =>{
    return(
            <main>
                <div className="error">
                    <div className="containerError">
                        <div className="imgError">
                            <img className="i4" src="./assets/img/NotFound/4.png" />
                                <img className="i0" src="./assets/img/NotFound/404.png"/>
                            <img className="i4" src="./assets/img/NotFound/4.png" />
                        </div>
                        <div className="titleError">
                            <h1>Page Not Found</h1>
                            <p>We’re sorry, the page you requested could not be found.
                            <br />Please go back to the homepage.</p>
                                <div className="btnError">
                                    <Link to={"/"}><button>Go home</button></Link>
                                </div>
                        </div>
                    </div>
                </div>
            </main>
    )
}

export default NotFound