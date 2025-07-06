import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-content">
                <p className="footer-name">© {new Date().getFullYear()} ZyroX. All rights reserved.</p>
                <div className="footer-contact">
                <p>
                    📞 <a href="https://wa.me/201019358366" target="_blank" rel="noopener noreferrer" style={{ color: '#00d2ff', textDecoration: 'none' }}>
                        +20 101 935 8366
                    </a>
                </p>
                    <p>📧 CrimsonEcho2050@gmail.com</p>
                </div>
            </div>
        </footer>
    );
}
