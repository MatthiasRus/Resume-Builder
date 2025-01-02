import {useState} from 'react'

export default function Awards({addAward, setAddAward,initials, awards, setAwards }) {
    const [addSection, setAddSection] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);

    function toggle(){
        setAddSection(!addSection);
    }
    function handleDelete(index){
        const updatedAward = addAward.filter((_,i) => i!==index);
        setAddAward(updatedAward)
    }
    function AddAward({award,index}){
        return (
            <div className="collection">
                <p className="titleAward">{award.awardTitle}</p>
                <p className="organization" style={{display:'none'}}>{award.organization}</p>
                <p className="date" style={{display:'none'}}>{award.dateReceived}</p>
                <p className="description" style={{display:'none'}}>{award.description}</p>
                <div className="editDelete">
                <button onClick={() => handleEdit(index)} className="edit">
                        <i className="fas fa-edit"></i>
                </button>
                <button onClick={() => handleDelete(index)} className="delete">
                         <i className="fas fa-trash"></i>
                </button>
                </div>
                

            </div>
        )
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newAward = {
            awardTitle : awards.awardTitle,
            organization : awards.organization,
            dateReceived : awards.dateReceived,
            description : awards.description
        }
        if(isEditing){
            const updatedAward = [...addAward];
            updatedAward[editingIndex] = newAward;
            setAddAward(updatedAward);
        }
        else{
            setAddAward([...addAward,newAward])
        }
       
        setAddSection(false);
        setIsEditing(false)
        setEditingIndex(null)
        setAwards(initials)
        
    }

    function handleChange(e) {
        setAwards({
            ...awards,
            [e.target.name]: e.target.value,
        });
    }

    function handleEdit(index){
        const awardUpdate = addAward[index]
        setAwards(awardUpdate);
        setAddSection(true);
        setIsEditing(true);
        setEditingIndex(index);
    }
    return (
       <> <div className='sectionHolder'>
        {!addSection && 
            addAward.map((award,index) => (
                <AddAward 
                    key={index}
                    index={index}
                    award={award}
                ></AddAward>
            ))}
        
            
            {addSection && <form >
                <fieldset>
                    <legend>Award Details</legend>
                    
                    <label htmlFor="awardTitle">Award Title:</label>
                    <input 
                        type="text" 
                        id="awardTitle" 
                        name="awardTitle"
                        value={awards.awardTitle} 
                        onChange={handleChange} 
                    />
                    
                    <label htmlFor="organization">Awarding Organization:</label>
                    <input 
                        type="text" 
                        id="organization" 
                        name="organization" 
                        value={awards.organization}
                        onChange={handleChange} 
                    />
                    
                    <label htmlFor="dateReceived">Date Received:</label>
                    <input 
                        type="date" 
                        id="dateReceived" 
                        name="dateReceived"
                        value={awards.dateReceived} 
                        onChange={handleChange} 
                    />
                    
                    <label htmlFor="description">Description:</label>
                    <textarea 
                        id="description" 
                        name="description" 
                        rows="4" 
                        cols="30" 
                        value = {awards.description}
                        onChange={handleChange}
                    ></textarea>
                </fieldset>
                
                <button type="submit" onClick={handleSubmit}>Save</button>
            </form>}
        </div>
        <button onClick={toggle} className='add'>{addSection? "Close" : "Add Award"}</button>
        </>
    );
}
