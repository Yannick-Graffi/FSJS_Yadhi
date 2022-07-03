import React from 'react';
import './HostPreview.css'

function HostPreview({lodge, onDelete}) {
    return ( 
        <div>
            <img src=""/>
            <h2>{lodge.title}</h2>
            <p>{lodge.description}</p>
            <p>{lodge.price}</p>
            <button onClick={() => onDelete(lodge._id)}>Supprimer</button>
        </div>

  

     );
}

export default HostPreview;