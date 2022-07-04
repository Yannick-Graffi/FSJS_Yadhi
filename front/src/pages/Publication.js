import React, { useEffect, useState } from 'react';
import './Publication.css';
import axios from 'axios'
import HostPreview from '../components/HostPreview/HostPreview';
import NewLodgeForm from '../components/NewLodgeForm/NewLodgeForm';
import UpdateForm from '../components/UpdateForm/UpdateForm'

function Publication() {
    const [lodges,setLodges] = useState([]);
    const [lodge, setLodge] = useState({});

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState (0);

    const [display, setDisplay] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        price:""
    })

    useEffect( () => {
        async function getLodge(){
            const result = await axios.get("http://localhost:3001/lodges")
            setLodges(result.data)
        }
        getLodge()
    }, [])

    async function handleDelete(id){
        await axios.delete(`http://localhost:3001/lodges/${id}`)

 
        const filteredLodges = lodges.filter(lodge => lodge._id !== id)

        setLodges(filteredLodges)
    }

    function handleChangeT(e) {
        setTitle(e.target.value)
    }
    function handleChangeD(e) {
        setDescription(e.target.value)
    }
    function handleChangeP(e) {
        setPrice(e.target.value)
    }
   
    async function handleSubmit(e) {
        e.preventDefault()
        await axios.post(`http://localhost:3001/lodges/`, {
            title,
            description,
            price
        })
        // console.log(newLodgeAdded.data.data);
    }

    function displayUpdate(id) {
        if (display) {
            setDisplay(false)
        } else {
            const result = lodges.find(lodge => lodge._id === id)
            setLodge(result) 
            setFormData(result)

            setDisplay(true)
        }
    }

    function handleUpdateChange(e) {
        setFormData(
            prevState => (
                {
                    ...prevState,
                    [e.target.name]:e.target.value
                }
            )
        )    
    }

    async function handleUpdateSubmit(e) {
        e.preventDefault()
        setDisplay(false)
        const result = await axios.put(`http://localhost:3001/lodges/${formData._id}`, formData)
    }

    return (
        display      
       ?<div>
            <p>Entrez vos modifications :</p>
            <UpdateForm 
                lodge={lodge}
                formData={formData}
                onChange={handleUpdateChange}
                onSubmit={handleUpdateSubmit}   
            />   
       </div>
       :<div className="publish-container">
            <h2>Bienvenue sur votre page d'hôte</h2>
            <p>Ici, vous pourrez ajouter, modifier ou supprimer vos annonces</p>
            <NewLodgeForm
                onChangeT={handleChangeT}
                onChangeD={handleChangeD}
                onChangeP={handleChangeP}
                onSubmit={handleSubmit}
            />
            
            {[lodges.map(
                (lodge) => (
                    <HostPreview 
                        key={lodge._id}
                        lodge={lodge}
                        onDelete={handleDelete}
                        onUpdate={displayUpdate}
                    />                    
                )
            )]}
        </div>
    );
}

export default Publication;