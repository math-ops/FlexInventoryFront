//criar uma tabela que mostre todas as informações dos tonners
//a tabela pode conter ou não um filtro


//importação dos componentes do Material-UI
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { Subtitle } from '../styles/app';
import api from './services/api';

import Moment from 'react-moment';


//Definindo as Colunas
interface Column {
  id: 'id' | 'nm_fabricante' | 'data';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

//Ajustando a formatação das Colunas
const columns: Column[] = [
  { id: 'id', label: 'ID', minWidth: 100 },
  { id: 'nm_fabricante', label: 'Fabricante', minWidth: 270 },
  { id: 'data', label: 'Data', minWidth: 270 },
];

//Definindo os tipos de informações
interface Data {
  id: number;
  nm_fabricante: string;
  data: string;
}

function createData(id: number, nm_fabricante: string, data: string): Data {
  return { id, nm_fabricante, data };
}

const rows = [
  createData(1, 'Kyocera','2020-07-29'),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
    marginTop: '40px',
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Subtitle>Lista de Fabricantes</Subtitle>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.nm_fabricante}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}

