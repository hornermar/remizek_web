import Head from 'next/head';
import Header from '../HeaderID/index.js';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Remízek</title>
        <link rel="icon" href="/logo.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header>
        <div className="App">{/* <Header /> */}</div>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
