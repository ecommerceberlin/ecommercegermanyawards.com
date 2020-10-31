
import { reduxWrapper, NextApp, MyHead } from 'eventjuicer-site-components';
import Head from 'next/head'

const MyCustomApp = (props) => <NextApp {...props} head={
    <MyHead titleLabel="awards.opengraph.name" descriptionLabel="awards.opengraph.description" url="/">{(data) => <Head>{data}</Head>}</MyHead> 
} />

export default reduxWrapper.withRedux(MyCustomApp)