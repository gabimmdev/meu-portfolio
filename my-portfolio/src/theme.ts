import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#708090',
    },
    secondary: {
      main: '#bdc6b5',
    },
  },
  typography: {  /*fonte para o conteúdo da tag typography */
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
}
});

theme = responsiveFontSizes(theme); /* comando para fonte responsiva */

export default theme;