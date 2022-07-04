import React from 'react';
import './HostPreview.css'

function HostPreview({lodge, onDelete, onUpdate}) {
    return ( 
        <div>
            {/* <img src="" alt=''/> */}
            <h2>{lodge.title}</h2>
            <p>{lodge.description}</p>
            <p>{lodge.price}€</p>
            <button onClick={() => onDelete(lodge._id)}>Supprimer</button>
            <button onClick={() => onUpdate(lodge._id)}>Mettre à jour</button>
        </div>

  

     );
}

export default HostPreview;