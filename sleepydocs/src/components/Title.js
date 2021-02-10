// Components
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

// Configurations
const useStyles = makeStyles((theme) => ({
    styles: {
        textAlign: 'center',
        paddingTop: '3rem'
    }
}));


// Title //
export default function Title() {

    const classes = useStyles();

    return(
        <Container className={classes.styles}>
            <h1>Welcome to Sleepydocs</h1>
        </Container>
    );
}
