import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import styles from '../../styles/Philosophy.module.css';

const PhilosophyContent = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <section className={styles.philosophy}>
      <div className={styles.containerPhilosophy}>
        <h1>FILOSOFIE SPOLKU</h1>
        <p>
          Jsme hierarchičtí. Uznáváme rovnoprávnost a smutek z probíhající
          klimatické krize měníme na činy - myslíme globálně, jednáme lokálně.
          Společně můžeme ovlivnit mnohé.
        </p>
        <button>Stanovy</button>
      </div>

      {/* <div>
        <Document file="stanovys.pdf" onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div> */}
    </section>
  );
};

export default PhilosophyContent;
