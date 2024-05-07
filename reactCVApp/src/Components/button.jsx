
function createButton(className,click,buttonTxt){
    return(<button className={className} onClick={e=> click(e.target)} >{buttonTxt}</button>)
}
export default createButton