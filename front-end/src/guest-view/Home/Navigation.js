import React from 'react'

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="#"><img src='images/logos/cubeColoredShaded.png'/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item usual-nav-link">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item usual-nav-link">
                        <a className="nav-link" href="#">About us</a>
                    </li>
                    <li className="nav-item usual-nav-link">
                        <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item usual-nav-link">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                    <li className="nav-item usual-nav-link">
                        <a className="nav-link" href="#">Projects</a>
                    </li>
                    <li className="nav-item nav-link-login">
                        <a className="nav-link" href="#">Login</a>
                    </li>
                    <li className="nav-item nav-link-register">
                        <a className="nav-link" href="#">Register</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation