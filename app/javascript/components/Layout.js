import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';


const Layout = ({ children }) => {
  const preventDefault = (event) => event.preventDefault();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Espresso App
          </Typography>
          <Button variant="outlined" href="/companies">Empresas</Button>
          <Button variant="outlined" href="/cadastro-funcionario">Funcionários</Button>
          <Button variant="outlined" href="/cadastro-cartao">Cartões</Button>
          <Button variant="outlined" href="/cadastro-categoria">Categorias</Button>
          <Button variant="outlined" href="/login">Login</Button>
        </Toolbar>
      </AppBar>
      <Container padding="6px" >
        {children}
      </Container>
      <Box component="footer" sx={{ bgcolor: 'background.paper', padding: '6px', position: 'fixed', bottom: 0, width: '100%', textAlign: 'center' }}>
        <Typography variant="body1">Espresso App 2024.</Typography>
      </Box>
    </>
  );
};

export default Layout;