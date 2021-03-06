import { IconButton, Input, TextField } from '@material-ui/core';
import React from 'react';
import {useForm} from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import './AddWorkLocation.scss';
import { firebaseApp } from '../firebase';
import { toast } from 'react-toastify';
import '../Components/toast.css';
import 'react-toastify/dist/ReactToastify.css';


toast.configure();
const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        backgroundColor: "#3f51b5",
        // color: 'white',
        margin: theme.spacing(3, 0, 2), 
        
        '&:hover': {
            backgroundColor: "blue",
            color: 'white',
            fontWeight: "bold"
        }
    },
}));



export default function AddWorkLocation(props) {
    const classes= useStyles();
    const {register, handleSubmit, errors, reset} = useForm();

    const onSubmit = data => {
        data.user_Email= props.user.email;
        data.invisible="0";
        data.remove="0";
        var newRef = firebaseApp.database().ref().child("worklocations").push();
        // data.worklocationID= groupId;
        var key= newRef.key;
        data.key=key;
        console.log(data);
        newRef.set(data)
       
        toast.success('🚀 Successfully added the data to the database ', {
            position: "bottom-center",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
            reset();
    };
    return (
        <div  className={classes.paper}>
            <h1>Add Work Location</h1>
           <form autoComplete="off" className="go-right" onSubmit={handleSubmit(onSubmit)} >
           <div>
               
           <input style={{marginTop:"10px"}} placeholder="Workplace Name"   type="text" name="name_workLocation" ref={register({required: true})}/>
    <label >Workplace Name</label>
  </div>
  {/*  */}
  <div>
           <input style={{marginTop:"10px"}} placeholder="Customer name"  type="text"  name="name_customer"  ref={register({required: true})}/>
    <label >Customer name</label>
  </div>
  {/*  */}
  <div>
    <input style={{marginTop:"10px"}} placeholder="Street and House Number" name="street" type="text" ref={register({required: true})}/>
    <label>Street and House Number</label>
  </div>
  {/*  */}
  <div>
    <input style={{marginTop:"10px"}} placeholder="Zip Code Place" name="postal_code" type="text" ref={register({required: true})}/>
    <label>Zip Code Place</label>
  </div>
  {/*  */}
   
  
           {/* {errors.password && <p>{errors.password.message}</p>} */}
           <IconButton>
           <input style={{backgroundColor:"#f06d06"}} className={classes.submit} type="submit" value="Add Job Data" />

           </IconButton>           </form>
        </div>
    )
}
 