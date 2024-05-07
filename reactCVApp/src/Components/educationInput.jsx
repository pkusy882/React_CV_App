import React from "react";
import { useState } from "react";
import Input from "./input";
import createButton from "./button";


function EducationalDetails(){
    
    const defaultEducation = {
        nameOfInstitute: "",
        startDate: "", 
        endDate: "", 
        gradesAchieved: ""
    }

    const handleType = (data)=>{
        const {name, value} = data
        setEducationDetails((prev)=>{
            return {...prev, [name]:value}
        })

    }
    const handleClick = (event)=> console.log(event)
    
    const [educationDetails, setEducationDetails] = useState(defaultEducation)

    function getEducationInput(){
        return(
            <div className="educationInput">
                {Input('nameOfInstitute', "Name of instatute", "text", educationDetails.nameOfInstitute, handleType, false)}
                {Input('startDate', "Start Date", "text", educationDetails.startDate, handleType, false)}
                {Input('endDate', "End Date", "email", educationDetails.endDate, handleType, false)}
                {Input('gradesAchieved', "Grades Achieved", "text", educationDetails.gradesAchieved, handleType, true)}
                {createButton("addEducation", handleClick, "Add")}
            </div>
        )
    }

    return(
        <>
        {getEducationInput()}
        </>
    )
}

export default EducationalDetails