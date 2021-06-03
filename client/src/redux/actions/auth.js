import * as api from "../../api/index" ; 

export const signin = (formdata , history) =>async(dispatch)=>{
    try{
      const {data}  =await api.signin(formdata) ; 
       console.log(data) ; 
        dispatch({type:"AUTH" , data}) ; 
      
         history.push("/home") ; 
    }catch(err){  

        const error_message=(err.response.data.message); 
        console.log(error_message) ; 
         dispatch({type:"ERROR" , payload : error_message}) ;
        
    }
}
export const signup = (formdata , history) =>async(dispatch)=>{
    try{
        console.log(formdata) ; 
        let {data}  =await api.signup(formdata) ; 
       
         dispatch({type:"AUTH" , data}) ; 
         console.log(data) ; 
         history.push("/home") ; 
        
    }catch(err){    
         const error_message=(err.response.data.message); 
         console.log(error_message) ; 
         dispatch({type:"SIGNUP_ERROR" , payload : error_message}) ;
        // console.log(err)  ; 
          }
}

export const updateprofile = (id , profile , history) =>async(dispatch)=>{
    try{
        dispatch({type: "START_LOADING" })
        console.log(id,profile); 
       const {data} =  await api.updateprofile(id,profile) ;
       console.log(data) ; 
       dispatch({type:"UPDATE" , data})  ; 
       history.push("/Profile")
       dispatch({type: "END_LOADING" })
    }catch(err){ 
        console.log(err) ;
    }
}


