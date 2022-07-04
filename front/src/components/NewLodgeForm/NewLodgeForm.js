function NewLodgeForm({onChangeT, onChangeD, onChangeP, onSubmit}) {
 
    return ( 


        <div>
            <form onSubmit={onSubmit}>
                <input type="text" onChange={onChangeT} placeholder="Titre de l'annonce"/>
                <textarea onChange={onChangeD} placeholder="Description"/>
                <input type="number" onChange={onChangeP} placeholder="Prix"/>
                <button>Ajouter un logement</button>
            </form>
        </div>
     );
}

export default NewLodgeForm;