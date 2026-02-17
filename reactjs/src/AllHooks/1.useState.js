import { useState } from "react"

// useState lets a component remember a value and update it.

const UseStatePage = () =>{
const [changeState,setChangeState] = useState(0) ;

const handleDecrement =()=>{
    if(changeState > 0){
    setChangeState(changeState - 1)
    }

}
    return (
        <div style={{margin:"auto"}}>
        <h1>USE STATE</h1>
        <div style={{display:"flex",justifyContent:"center",gap:"30px"}}>
        <button onClick={handleDecrement}>-</button>
        <p>{changeState}</p>
        <button onClick={()=>setChangeState(changeState + 1)}>+</button>
        </div>
        </div>
    )
}

export default UseStatePage 