import { Text, View, StyleSheet } from '@react-pdf/renderer';
import React from 'react';
import ResumeAward from './ResumeAward';

const styles = StyleSheet.create({
  title: { fontFamily: 'Helvetica-Bold', fontSize: '18px' },
  titleWrapper: {
    borderBottomStyle: 'solid',
    borderBottomColor: 'black',
    borderBottomWidth: '2px',
    marginBottom: '5px',
  },
});

const ResumeAwards = ({ awards }) => {
  return (
    <View>
      <div style={styles.titleWrapper}>
        <Text style={styles.title}>Awards</Text>
      </div>
      {awards.map((award) => {
        return <ResumeAward key={award.award} awardData={award} />;
      })}
    </View>
  );
};

export default ResumeAwards;
