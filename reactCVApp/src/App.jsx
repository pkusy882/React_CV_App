import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import PersonalDetails from './Components/Personal/PersonalDetailInputs.jsx'
import EducationalDetails from './Components/Education/educationInput.jsx'
import EducationEdit from './Components/Education/eductaionEdit.jsx'
import WorkExperienceDetails from './Components/workExperience/workExperienceInput.jsx'
import WorkExpEdit from './Components/workExperience/workExperienceEdit.jsx'
import buildCV from './Components/CVbuilder.jsx'
import './App.css'


function App() {

  //default state for CV (filler info)
  const defaultPD = {
    firstName: "John",
    surname: "Smith",
    email: "jsmith@gmail.co.uk",
    number: "07497286354",
  }

  const defaultEducation = [{
    id: crypto.randomUUID(),
    nameOfInstitute: "Magna",
    startDate: "12/03/2010", 
    endDate: "12/05/2015", 
    gradesAchieved: "Maths:A, English:B",
    isShown: false,
  },
  {
    id: crypto.randomUUID(),
    nameOfInstitute: "Strodes",
    startDate: "12/03/2016", 
    endDate: "12/05/2018", 
    gradesAchieved: "Maths:A, Computer Science:B",
    isShown: false,
  }]

  const defaultWork = [{
    id: crypto.randomUUID(),
    companyName: "Tesco",
    startDate: "12/03/1999", 
    endDate: "12/04/2005", 
    responsibilitys: "Work Tills, make sure the shelves are stacked",
    isShown: false,
  },{
    id: crypto.randomUUID(),
    companyName: "Sainsburys",
    startDate: "13/07/2005", 
    endDate: "23/09/2009", 
    responsibilitys: "Work Tills, make sure the shelves are stacked",
    isShown: false,
  }]

  const newEducationSection = {
    id: crypto.randomUUID(),
    nameOfInstitute: "",
    startDate: "", 
    endDate: "", 
    gradesAchieved: "",
    isShown: false,
  }

  const newWorkSection = [{
    id: crypto.randomUUID(),
    companyName: "",
    startDate: "", 
    endDate: "", 
    responsibilitys: "",
    isShown: false,
  }]
  //all states are here

  const [personalDetails, setPersonalDetails] = useState(defaultPD)
  const [educationDetails, setEducationDetails] = useState(defaultEducation)
  const [workDetails, setWorkDetails]= useState(defaultWork)
  const [newEduItem, setNewEduItem] = useState(newEducationSection)
  const [newWorkItem, setNewWorkItem]= useState(newWorkSection)


  //compiles all the different sections required
  return (
    <>
      <div className='inputForm'>
        {PersonalDetails(personalDetails, setPersonalDetails)}
        {EducationEdit(educationDetails,setEducationDetails,newEduItem,setNewEduItem)} 
        {WorkExpEdit(workDetails,setWorkDetails,newWorkItem,setNewWorkItem)}
      </div>
      {buildCV(personalDetails,educationDetails,workDetails)}
    </>
  )
}

export default App
