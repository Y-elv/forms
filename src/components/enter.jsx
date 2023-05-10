

const Input = (props)=>{
    return(
        <>
        <label htmlFor={props.name}>{props.name}</label>
       <input onChange={props.onChange} type={props.type}
       placeholder={props.place}
       value={props.value}
       name={props.name}
       />
        </>
    )
}
export default Input