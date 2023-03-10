import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from 'react-bootstrap/Button';



type UserProps = {
  
    name: string;
    email: string;
    role: number;
   
  };

export default function ListUser(props: UserProps) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right"></TableCell>
          
            <TableCell align="right"></TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              {props.name}
              </TableCell>
              <TableCell align="center">{props.email}</TableCell>
              
              <TableCell align="right">{props.role}  <Button variant="outline-dark" size='sm'>Mudar</Button> </TableCell>
            
            </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
  );
}