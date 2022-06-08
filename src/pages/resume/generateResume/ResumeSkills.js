import { Text, View, StyleSheet } from '@react-pdf/renderer';
import React from 'react';
import ResumeSkillSet from './ResumeSkillSet';

const styles = StyleSheet.create({
  title: { fontFamily: 'Helvetica-Bold', fontSize: '18px' },
  titleWrapper: {
    borderBottomStyle: 'solid',
    borderBottomColor: 'black',
    borderBottomWidth: '2px',
    marginBottom: '5px',
  },
  skillSetWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const ResumeSkills = ({ skills }) => {
  return (
    <View>
      <div style={styles.titleWrapper}>
        <Text style={styles.title}>Skills</Text>
      </div>
      <div style={styles.skillSetWrapper}>
        {skills.map((skill) => {
          return (
            <ResumeSkillSet
              key={skill.name}
              name={skill.name}
              skills={skill.skills}
            />
          );
        })}
      </div>
    </View>
  );
};

export default ResumeSkills;
