import React from 'react';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ErrorBoundary from './ui/error/ErrorBoundary';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <Container component="main" maxWidth="xs">
          <h1>Hello World!</h1>
        </Container>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
