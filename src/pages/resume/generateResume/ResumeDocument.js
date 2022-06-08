import React from 'react';
import { Page, Document, StyleSheet } from '@react-pdf/renderer';
import ResumeReferences from './ResumeReferences';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
    fontFamily: 'Helvetica',
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 50,
    paddingRight: 50,
    lineHeight: 1.5,
    flexDirection: 'column',
  },
  logo: {
    width: 84,
    height: 70,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

const references = [
  {
    name: 'test name',
    title: ' test title',
    company: 'test company',
    email: 'test email',
    phone: '1-111-1111',
  },
  {
    name: 'test name 2',
    title: ' test title',
    company: 'test company',
    email: 'test email',
  },
  {
    name: 'test name 3',
    title: ' test title',
    company: 'test company',
    phone: '1-111-1111',
  },
];

const PdfDocument = ({ resumeData }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {references.length ? (
          <ResumeReferences references={references} />
        ) : null}
        {/* <Image style={styles.logo} src={logo} /> */}
        {/* <InvoiceTitle title={'Invoice'} />
        <InvoiceNo invoice={invoicedata} />
        <BillTo invoice={invoicedata} />
        <InvoiceItemsTable invoice={invoicedata} />
        <InvoiceThankYouMsg /> */}
      </Page>
    </Document>
  );
};

export default PdfDocument;
