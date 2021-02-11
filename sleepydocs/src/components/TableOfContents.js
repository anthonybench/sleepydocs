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


// TableOfContents //
export default function TableOfContents() {

    const classes = useStyles();

    return(
        <Container className={classes.styles}>
            <h1>Table of Contents</h1>
        </Container>
    );
}
