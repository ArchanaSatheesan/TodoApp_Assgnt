import React, { useState } from 'react'
import Button from '@mui/material/Button';

const Demo = () => {
    const [inputarray,setInputarray]=useState([])
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
    <div className='app'>
        <input type='text' name='pdt'  placeholder="product" value={inputdata.pdt} onChange={changehandle}/>
        <input type='text' name='brand' placeholder="brand" value={inputdata.brand} onChange={changehandle}/>
        <input type='text' name='qty' placeholder="quantity" value={inputdata.qty} onChange={changehandle}/>

<Button variant='filled' onClick={changehandlee} >ADD</Button>


                <table>
                    <tbody>
                    <tr>
                        <td>product</td>
                        <td>brand</td>
                        <td>quantity</td>
                    </tr>
                    {
                        inputarray.map((info,index)=>
                        {
                            return(
                                <tr key={index}>
                                    <td>{info.pdt}</td>
                                    <td>{info.brand}</td>
                                    <td>{info.qty}</td>
                                </tr>
                            )
                            
                
                        })
                    }
                    </tbody>
                </table>


    </div>
  )
}

export default Demo