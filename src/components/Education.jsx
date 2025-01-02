import {useState} from 'react'

export default function Education({addEduc,setAddEduc,initials, education, setEducation}){
    const [addSection, setAddSection] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);

    function toggleSection(e){
        e.preventDefault();
        setAddSection(!addSection);
    }

    function handleSubmit(e){
        e.preventDefault();
        let newEduc = {
            schoolName : education.schoolName,
            titleOfStudy : education.titleOfStudy,
            dateFrom : education.dateFrom,
            dateUntil :education.dateUntil

        }

        if (isEditing){
            const updatedEduc = [...addEduc];
            updatedEduc[editingIndex] = newEduc;
            setAddEduc(updatedEduc)
        }else{
            setAddEduc([...addEduc,newEduc])
        }
        setIsEditing(false)
        setEditingIndex(null)
        setAddSection(!addSection)
        setEducation(initials)
    }

    function handleChange(e){
        setEducation({
            ...education,
            [e.target.name] : e.target.value
        })
    }
    function handleEdit(index){
        const educToEdit = addEduc[index];
        setEducation(educToEdit);
        setAddSection(true);
        setIsEditing(true);
        setEditingIndex(index);
    }
    function handleDelete(index){
        const updatedEduc = addEduc.filter((_,i) => i !== index);
        setAddEduc(updatedEduc);
    }
    function AddEduc({educ,index}){
        return(
            <div className="collection">
                <p className="school">{educ.schoolName}</p>
                <p className="field" style={{display:'none'}}>{educ.titleOfStudy}</p>
                <p className="dateFrom" style={{display:'none'}}>{educ.dateFrom}</p>
                <p className="dateUntil" style={{display:'none'}}>{educ.dateUntil}</p>
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
    return(
        <>
        <div className='sectionHolder'>
            {!addSection && addEduc.map((educ,index) => (
                <AddEduc
                key={index}
                educ={educ}
                index={index}
                />
            ))}
        {addSection && <form >
    <fieldset>
        <legend>Educational Experience</legend>

        <label htmlFor="schoolName">School Name:</label>
        <input 
            type="text" 
            id="schoolName" 
            name="schoolName" 
            value={education.schoolName || ''}
            onChange={handleChange} 
        />

        <label htmlFor="titleOfStudy">Title of Study:</label>
        <input 
            type="text" 
            id="titleOfStudy" 
            name="titleOfStudy" 
            value={education.titleOfStudy || ''}
            onChange={handleChange} 
        />

        <label htmlFor="dateFrom">Date From:</label>
        <input 
            type="date" 
            id="dateFrom" 
            name="dateFrom" 
            value={education.dateFrom || ''}
            onChange={handleChange} 
        />

        <label htmlFor="dateUntil">Date Until:</label>
        <input 
            type="date" 
            id="dateUntil" 
            name="dateUntil" 
            value={education.dateUntil || ''}
            onChange={handleChange} 
        />
    </fieldset>

    <button type="submit" onClick={handleSubmit}>Save</button>
</form>

}
        </div>
        <button onClick={toggleSection} className='addSection'>{addSection ? "Close" : "Add Education"}</button>
        </>
    )
}
