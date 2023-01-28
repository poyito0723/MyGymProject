import { users } from "../../data";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

function Table({rowNames,rowItems,rowFields}) {
  return (
    <div className="p-4">
      <h1 className="text-lg font-medium pb-2">LISTA DE USUARIOS</h1>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>NOMBRE COMPLETO</TableCell>
                <TableCell align="center">USUARIO</TableCell>
                <TableCell align="center">TIPO DE USUARIO</TableCell>

                <TableCell align="center">ACCIONES</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rowItems.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.nombreCompleto}
                  </TableCell>
                  <TableCell align="center">{row.usuario}</TableCell>
                  <TableCell align="center">{row.type}</TableCell>

                  <TableCell align="center">
                    <Button onClick={() => console.log(row.id)}>
                      Editar
                    </Button>
                    <Button onClick={() => console.log(row.id)}>
                      Eliminar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Table;
