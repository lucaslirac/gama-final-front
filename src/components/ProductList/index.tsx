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



type ProductProps = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}


export default function ListProduct(props: ProductProps) {

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
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
              {props.description}
            </TableCell>
            <TableCell align="center">{props.name}</TableCell>

            <TableCell align="right">{props.price}  <Button variant="outline-dark" size='sm'>Excluir</Button></TableCell>

          </TableRow>

        </TableBody>
      </Table>
    </TableContainer>
  );
}