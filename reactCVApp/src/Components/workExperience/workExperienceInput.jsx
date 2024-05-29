import React from "react";
import Input from "../input";
import createButton from "../button";


function WorkExperienceDetails(data, setData, textIn, setTextIn){
    
    //updates the target object with the new/changed data inputed
    function handleClick(target,data,setData,inputData){
        setData(data.map(function(work){
            if(target.id===work.id){
                work.companyName= inputData.companyName,
                work.startDate = inputData.startDate, 
                work.endDate = inputData.endDate,
                work.responsibilitys = inputData.responsibilitys,
                work.isShown = false
            }
            return(work)
        }))
    }

    //controlls the input components

    const handleType = (updateItem)=>{
        const {name, value} = updateItem
        setTextIn((prev)=>{
            return {...prev, [name]:value}
        })
    }
    //handles removing content
    const handleRemove = (target,data,setData)=>{
        setData(data.filter((item)=> item.id != target.id))
    }

   
    //renders the work inputs 
    return(
        <div className="inputCont">
            {Input('companyName', "Name of company", "text", textIn.companyName, handleType, false)}
            {Input('startDate', "Start Date", "text", textIn.startDate, handleType, false)}
            {Input('endDate', "End Date", "text", textIn.endDate, handleType, false)}
            {Input('responsibilitys', "Responsibilitys", "text", textIn.responsibilitys, handleType, true)}
            {createButton("addWorkExperience", handleClick, "Update", textIn.id, data,setData,textIn)}
            {createButton("removeWork", handleRemove, "Remove", textIn.id,data,setData)}
        </div>
    )
}

export default WorkExperienceDetails