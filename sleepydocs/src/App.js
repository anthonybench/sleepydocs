// Default Styling
import './App.css';

// Components
import SleepyContainer from './components/SleepyContainer';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// Configurations
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      // main: '#3368bd',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});


// Application Sub-Entry //
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SleepyContainer />
    </ThemeProvider>
  );
}
