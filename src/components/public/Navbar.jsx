import React from 'react'
import {Link, BrowserRouter} from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div className="container-fluid">
                {/* <a className="navbar-brand" href="#">Top navbar</a> */}
                <img src="rick.png" className="App-logo img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt="" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                            <h1 className="nav-link active" aria-current="page" >Welcome to Lokopedia</h1 >
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li> */}
                    </ul>

                    <div className='d-flex'>
                        <ul className='d-flex fs-3 lis'>
                            <li className="nav-item">
                                <Link className="nav-link px-2 text-secondary" to={"/"}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link px-2 text-secondary" to={'/about'}>About</Link>
                            </li>
                            <li className="nav-item">
                               
                                <Link className="nav-link px-2 text-secondary" to={"/user-form"}>User Form</Link>
                                
                            </li> 
                        </ul>
                        
                    </div>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                </div>
            </div>
        </nav>
    )
}
