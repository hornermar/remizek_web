import Head from 'next/head';
import Footer from '../Footer';
// import Header from '../HeaderID/index.js';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Remízek</title>
        <link rel="icon" href="/logo.svg" passHref />
      </Head>
      <header>
        <div className="App">{/* <Header /> */}</div>
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
