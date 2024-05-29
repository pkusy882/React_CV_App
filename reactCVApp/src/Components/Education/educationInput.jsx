import React from "react";
import Input from "../input";
import createButton from "../button";


function EducationalDetails(data, setData, newItem, setNewItem){
    

    //handles the update button click

    function handleClick(target,data,setData,inputData){
        
        //sets the targeted object to the new updated values
        setData(data.map(function(education){
            if(target.id===education.id){
                education.nameOfInstitute = inputData.nameOfInstitute,
                education.startDate = inputData.startDate, 
                education.endDate = inputData.endDate,
                education.gradesAchieved = inputData.gradesAchieved,
                education.isShown = false
            }
            return(education)
        }))
    }

    
    //takes controll of the inputs and updates dynamicaly

    const handleType = (newItem)=>{
        const {name, value} = newItem
        setNewItem((prev)=>{
            return {...prev, [name]:value}
        })
    }

    //handles removing button

    const handleRemove = (target,data,setData)=>{
        setData(data.filter((item)=> item.id != target.id))
    }
    
    //renders the inputs for the section
    return(
        <div className="inputCont">
            {Input('nameOfInstitute', "Name of instatute", "text", newItem.nameOfInstitute, handleType, false)}
            {Input('startDate', "Start Date", "text", newItem.startDate, handleType, false)}
            {Input('endDate', "End Date", "email", newItem.endDate, handleType, false)}
            {Input('gradesAchieved', "Grades Achieved", "text", newItem.gradesAchieved, handleType, true)}
            {createButton("addEducation", handleClick, "Update",newItem.id,data,setData,newItem)}
            {createButton("removeEducation", handleRemove, "Remove", newItem.id,data,setData)}
        </div>
    )
}

export default EducationalDetails