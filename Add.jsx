import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import react,{useState} from 'react'

 const Add = ({person}) => {
//   const [count, setCount]= useState(0);
//   let valueAdd=()=>{
//     setCount(count+1)
//   }

    const [form,setForm]= useState(
      {
        fname:person.fname,
        department:person.department,
        semester: person.semester
      }
    )

  function valueCap(e){
    //console.log(e)
    setForm({...form,[e.target.name]:e.target.value})
  }

  let valueAdd=()=>{
    console.log(form)
  }

  return (
    <>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        backgroundColor: 'w#272727', 
        p: 2,  
        borderRadius: 1,  
        boxShadow: 1, 
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" 
            label="Name" 
            variant="outlined" 
            name="fname"
            value={form.fname}
            InputLabelProps={{ style: { color: 'grey' } }} 
            InputProps={{ style: { color: 'white' } }}
            onChange={valueCap}
            />
            <br/>
      <TextField id="outlined-basic" 
            label="Department" 
            variant="outlined" 
            name="department"
            value={form.department}
            InputLabelProps={{ style: { color: 'grey' } }}
            InputProps={{ style: { color: 'white' } }}
            onChange={valueCap}
            />

      <TextField
            id="filled-number"
            label="Semester"
            name="semester"
            value={form.semester}
            type="number"
            InputLabelProps={{ style: { color: 'grey' } }}
            InputProps={{
              style: { color: 'white' },
              inputProps: {
                min: 1,
                max: 8,
                step: 1,
                style: {
                  appearance: 'textfield',
                  MozAppearance: 'textfield',
                  MsAppearance: 'none'
                }
              }
            }}            
          variant="filled"
          onChange={valueCap}
        />
      <Stack spacing={3} direction="row" justifyContent = "center">
      <br/>
      <Button variant="outlined" color="success" onClick={valueAdd} >Submit</Button>
      <br/>
      {/* <large>count is {count}</large> */}
    </Stack>
    </Box>
    </>
  )
}

export default Add
