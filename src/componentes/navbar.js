import React from 'react';

const NavBar = () => {

    return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
    <div className="container-fluid">
        <a className="navbar-brand" href="javascript:void(0)">
            <img src="popcorn.png" width={40}></img>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mynavbar">
        <ul className="navbar-nav me-auto">
            <li className="nav-item">
            <a className="nav-link" href="javascript:void(0)">Peliculas</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="javascript:void(0)">Series</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="javascript:void(0)">Categorias</a>
            </li>
        </ul>
        <form className="d-flex">
            <input className="form-control me-2" type="text" placeholder="Buscar"/>
            <button className="btn btn-primary" type="button">Buscar</button>
        </form>
        </div>
    </div>
    </nav>
    )
}

export default NavBar;