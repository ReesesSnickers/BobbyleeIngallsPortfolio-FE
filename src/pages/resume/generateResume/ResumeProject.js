import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  project: {
    fontFamily: 'Helvetica-Bold',
  },
  company: {
    fontFamily: 'Helvetica-Oblique',
  },
  date: {
    fontFamily: 'Helvetica-Oblique',
    width: '20%',
    paddingRight: '10px',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  projectWrapper: {
    marginTop: '5px',
    marginBottom: '5px',
  },
  information: {
    width: '80%',
  },
  description: {
    marginLeft: '15px',
  },
});

const ResumeProject = ({ projectData }) => {
  const { startDate, endDate, title, company, description } = projectData;

  const formattedDateString = `${startDate} - ${endDate}`;

  return (
    <View style={styles.projectWrapper}>
      <div style={styles.row}>
        <Text style={styles.date}>{formattedDateString}</Text>
        <div style={styles.information}>
          <div style={styles.row}>
            <Text style={styles.project}>{title}, </Text>
            <Text style={styles.company}>{company}</Text>
          </div>
          <Text style={styles.description}>{description}</Text>
        </div>
      </div>
    </View>
  );
};

export default ResumeProject;
