const InitialStore={
    content:''
}


export const cartreducer=(state =InitialStore,action)=>{

    
      switch (action.type) {
        case "submitdata":
            return{
            
                content:action.payload
           
            }
            
         
        default:
            return state;
      }
}