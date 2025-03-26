import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#232323',
    },
    secondary: {
      main: '#9c27b0',
    },
  },
  typography: {
    fontFamily: "Apple Color Emoji"
}
});

theme = responsiveFontSizes(theme);

export default theme;