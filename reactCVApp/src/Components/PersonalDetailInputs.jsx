import React from "react"
import { useState } from "react"
import Input from "./input"
import createButton from "./button"
//first section(personal details)
//First Name,  Surname, Email, Phone Number
//second section(Educational experiences)
//Third Section (Work Experience)

function PersonalDetails(){
    //default state for personal details
    const defaultPD = {
        firstName: "",
        surname: "",
        email: "",
        number: ""
      }
    
    ///state handler
    const [personalDetails, setPersonalDetails] = useState(defaultPD)

    const handleClick = (event)=> console.log(personalDetails.firstName+"  "+personalDetails.surname+"   "+personalDetails.email+"   "+personalDetails.number)

    const handleType = (data)=>{
        const {name, value} = data
        setPersonalDetails((prev)=>{
            return {...prev, [name]:value}
        })

    }
    function getInputs(){
        return(
            <div className="inputCont">
                {Input('firstName', "First Name", "text", personalDetails.firstName, handleType, false)}
                {Input('surname', "Surname", "text", personalDetails.surname, handleType, false)}
                {Input('email', "Email", "email", personalDetails.email, handleType, false)}
                {Input('number', "Phone Number", "number", personalDetails.number, handleType, false)}
                {createButton("submitPersonalDetail", handleClick, "Submit")}
            </div>
        )
    }

    return(
        <>
        {getInputs()}

        </>
    )

}






export default PersonalDetails