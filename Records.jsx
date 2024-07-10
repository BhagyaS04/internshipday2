import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'

  
  const rows = [
    {
        name:"Bhagya",
        department:"CS",
        semester:"S5"
    },

    {
      name: "Adish",
      department: "CS",
      semester: "S5"
    },
    
    {
      name:"Navneeth",
      department:"CS",
      semester:"S5"
  },

  {
    name: "Amritha",
    department: "CS",
    semester: "S5"
  },

  {
    name: "Afrina",
    department: "CS",
    semester: "S5"
  },

  {
    name: "Hari",
    department: "CS",
    semester: "S5"
  } 
  ];
  
const Records = () => {
  return (
    <>
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Department</TableCell>
            <TableCell align="right">Semester</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.department}</TableCell>
              <TableCell align="right">{row.semester}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default Records
