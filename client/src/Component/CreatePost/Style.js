import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
     
    },
    width:"100%",
    display:"flex",
    flexDirection: "column",
 
    
  },
  
  paper: {
    padding: theme.spacing(2),
    width:"100%",
    height:"70vh",
    display:"flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position:"relative",
  
    top:"20%",
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width:"40%",
  },
  fileInput: {
 
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  loadingPaper: {
   
    display: 'flex', justifyContent: 'center', alignItems: 'center', 
    padding: '20px',
     borderRadius: '15px', height: '80vh',
  },
}));