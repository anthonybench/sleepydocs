// Default Styling
import './App.css';

// Components
import SleepyContainer from './components/SleepyContainer';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// Configurations
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#84CEEB',
      main: '#5680E9',
      // main: '#3368bd',
      dark: '#724bbb',
      contrastText: '#f5f5f5',
    },
    secondary: {
      // light: '#ff7961',
      main: '#000000',
      // dark: '#ba000d',
      // contrastText: '#000',
    },
    type: 'dark',
  },
});


// Application Sub-Entry //
export default function App() {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <SleepyContainer />
    </ThemeProvider>
  );
}
