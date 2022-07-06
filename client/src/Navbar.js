import logo from './assets/logo.png';
import styled from 'styled-components';
import { BrowserRouter, Router, Link, Routes, Route } from "react-router-dom";

const Heading = styled.h1`
    /* margin-left: -15px; */
    color:  #fafafa;
    background-color: #474747;
    border-radius: 20px;
    padding: 10px;
`;

const Navbar = () => {
    const title = 'SMART PARKING';
    return (
        <nav className="navbar">
            <img src={logo} className="logo" alt="" />
            <Heading>{title}</Heading>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </nav>
    );
}

export default Navbar;