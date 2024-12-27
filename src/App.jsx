import { useState } from 'react'
import './App.css'
import SideBar from './components/SideBar.jsx'
import Info from './components/Info.jsx'

function App() {
  const [activeState, setActiveState] = useState("Contact");
  const initialContact = {
    FirstName:"",
    LastName:"",
    Email:"",
    PhoneNumber:"",
    City:"",
    Country:"",
    PostalCode:""
}

const [contact, setContact] = useState(initialContact);
const initialExperience = {
  companyName : "",
  positionTitle: "",
  responsibilities:"",
  dateFrom:"",
  dateUntil:""
}
const [experience, setExperience] = useState(initialExperience);

const initialEduc = {
  schoolName : "",
  titleOfStudy: "",
  dateFrom:"",
  dateUntil:""
}
const [education, setEducation] = useState(initialEduc);
const initialAward = {
  awardTitle : "",
  organization: "",
  dateReceived:"",
  description:"",
}
const [awards, setAwards] = useState(initialAward);

function handleClick(e){  
    e.preventDefault()
    const text = e.target.querySelector('.fas').nextSibling.textContent.trim();
    setActiveState(text)
}

  return (
    <div className='container'>
      
        <SideBar handleClick={handleClick}/>
     
      <div className="main">
        <Info
            buttonValue={activeState}
            initials = {{
              cont : initialContact,
              educ : initialEduc,
              exp : initialExperience,
              awards : initialAward,
            }}
            ContactInfo={[contact,setContact,]}
            EducationInfo={[education, setEducation]}
            ExperienceInfo={[experience, setExperience]}
            AwardsInfo={[awards, setAwards]}
            TemplateInfo={{
              "Contact": contact,
              "Education" : education,
              "Experience" : experience,
              "Awards" : awards
           }}
      />
      </div>
    </div>
  )
}

export default App
