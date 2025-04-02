import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#232323',
    },
    secondary: {
      main: '#658d5a',
    },
  },
  typography: {  /*fonte para o conteúdo da tag typography */
    fontFamily: "Bebas Neue",
}
});

theme = responsiveFontSizes(theme); /* comando para fonte responsiva */

export default theme;