import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const LinksNavbar = () => {
    return (
        <>
            <nav className='linksNav'>
                <button>
                    <Link to="/Links">Tab A</Link></button>
                <button>
                    <Link to="/Links/Tab-B">Tab B</Link></button>
                <button>
                    <Link to="/Links/Tab-C">Tab C</Link></button>
                <button>
                    <Link to="/Links/Tab-D">Tab D</Link></button>
            </nav>
            <Outlet></Outlet>
        </>
    )
}

export default LinksNavbar;