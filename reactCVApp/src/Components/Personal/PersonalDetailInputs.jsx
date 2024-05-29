import React from "react"
import Input from "../input"



function PersonalDetails(data,setData){

    //takes controll of the inputs and updates them
    const handleType = (data)=>{
        const {name, value} = data
        setData((prev)=>{
            return {...prev, [name]:value}
        })

    }
                //renders the presonal details inputs
    return(
        <div className="inputCont">
            <p className="pdTitle">Personal Details</p>
            {Input('firstName', "First Name", "text", data.firstName, handleType, false)}
            {Input('surname', "Surname", "text", data.surname, handleType, false)}
            {Input('email', "Email", "email", data.email, handleType, false)}
            {Input('number', "Phone Number", "number", data.number, handleType, false)}
        </div>
    )

}






export default PersonalDetails