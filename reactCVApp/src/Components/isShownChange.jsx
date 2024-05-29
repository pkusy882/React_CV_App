
function changeFocus(targetID,data,setData,setTextIn,newData,isNewData){

    //this function both changes the focus and also adds 
    //new items to desired states
    let updatedData = data.map(function(item){
        //finds target
        if (item.id===targetID){
            item.isShown = true     //sets it to be shown
            setTextIn(item)         //sets the input to the data
            return(item)
        }else{
            item.isShown = false    //sets all others to be false
        }
        return (item)
    })
    if (isNewData=== true){         //if a brand new object has been
        updatedData.push(newData);  //added it updates state with it
        setTextIn(newData)          //sets the inputs to the new data
    }
    setData(updatedData)
}

export default changeFocus