'use client'

import localFont from "next/font/local";
import "./css/globals.css";
import "./css/nav.css"
import Link from "next/link"; // Import Link for navigation
import { FaGithub, FaLinkedin } from 'react-icons/fa';
export default function RootLayout({ children }) {
    return (
        <html lang="en">            
            <body>
                <nav className="nav-cont">
                    <div className="nav-links-cont">
                        <Link className="nav-link" href="/">Home</Link>
                        <Link className="nav-link" href="/About">About</Link> 
                        <Link className="nav-link" href="/Contact">Contact</Link>
                    </div>
                    <div className="nav-social-link-cont">
                        <a
                            className="nav-link"
                            href="https://github.com/Thomas4897"
                            target="_blank"
                            rel="noopener noreferrer">
                            <FaGithub className="social-link" />
                        </a>
                        <a
                            className="nav-link"
                            href="https://www.linkedin.com/in/thomas-maynard-1b214783/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <FaLinkedin className="social-link" />
                        </a>
                    </div>
                </nav>
                {children}
            </body>
        </html>
    );
}
