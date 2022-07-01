import React from 'react';
import './Homepage.css';
import axios from 'axios'
import {useState} from 'react';

function Homepage() {
    const [lodges,setLodges] = useState([])
   async function getLodge(){
const result = await axios.get("http://localhost:3001/")
console.log(result)
   }
    getLodge()
    return ( 
        <div className="home-container">
            <h2>Accueil</h2>
            <p>Description</p>
        </div>
     );
}

export default Homepage;