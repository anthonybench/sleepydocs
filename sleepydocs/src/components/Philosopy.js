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


// Philosophy //
export default function Philosophy() {

    const classes = useStyles();

    return(
        <Container className={classes.styles}>
            <h2>Philosophy</h2>
        </Container>
    );
}
