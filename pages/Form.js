import react from "react";


export default function Form(){

    return(
        <div className="form-box">
<form className="form">
    <input type="text" placeholder="noun 1"></input>
    <input type="text" placeholder="noun 2"></input>
    <input type="text" placeholder="adjective"></input>
    <input type="text" placeholder="color"></input>
    <button>get story</button>
</form>
        </div>
    )
}