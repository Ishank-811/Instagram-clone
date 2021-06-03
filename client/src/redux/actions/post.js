import * as api from "../../api/index" ; 


export const createposts = (post , history) =>async(dispatch)=>{

    try{

    dispatch({type: "START_LOADING" })
    const {data} = await api.createposts(post) ;
    console.log(data); 
     dispatch({ type:"CREATE" , payload:data}) ; 
     history.push("/Home") ; 
     dispatch({type: "END_LOADING" })
   
    
    }catch(err){
     console.log(err)  ;
    }    
 }
 export const getposts = () =>async(dispatch)=>{
   try{
    dispatch({type: "START_LOADING" })
    const {data} = await api.fetchposts() ; 
    console.log(data) ; 
    dispatch({ type:"FETCH_ALL" , payload:data}) ; 
    dispatch({type: "END_LOADING" })
   }catch(err){
    console.log(err)  ;
   }    
}

export const myprofile = ()=>async(dispatch)=>{
try{
  dispatch({type: "START_LOADING" })
const {data} = await api.myprofile() ;
console.log(data) ; 
 dispatch({type:"MY_PROFILE" , payload:data}) ; 
 dispatch({type: "END_LOADING" })
}catch(err){
console.log(err) ; 
}
}

export const likeposts = (id) => async (dispatch) => {
   try {
     console.log(id) ; 
     const {data} =await api.likeposts(id);
       console.log(data) ; 
     dispatch({ type: 'LIKE', payload: data });
   } catch (error) {
     console.log(error);
   }
 };  

 export const unlikeposts = (id) => async (dispatch) => {
   try {
     const {data} =await api.unlikeposts(id);
       console.log(data) ;
      
     dispatch({ type: 'UNLIKE', payload: data });
   } catch (error) {
     console.log(error);
   }
 };  
 
 export const comments = (id ,comment) => async (dispatch) => {
  try {
    const {data} =await api.comments(id, comment);
      console.log(data) ; 
    dispatch({ type: 'COMMENT', payload: data });
  } catch (error) {
    console.log(error);
  }
};    

export const userprofile = (id)=>async(dispatch)=>{
  try{
    dispatch({type: "START_LOADING" })
  const {data} = await api.userprofile(id) ;
//  console.log(data) ; 
  
   dispatch({type:"USER_PROFILE" , payload:data}) ; 
   dispatch({type: "END_LOADING" })
  }catch(err){  
  console.log(err) ; 
  }
  }

 export const removeuserprofile = ()=>(dispatch)=>{
   
     dispatch({type:"REMOVE_USER_PROFILE"})
   
 } 

  export const follow = (follow ) =>async(dispatch)=>{
    try{
  
       console.log(follow); 
       const {data} = await api.follow(follow) ; 
       console.log(data) ; 
       dispatch({type:"FOLLOW" ,payload:data }) ; 
    
    }catch(err){
    console.log(err)  ; 
        

    }
}
export const unfollow = (unfollow ) =>async(dispatch)=>{
  try{
   
     console.log(unfollow) ; 
     const {data} = await api.unfollow(unfollow) ; 
     console.log(data) ; 
     dispatch({type:"UNFOLLOW" ,payload:data }) ; 
 
  }catch(err){
  console.log(err)  ; 
  }
}
export const deleteposts = (id) => async (dispatch) => {
  try {
    await api.deleteposts(id);
    if (window.confirm("you want to delete this Post")) {
      dispatch({ type: 'DELETE', payload: id });
    } else {
    
    }
   
  
  } catch (error) {
    console.log(error);
  }
};
