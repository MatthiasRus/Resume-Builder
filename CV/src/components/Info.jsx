import Contact from "./Contacts"
import Education from "./Education"
import Experience from "./Experience"
import Awards from "./Awards"
import Template from "./Template"
import {useState} from 'react'

export default function Info({buttonValue, initials, ContactInfo, EducationInfo,ExperienceInfo,AwardsInfo}){
    const [addEduc, setAddEduc] = useState([]);
    const [addExp, setAddExp] = useState([]);
    const [addAward, setAddAward] = useState([]);

    if  (buttonValue === 'Contact'){
          return  <Contact  contact={ContactInfo[0]} setContact={ContactInfo[1]} initials={initials.cont}/>
        }else if (buttonValue === "Education"){
            return <Education addEduc={addEduc} setAddEduc={setAddEduc} education={EducationInfo[0]} setEducation={EducationInfo[1]} initials={initials.educ}/>
        }
        else if (buttonValue === "Experience"){
            return <Experience addExp={addExp} setAddExp={setAddExp} experience={ExperienceInfo[0]} setExperience={ExperienceInfo[1]} initials={initials.exp}/>
        }
        else if (buttonValue === "Awards"){
            return <Awards addAward={addAward} setAddAward={setAddAward} awards={AwardsInfo[0]} setAwards={AwardsInfo[1]} initials={initials.awards}/>
        }
        else{
            return <Template data={{
                "Contact":ContactInfo[0],
                "Education":addEduc,
                "Experience":addExp,
                "Awards":addAward
            }}/>
        }
  
}