
function Input(name, id, Type, value, typeIn,textArea){
    return(
        <div className="inputs">
            <label>{id+": "}</label>
            {textArea ? 
            <textarea name={name} type={Type} value={value} onChange={e=> typeIn(e.target)}/>:
            <input name={name} type={Type} value={value} onChange={e=> typeIn(e.target)} />}
           
        </div>

    )
}

export default Input