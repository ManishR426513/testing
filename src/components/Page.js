import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputval } from "../redux/action/action";

function Page() {


    const[data,setdata]=useState('')
    const[list,setlist]=useState('')
    const dispatch=useDispatch()
    
  

    const changing=(e)=>{
        setdata(e.target.value)
    }

    const submit=()=>{
        
      dispatch(inputval(data))
      
    }
    const getdata=useSelector((state)=>state.cartreducer)
    console.log(getdata)
    


  return (
    <div>
   <h1>Page</h1>
    
    <input onChange={(e)=>changing(e)}  />
    
    <button onClick={submit}>Submit</button>
     
    </div>
  );
}

export default Page;
