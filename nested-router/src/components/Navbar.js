import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav>
                <button>
                    <Link to="/">Home</Link>
                </button>
                <button>
                    <Link to="/Links">Links</Link>
                </button>
                <button>
                    <Link to="/About">About</Link>
                </button>
            </nav>

            <Outlet></Outlet>
        </>

    )
}

export default Navbar