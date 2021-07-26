import Head from 'next/head';
import Header from '../HeaderID/index.js';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Remízek</title>
        <link rel="icon" href="/logo.svg" passHref />
      </Head>
      <header>
        <div className="App">
          <Header />
        </div>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
