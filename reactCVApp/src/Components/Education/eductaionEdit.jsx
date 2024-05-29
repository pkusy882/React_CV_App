import React, { useEffect } from "react";
import { useState } from "react";
import changeFocus from "../isShownChange";
import EducationalDetails from "./educationInput";
import createButton from "../button";

function EducationEdit(eduData,setEduData,textInput, setTextInput){

    //conditionaly renders items if the person has clicked edit on it


    function drawEdit(educationData, setEducationData){
        return(
            educationData.map(function(education){
                if(education.isShown){
                    return(             //renders the input if isShown is true
                    <>                  
                        {EducationalDetails(eduData, setEduData,textInput,setTextInput)}
                    </>
                )}else{                   //otherwise renders title and edit + remove buttons
                    return(
                    <div className="infoContainer">
                        <p className="titleOfInfo">{"Name of institute: "+education.nameOfInstitute}</p>
                        <div className="buttonContainer">
                            {createButton("editEducation", clickEdit,"Edit",education.id, educationData, setTextInput)}
                            {createButton("removeEducation", handleRemove, "Remove", education.id,eduData,setEduData)}
                        </div>
                    </div>
                    )
                }
            })
        )
    }

    //filters through and returns all object apart from target

    const handleRemove = (target,data,setData)=>{
        setData(data.filter((item)=> item.id != target.id))
    }
    //handles click edit
    const clickEdit = (target,eduData,setTextInput)=>{(changeFocus(target.id,eduData,setEduData,setTextInput))}
    //handles add click
    function clickAdd(target,data,setData, textIn, setTextIn){
        
        //creates new object to add
        const newData = {
            id: crypto.randomUUID(),
            nameOfInstitute: "",
            startDate: "", 
            endDate: "",
            gradesAchieved: "",
            isShown: true,
        }
        //handles adding object 
        changeFocus(newData.id,data,setData,setTextIn,newData,true)
    }
        //renders the education input section
    return(
        <div className="educationEditSection">
            <p>Education</p>
            {drawEdit(eduData)}
            <div className="addEducation">
            {createButton("addEducation", clickAdd,"Add new education","add",eduData, setEduData,textInput,setTextInput)}
            </div>
        </div>
    )
}

export default EducationEdit