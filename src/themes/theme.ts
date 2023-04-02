import { createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#f97aab',
        },
        secondary: {
            main: '#424242',
        },
        text: {
            primary: '#f97aab',
            secondary: '#6c6767',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    color: '#FFF',
                    borderRadius: '4',
                    backgroundColor: '#f97aab',
                    textTransform: 'none',
                    fontWeight: 'bold',
                    paddingTop: '12px',
                    paddingBottom: '12px',
                    ":hover": {
                        backgroundColor: '#F52273',
                    }

                },
            },
        },
        MuiTextField: {
            defaultProps: {
                InputLabelProps: {
                    required: false,
                },
                required: true,
            },
        },
    },
});

export default theme;