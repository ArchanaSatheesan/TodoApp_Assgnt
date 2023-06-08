import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Todo = () => {

    const [inputarray,setInputarray]=useState([]);
    const [inputdata,setInputdata]=useState({pdt:"",brand:"",qty:""})

    const changehandle=(e)=>{
        setInputdata({...inputdata,[e.target.name]:e.target.value})
                            }


                        
                            let {pdt,brand,qty}=inputdata;
                            const changehandlee=()=>{
                                setInputarray([...inputarray,{pdt,brand,qty}]);
                                console.log(inputarray)
                                console.log(inputdata)
                                setInputdata({pdt:"",brand:"",qty:""})
                            }

  return (
   
         <><div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar color="secondary" position="static">
          <Toolbar>

            <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontFamily: 'sans-serif' }}>
              ToDo App
            </Typography>
            {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
        </AppBar>

      </Box><br></br><br></br>
      <div className='inputarea'>
         <TextField id="filled-basic1" name="pdt" label="Product" variant="filled" value={inputdata.pdt} onChange={changehandle}/>&nbsp;
        <TextField id="filled-basic2" name='brand' label="Brand" variant="filled" value={inputdata.brand} onChange={changehandle} />&nbsp;
        <TextField id="filled-basic3" name="qty" label="Quantity" variant="filled" value={inputdata.qty} onChange={changehandle} /> 
       
       
      
        
        
        
        <br></br><br></br>

        <Button variant="contained" color="secondary" onClick={changehandlee}>ADD</Button>
      </div>
      <br></br>



     </div><br></br>
     {/* <div className='tablearea'>  */}
        <TableContainer align="center">
         
            <TableHead className='thead'>
            
              <TableRow className="trow">
                <TableCell>Product</TableCell>
                <TableCell>Brand</TableCell>
                <TableCell>Quantity</TableCell>
              </TableRow></TableHead>
              <TableBody>
                { inputarray.map((info,index)=>
                        {
             
                  return(
                    <TableRow key={index}>
                    <TableCell>{info.pdt}</TableCell>
                    <TableCell>{info.brand}</TableCell>
                    <TableCell>{info.qty}</TableCell>
                    </TableRow>
              )
                }
                
                )
}
</TableBody> 

              
              

            
        </TableContainer>

      {/* </div> */}
      </>
  )
}
    
 

export default Todo