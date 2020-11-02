
import { reduxWrapper, NextApp, MyHead } from 'eventjuicer-site-components';
import Head from 'next/head'

const MyCustomApp = (props) => <NextApp {...props} head={
    <MyHead image="https://res.cloudinary.com/eventjuicer/image/upload/w_1500,h_1000,c_fit/v1604012184/ega/award1.jpg" titleLabel="awards.opengraph.name" descriptionLabel="awards.opengraph.description" url="/">{(data) => <Head>{data}</Head>}</MyHead> 
} />

export default reduxWrapper.withRedux(MyCustomApp)