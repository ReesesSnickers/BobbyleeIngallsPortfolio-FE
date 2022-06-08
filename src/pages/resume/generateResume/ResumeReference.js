import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  referenceWrapper: {
    marginTop: '5px',
    marginBottom: '5px',
  },
  name: {
    fontFamily: 'Helvetica-Bold',
  },
  title: {
    fontFamily: 'Helvetica-Oblique',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
});

const ResumeReference = ({ reference }) => {
  const { name, title, company, email, phone } = reference;
  return (
    <View style={styles.referenceWrapper}>
      <div style={styles.row}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.title}>, {title},</Text>
        <Text> {company}</Text>
      </div>
      <div style={styles.row}>
        {email ? (
          <Text>
            {email}
            {phone ? ',' : null}
          </Text>
        ) : null}
        {phone ? <Text> {phone}</Text> : null}
      </div>
    </View>
  );
};

export default ResumeReference;
