import { Text, View, StyleSheet } from '@react-pdf/renderer';
import React from 'react';
import ResumeEducation from './ResumeEducation';

const styles = StyleSheet.create({
  title: { fontFamily: 'Helvetica-Bold', fontSize: '18px' },
  titleWrapper: {
    borderBottomStyle: 'solid',
    borderBottomColor: 'black',
    borderBottomWidth: '2px',
    marginBottom: '5px',
  },
});

const ResumeEducations = ({ educations }) => {
  return (
    <View>
      <div style={styles.titleWrapper}>
        <Text style={styles.title}>Education</Text>
      </div>
      {educations.map((education) => {
        return (
          <ResumeEducation key={education.degree} educationData={education} />
        );
      })}
    </View>
  );
};

export default ResumeEducations;
