import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { RouterProvider } from 'react-router-dom';
import router from './components/Routes';
import { ApolloProvider } from '@apollo/client';
import apolloClient from './constants/apollo-client';
import Guard from './components/auth/Guard';
import Header from './components/header/Header';
import Snackbar from './components/snackbar/Snackbar';
import ChatList from './components/chat-list/ChatList';
import usePath from './hooks/usePath';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Routes = () => (
  <Container>
    <RouterProvider router={router} />
  </Container>
);

const App = () => {
  const { path } = usePath();

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header />
        <Guard>
          {path === '/' ? (
            <Grid container>
              <Grid item md={3}>
                <ChatList />
              </Grid>
              <Grid item md={9}>
                <Routes />
              </Grid>
            </Grid>
          ) : (
            <Routes />
          )}
        </Guard>
        <Snackbar />
      </ThemeProvider>
    </ApolloProvider>
  );
};
export default App;
