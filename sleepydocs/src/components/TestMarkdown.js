// Components
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { useState } from 'react';
import raw from './test.md';
import ReactMarkdown from 'react-markdown';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'
const gfm = require('remark-gfm');

// Configurations
const useStyles = makeStyles((theme) => ({
    styles: {
        textAlign: 'left',
        paddingTop: '3rem',
        color: 'white',
        backgroundColor: 'grey'
    }
}));
const renderers = {
    code: ({language, value}) => {
      return <SyntaxHighlighter style={dark} language={language} children={value} />
    }
}


// TestMarkdown //
export default function TestMarkdown() {

    const classes = useStyles();
    const [docText, setDocText] = useState('');

    // File Fetch
    fetch(raw)
    .then(r => r.text())
    .then(text => {
        console.log(text);
        setDocText(text);
    });

    return(
        <Container className={classes.styles}>
            <h1>TEST MARKDOWN</h1>
            <hr />
            <div><ReactMarkdown plugins={[gfm]} renderers={renderers} allowDangerousHtml={true} children={docText} /></div>
        </Container>
    );
}
