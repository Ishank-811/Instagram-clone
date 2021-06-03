import React from "react" ;
import {BrowserRouter  , Switch , Route} from "react-router-dom" ;  
import Signin from "./Component/Auth/signin/signin" ; 
import Signup from "./Component/Auth/signup/Signup" ; 
import Profile from "./Component/Profiles/Profile" ;
import Home from "./Component/Home/Home" ;  
import CreatePost from "./Component/CreatePost/Createpost" ; 
import Userprofile from "./Component/Profiles/userprofiles/Profile" 
import Update from "./Component/UpdateForm/Update" ; 

function App() {       
  return (
  <>
    
    <BrowserRouter>
   
   <Switch>
   
   <Route path="/" exact component={Signin}/>
    <Route path="/signup" exact component={Signup}/>
    <Route path="/profile" exact component={Profile}/>
    <Route path="/Home" exact component={Home}/>
    <Route path="/Create" exact component={CreatePost}/>
    <Route path="/Userprofile/:id" exact component={Userprofile}/>
    <Route path="/update" exact component={Update}/>
   </Switch>
    </BrowserRouter>
   </>
  );
}

export default App;
