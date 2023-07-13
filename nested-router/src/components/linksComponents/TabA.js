import React from 'react';
import { Link } from 'react-router-dom';

const TabA = () => {
    return (
        <>
            <div className='linksBtn'>
                <button>
                    <Link to="/Links/Btn1">btn1</Link></button>
                <button>
                    <Link to="/Links/Btn2">btn2</Link></button>
                <button>
                    <Link to="/Links/Btn3">btn3</Link></button>
            </div>
        </>
    )
}

export default TabA