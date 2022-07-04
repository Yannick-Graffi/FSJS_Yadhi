import React from 'react';
import './Preview.css'
import {Link} from 'react-router-dom'

function Preview({lodge}) {
    return ( 
        <Link to="/logement" className='preview-container'>            
            {/* <img src="" alt='text'/> */}
            <h2>{lodge.title}</h2>
            <p>{lodge.description}</p>
            <p>{lodge.price}</p>  
        </Link>
     );
}

export default Preview;