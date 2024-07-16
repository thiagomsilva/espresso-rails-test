import React from "react";
import PropTypes from "prop-types";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Button, Alert, Stack } from "@mui/material";
import Layout from './Layout';

const Company = ({ companies }) => {
  const companiesData = JSON.parse(companies);

  const deleteCompany = async (id) => {
    try {
      const response = await fetch(`/companies/${id}`, {
        method: 'DELETE',
        headers: {
          'X-CSRF-Token': token
        },
      });

      if (response.ok) {
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert severity="success">Empresa foi excluída.</Alert>
        </Stack>
      } else {
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert severity="error">This is an error Alert.</Alert>
        </Stack>
      }
    } catch (error) {
      console.error("Erro ao excluir a empresa");
    }
  };

  return (
    <Layout>
      <br />
      <Container maxWidth="xl" >
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nome da empresa</TableCell>
                <TableCell align="right">CNPJ</TableCell>
                <TableCell align="right">Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {companiesData.map((company) => (
                <TableRow key={company.id}>
                  <TableCell component="th" scope="row">
                    {company.name}
                  </TableCell>
                  <TableCell align="right">{company.cnpj}</TableCell>
                  <TableCell align="right">
                    <IconButton aria-label="edit" component="a" href={`/companies/${company.id}/edit`}>
                      <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete" onClick={() => deleteCompany(company.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        <Button variant="contained" color="primary" href="/companies/new">Nova Empresa</Button>
      </Container>
    </Layout>
  );
};

Company.propTypes = {
  companies: PropTypes.string.isRequired,
};

export default Company;