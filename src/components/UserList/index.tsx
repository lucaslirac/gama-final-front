import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



type UserProps = {

    _id: string
    name: string;
    email: string;
    role: number;
   
  };

export default function ListUser(props: UserProps) {

  const [text, setText] = useState('');

  const handleClick = () => {
    setText('admin');
  };
  const navigate = useNavigate();
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
              <TableCell component="th" scope="row"  align="left">
              {props.name}
              </TableCell>
              <TableCell align="center"> { props.email }</TableCell>

              <TableCell align="right">{props.role}  <Button variant="outline-dark" size='sm'  onClick={() => navigate(`/EditUser/${props._id}`)}>Editar</Button>  <Button variant="outline-dark" size='sm'>Excluir</Button></TableCell>
            
            </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
  );
}