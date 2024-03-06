import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import PermanentDrawer from './common/PermanentDrawer';
import { palette } from './theme/palette';


const theme = createTheme({
  palette: palette(),
});

function App() {
  return (
    <Box className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PermanentDrawer />
      </ThemeProvider>
    </Box>
  );
}

export default App;
