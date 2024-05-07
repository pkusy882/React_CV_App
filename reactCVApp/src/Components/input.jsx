
function Input(name, id, Type, value, typeIn,textArea){
    return(
        <label>{id+": "}
            {textArea ? 
            <textarea name={name} type={Type} value={value} onChange={e=> typeIn(e.target)}/>:
            <input name={name} type={Type} value={value} onChange={e=> typeIn(e.target)} />}
        </label>

    )
}

export default Input