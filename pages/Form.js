import react, { useState } from "react";


export default function Form(){
    const[noun1,setNoun1] = useState('')
    const[noun2,setNoun2] = useState('')
    const[adj,setAdj] = useState('')
    const[color,setColor] = useState('')
    const [frase,setFrase] = useState('')

    const handleClick=(e)=>{
        e.preventDefault()
        setFrase(`the ${noun1} and ${adj} ${noun2} are ${color}`)
       
        console.log(noun1,noun2,adj,color)
        
    }

    // const handleChange(){
        
    // }


    return(
        <>
        <div className="form-box">
<form className="form">
    <input type="text" placeholder="noun 1" value={noun1} onChange={(e)=>setNoun1(e.target.value)}  ></input>
    <input type="text" placeholder="noun 2" value={noun2} onChange={(e)=>setNoun2(e.target.value)}></input>
    <input type="text" placeholder="adjective" value={adj} onChange={(e)=>setAdj(e.target.value)}></input>
    <input type="text" placeholder="color" value={color} onChange={(e)=>setColor(e.target.value)}></input>
    <button onClick={handleClick}>get story</button>
</form>
        </div>
        <h2>{frase}</h2>
        </>
    )
}