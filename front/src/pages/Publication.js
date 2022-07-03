import React, { useEffect, useState } from 'react';
import './Publication.css';
import axios from 'axios'
import HostPreview from '../components/HostPreview/HostPreview';

function Publication() {
    const [lodges,setLodges] = useState([])

    useEffect( () => {
        async function getLodge(){
            const result = await axios.get("http://localhost:3001/lodges")
            setLodges(result.data)
        }
        getLodge()
    }, [])

    // async function handleDelete(id){
    //     await axios.delete(`http://localhost:3001/lodges/${id}`)
    //     const filteredLodges = lodges.filter(lodge => lodge.id !== id)
    //     console.log("filteredLodges");
    // }
    function handleDelete(id) {
        console.log(`Ceci est un test ${id}`);
        
    }


    return ( 
        <div className="home-container">
            <h2>Bienvenue sur votre page d'hôte</h2>
            <p>Ici, vous pourrez modifier ou supprimer vos annonces</p>
            {[lodges.map(
                (lodge) => (
                    <HostPreview 
                        key={lodge._id}
                        lodge={lodge}
                        onDelete={handleDelete}
                    />
                )
            )]}
        </div>
    );
}

export default Publication;