import { Text, View, StyleSheet } from '@react-pdf/renderer';
import React from 'react';
import ResumeCourse from './ResumeCourse';

const styles = StyleSheet.create({
  title: { fontFamily: 'Helvetica-Bold', fontSize: '18px' },
  titleWrapper: {
    borderBottomStyle: 'solid',
    borderBottomColor: 'black',
    borderBottomWidth: '2px',
    marginBottom: '5px',
  },
});

const ResumeCourses = ({ courses }) => {
  return (
    <View>
      <div style={styles.titleWrapper}>
        <Text style={styles.title}>Courses</Text>
      </div>
      {courses.map((course) => {
        return <ResumeCourse key={course.course} courseData={course} />;
      })}
    </View>
  );
};

export default ResumeCourses;
