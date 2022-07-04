import React from 'react';
import './Logements.css'

function Logements({title}) {
    return ( 
        <div className="home-container">
            <h2>Logement n*</h2>
            <p>Description</p>
            {console.log(title)}
        </div>
     );
}

export default Logements;