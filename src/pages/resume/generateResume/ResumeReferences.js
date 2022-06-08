import { Text, View, StyleSheet } from '@react-pdf/renderer';
import React from 'react';
import ResumeReference from './ResumeReference';

const styles = StyleSheet.create({
  title: { fontFamily: 'Helvetica-Bold', fontSize: '18px' },
  titleWrapper: {
    borderBottomStyle: 'solid',
    borderBottomColor: 'black',
    borderBottomWidth: '2px',
    marginBottom: '5px',
  },
});

const ResumeReferences = ({ references }) => {
  return (
    <View>
      <div style={styles.titleWrapper}>
        <Text style={styles.title}>References</Text>
      </div>
      {references.map((reference) => {
        return <ResumeReference key={reference.name} reference={reference} />;
      })}
    </View>
  );
};

export default ResumeReferences;
