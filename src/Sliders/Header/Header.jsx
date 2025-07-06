// src/components/Header.jsx
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="site-header">
            <div className="container">
                <h1 className="logo">
                    <Link  to="/">DOW-ME</Link>
                </h1>
                <nav className="nav-links">
                    <Link to="/">Home</Link>
                    <Link  to="/how-to-use">How To Use it</Link>
                    <Link  to="/about">About</Link>
                </nav>
            </div>
        </header>
    );
}
