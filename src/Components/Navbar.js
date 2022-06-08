import React from 'react'
import {
    Link,
} from 'react-router-dom';
function Navbar(props) {
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <h2 >Collegelt</h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse mx-3" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="btn-group">
                        <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                            No of Users per page
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="defaultDropdown">
                            <li><span className="dropdown-item" onClick={()=>{props.setresultsperpage(10)}}>10</span></li>
                            <li><span className="dropdown-item" onClick={()=>{props.setresultsperpage(20)}}>20</span></li>
                            <li><span className="dropdown-item" onClick={()=>{props.setresultsperpage(30)}}>30</span></li>
                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Navbar