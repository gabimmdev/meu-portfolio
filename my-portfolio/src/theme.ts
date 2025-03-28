import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#878f78',
    },
    secondary: {
      main: '#bdc6b5',
    },
  },
  typography: {
    fontFamily: "Apple Color Emoji"
}
});

theme = responsiveFontSizes(theme);

export default theme;