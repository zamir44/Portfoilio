import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <>
        <header className="flex justify-between py-1 px-5">
            <div className="logo">
                <h2>
                    <Link to="/">TsbSankara</Link>
                </h2>
            </div>

            <nav>
                <ul className="flex">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/hire">Hire</Link>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Header
