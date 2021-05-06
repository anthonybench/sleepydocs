// Components
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container } from '@material-ui/core'

// Configurations
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      paddingTop: '6rem'
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '60vw'
    },
    inputText: {
        fontSize: '40px',
    },
    labelText: {
        fontSize: '30px',
        marginRight: '5rem',
        paddingRight: '5rem'
    }
}));


// NOTE: using the invisible unicode character for outline border fix: https://www.compart.com/en/unicode/U+2800
// NOTE: this was helpful: https://stackoverflow.com/questions/46966413/how-to-style-material-ui-textfield
// SearchBar //
export default function SearchBar() {

    const classes = useStyles();

    return (
        <Container className={classes.root}>
                <TextField
                    id="outlined-full-width-basic"
                    label="⠀Search Sleepydocs ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
                    style={{ padding: 4 }}
                    inputProps={{ className: classes.inputText }}
                    InputLabelProps={{ className: classes.labelText }}
                    placeholder="seek your fortune"
                    defaultValue="seek your fortune"
                    helperText="I appear in the bottom left corner"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    className={classes.textField}
                    color="secondary"
                />
        </Container>
    );
};
