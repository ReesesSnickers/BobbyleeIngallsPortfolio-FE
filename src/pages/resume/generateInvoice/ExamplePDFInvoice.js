import React from 'react';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import PdfDocument from './Invoice';
import InvoiceData from './jsonData/invoiceData';

const ExamplePDFInvoice = () => {
  const fileName = 'Invoice.pdf';
  return (
    <>
      <PDFViewer width={800} height={500} showToolbar={false}>
        <PdfDocument invoicedata={InvoiceData} />
      </PDFViewer>

      <div className="download-link">
        <PDFDownloadLink
          document={<PdfDocument invoicedata={InvoiceData} />}
          fileName={fileName}
        >
          {({ blob, url, loading, error }) =>
            loading ? 'Loading...' : 'Download Invoice'
          }
        </PDFDownloadLink>
      </div>
    </>
  );
};

export default ExamplePDFInvoice;
