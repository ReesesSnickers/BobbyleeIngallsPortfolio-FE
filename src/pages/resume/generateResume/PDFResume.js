import React from 'react';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import PdfDocument from './ResumeDocument';

const PDFResume = () => {
  const fileName = 'BobbyleeIngallsResume.pdf';
  return (
    <>
      <PDFViewer width={800} height={500} showToolbar={false}>
        <PdfDocument />
      </PDFViewer>

      <div className="download-link">
        <PDFDownloadLink document={<PdfDocument />} fileName={fileName}>
          {({ blob, url, loading, error }) =>
            loading ? 'Loading...' : 'Download Invoice'
          }
        </PDFDownloadLink>
      </div>
    </>
  );
};

export default PDFResume;
