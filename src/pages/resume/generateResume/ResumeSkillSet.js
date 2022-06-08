import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  name: {
    fontFamily: 'Helvetica-Bold',
  },
  skills: {
    fontFamily: 'Helvetica-Oblique',
  },
  skillSetWrapper: {
    maxWidth: '23%',
  },
});

const ResumeSkillSet = ({ name, skills }) => {
  skills = skills.join(', ');
  return (
    <View style={styles.skillSetWrapper}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.skills}>{skills}</Text>
    </View>
  );
};

export default ResumeSkillSet;
