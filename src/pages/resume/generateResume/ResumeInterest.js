import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Helvetica-Bold',
  },
  interests: {
    fontFamily: 'Helvetica-Oblique',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
});

const ResumeInterest = ({ name, interests = [] }) => {
  interests = interests.join(', ');
  return (
    <View>
      <div style={styles.row}>
        <Text style={styles.title}>{name}: </Text>
        <Text style={styles.interests}>({interests})</Text>
      </div>
    </View>
  );
};

export default ResumeInterest;
