import Head from 'next/head';
import Header from '../HeaderID/index.js';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Remízek</title>
        <link rel="icon" href="/logo.svg" passHref />
        <link rel="preconnect" href="https://fonts.googleapis.com" passHref />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
          passHref
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik&display=swap"
          rel="stylesheet"
          passHref
        />
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
