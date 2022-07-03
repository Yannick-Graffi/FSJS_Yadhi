import React, { useEffect, useState } from 'react';
import './Homepage.css';
import axios from 'axios'
import Preview from '../components/Preview/Preview';

function Homepage() {
    const [lodges,setLodges] = useState([])

    useEffect( () => {
        async function getLodge(){
            const result = await axios.get("http://localhost:3001/lodges")
            setLodges(result.data)
        }
        getLodge()
    }, [])


    return ( 
        <div className="home-container">
            <h2>Accueil</h2>
            {[lodges.map(
                (lodge) => (
                    <Preview 
                        key={lodge._id}
                        lodge={lodge}
                    />
                )
            )]}
        </div>
    );
}

export default Homepage;