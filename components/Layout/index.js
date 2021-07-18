import Head from 'next/head';
import Header from '../Header/index.js';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Remízek</title>
        {/* <meta name="description" content="Umění u metra" />
        <link rel="icon" href="/favicon.ico" /> */}
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

export const AppNav = () => {
  return (
    <div className="App">
      <Navbar />
      App
    </div>
  );
};

export default Layout;
