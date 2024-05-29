import React from "react";
import { useState } from "react";
import createButton from "../button";
import WorkExperienceDetails from "./workExperienceInput";
import changeFocus from "../isShownChange";

function WorkExpEdit(workData,setWorkData,textInput, setTextInput){

    //conditionaly renders items if the person has clicked edit on it

    function drawEdit(workData){
        return(
            workData.map(function(work){
                if(work.isShown){
                    return(         //renders the input if isShown is true
                    <>
                        {WorkExperienceDetails(workData,setWorkData,textInput,setTextInput)}
                    </>
                )}else{             //otherwise renders title and edit + remove buttons
                    return(
                    <div className="infoContainer">
                        <p className="titleOfInfo">{"Name of Company: "+work.companyName}</p>
                        <div className="buttonContainer">
                            {createButton("editWork", clickEdit,"Edit",work.id,workData,setTextInput)}
                            {createButton("removeWork", handleRemove, "Remove", work.id,workData,setWorkData)}
                        </div>
                    </div>
                    )
                }
            })
        )
    }
    //hadles edit click
    const clickEdit = (target,workData,setTextInput)=>{(changeFocus(target.id,workData,setWorkData,setTextInput))}

    //handles add click
    function clickAdd(target,data,setData, textIn, setTexctIn){
        
        //creates new object to add to data
        const newData = {
            id: crypto.randomUUID(),
            companyName: "",
            startDate: "", 
            endDate: "", 
            responsibilitys: "",
            isShown: true,
        }
        //sorts out adding new object
        changeFocus(newData.id,data,setData,setTexctIn,newData,true)
    }
    //filters through objects and only removes target id
    const handleRemove = (target,data,setData)=>{
        setData(data.filter((item)=> item.id != target.id))
    }
    
    //renders the work section for the input
    return(
        <div className="workEditSection">
            <p>Work Experience</p>
            {drawEdit(workData)}
            <div className="addWork">
            {createButton("addWork", clickAdd,"Add new work","add",workData, setWorkData,textInput,setTextInput)}
            </div>
        </div>
    )
}

export default WorkExpEdit