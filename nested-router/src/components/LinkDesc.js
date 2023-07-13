import React from 'react';
import { useParams } from 'react-router-dom';


const LinkDesc = () => {
    const btnId = useParams()
    return (
        <div>{btnId.id}is clicked</div>
    )
}

export default LinkDesc