// Components
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { useState } from 'react';

// Configurations
const useStyles = makeStyles((theme) => ({
    styles: {
        textAlign: 'center',
        paddingTop: '3rem'
    }
}));


// Template //
export default function Template() {

    const classes = useStyles();

    return(
        <Container className={classes.styles}>
            Template
        </Container>
    );
}
