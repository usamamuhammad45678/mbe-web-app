import { Input, TextField } from '@material-ui/core';
import React from 'react';
import {useForm} from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import '../AddWorkLocation/AddWorkLocation.scss';


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


const workplaceItems=["kies locatie", "HK 25", "Zonnestraal school gebouw", "Project 166", "VR-Trade B.V." ];
const employs=["Kies werknemer", "Maikel", "Lambert", "Rein", "Maarten"]
const categories=["Camera", "Alarm", "Goten", "Hager", "Netwerk"]
export default function AddMaterial() {
    const classes= useStyles();
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = data => {
        console.log(data);
    };
    return (
        <div  className={classes.paper}>
            <h1>Add Material to Work Location</h1>
           <form autoComplete="off" className="go-right" onSubmit={handleSubmit(onSubmit)} >
           <div>
               <span>Select workplace </span>
           <select style={{margin:"10px", padding:"5px"}} id="workplace" name="workplace" ref={register({required: true})}>
              {workplaceItems.map((workplaceItem)=>{
                  
               return  ( <option value={workplaceItem} >{workplaceItem}</option>);
                  
              })}
            </select>
    
  </div>
  {/*  */}
  <div>
               <span>Select Employee </span>
           <select style={{margin:"10px", padding:"5px"}} id="employee" name="employee" ref={register({required: true})}>
              {employs.map((employee)=>{
                  
               return  ( <option value={employee} >{employee}</option>);
                  
              })}
            </select>
    
  </div>
  {/*  */}
  <div>
               <span>Select Category </span>
           <select style={{margin:"10px", padding:"5px"}} id="category" name="category" ref={register({required: true})}>
              {categories.map((category)=>{
                  
               return  ( <option value={category} >{category}</option>);
                  
              })}
            </select>
    
  </div>
  {/*  */}
  <span>
      Date: 
  </span>
  <input type="date" id="date" name="date" ref={register({required: true})}/>
  
  <div>
    <input style={{marginTop:"10px"}} placeholder="Amount" name="Amount" type="number" step="0.01" ref={register({required: true})}/>
    <label>Amount</label>
  </div>
  {/*  */}
  <div>
           <input style={{marginTop:"10px"}} placeholder="Any Additional Remarks"  type="text"  name="Any Additional Remarks"  ref={register({required: true})}/>
    <label >Any Additional Remarks</label>
  </div>
  {/*  */}
  
  
           {/* {errors.password && <p>{errors.password.message}</p>} */}
           <input style={{backgroundColor:"#f06d06"}} className={classes.submit} type="submit" value="Add material" />
           </form>
        </div>
    )
}
 