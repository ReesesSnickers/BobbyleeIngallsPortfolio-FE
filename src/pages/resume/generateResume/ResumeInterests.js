import { Text, View, StyleSheet } from '@react-pdf/renderer';
import React from 'react';
import ResumeInterest from './ResumeInterest';

const styles = StyleSheet.create({
  title: { fontFamily: 'Helvetica-Bold', fontSize: '18px' },
  titleWrapper: {
    borderBottomStyle: 'solid',
    borderBottomColor: 'black',
    borderBottomWidth: '2px',
    marginBottom: '5px',
  },
});

const ResumeInterests = ({ interests }) => {
  return (
    <View>
      <div style={styles.titleWrapper}>
        <Text style={styles.title}>Interests</Text>
      </div>
      {interests.map((interest) => {
        const { name, activities } = interest;
        return <ResumeInterest key={name} name={name} interests={activities} />;
      })}
    </View>
  );
};

export default ResumeInterests;
