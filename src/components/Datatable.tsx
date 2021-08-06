import Divider from '@material-ui/core/Divider';
import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default function ShowTable(){
  return(
    <>
    
    <Divider />
    <FabricanteTable />

    </>
  );
}

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#009add',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(id:any, fabricante:any, data:any) {
  return { id, fabricante, data };
}

const rows = [
  createData(1, 'HP', '2021-07-28'),
  createData(2, 'Kyocera', '2021-07-28'),
  createData(3,'Motorola','2021-07-28'),
  createData(4,'Dell','2021-07-28'),
  createData(5,'Decathlon','2021-07-28'),
];

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});

export function FabricanteTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="right">Fabricante</StyledTableCell>
            <StyledTableCell align="right">Data de Criação</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="right">{row.fabricante}</StyledTableCell>
              <StyledTableCell align="right">{row.data}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
