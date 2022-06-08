import React from 'react';
import { Page, Document, StyleSheet, Text } from '@react-pdf/renderer';

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

const PdfDocument = ({ resumeData }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text>Test</Text>
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
