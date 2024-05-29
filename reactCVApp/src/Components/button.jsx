
function createButton(className,click,buttonTxt,id,data,setData,inputData,setInputData){
    return(<button className="buttons" id={id} onClick={e=> click(e.target,data,setData,inputData,setInputData)} >{buttonTxt}</button>)
}
export default createButton