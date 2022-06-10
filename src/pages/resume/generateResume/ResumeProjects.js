import { Text, View, StyleSheet } from '@react-pdf/renderer';
import React from 'react';
import ResumeProject from './ResumeProject';

const styles = StyleSheet.create({
  title: { fontFamily: 'Helvetica-Bold', fontSize: '18px' },
  titleWrapper: {
    borderBottomStyle: 'solid',
    borderBottomColor: 'black',
    borderBottomWidth: '2px',
    marginBottom: '5px',
  },
});

const ResumeProjects = ({ projects }) => {
  return (
    <View>
      <div style={styles.titleWrapper}>
        <Text style={styles.title}>Projects</Text>
      </div>
      {projects.map((project) => {
        return <ResumeProject key={project.title} projectData={project} />;
      })}
    </View>
  );
};

export default ResumeProjects;
