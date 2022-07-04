import './NewLodgeForm.css';

function NewLodgeForm({onChangeT, onChangeD, onChangeP, onSubmit}) {
 
    return ( 


        <div className="newone">
            <form onSubmit={onSubmit}>
            <label>Titre :</label>
                <input type="text" onChange={onChangeT} placeholder="Titre de l'annonce"/>
                <label>Description :</label>
                <textarea onChange={onChangeD} placeholder="Description"/>
                <label>Prix :</label>
                <input type="number" onChange={onChangeP} placeholder="Prix" min={1}/>
                <button className='Add'>Ajouter un logement</button>
            </form>
        </div>
     );
}

export default NewLodgeForm;