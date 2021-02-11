// Components
import Title from './Title';
import SearchBar from './SearchBar';
import TableOfContents from './TableOfContents';
import Philosophy from './Philosophy';
import TestMarkdown from './TestMarkdown';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

// Configurations
const useStyles = makeStyles((theme) => ({
    styles: {
        textAlign: 'center',
        paddingTop: '3rem'
    }
}));


// SleepyContainer //
export default function SleepyContainer() {

    const classes = useStyles();

    return (
        <Container maxWidth className={classes.styles}>
            <Title />
            <SearchBar />
            <TableOfContents />
            <Philosophy />
            <TestMarkdown />
        </Container>
    );
};
