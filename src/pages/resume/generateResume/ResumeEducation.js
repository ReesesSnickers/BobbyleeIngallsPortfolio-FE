import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  degree: {
    fontFamily: 'Helvetica-Bold',
  },
  institution: {
    fontFamily: 'Helvetica-Oblique',
  },
  date: {
    fontFamily: 'Helvetica-Oblique',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  awardWrapper: {
    marginTop: '5px',
    marginBottom: '5px',
  },
  information: {
    width: '80%',
  },
  description: {
    marginLeft: '15px',
  },
  dateAndLocationWrapper: {
    width: '20%',
  },
});

const ResumeEducation = ({ educationData }) => {
  const { date, degree, institution, city, state, country, description } =
    educationData;
  const formattedDateString = `${date?.startYear} - ${date?.endYear}`;
  const formattedLocationString = `${city}, ${state}, ${country}`;
  return (
    <View style={styles.awardWrapper}>
      <div style={styles.row}>
        <div style={styles.dateAndLocationWrapper}>
          <Text style={styles.date}>{formattedDateString}</Text>
          <Text>{formattedLocationString}</Text>
        </div>
        <div style={styles.information}>
          <div style={styles.row}>
            <Text style={styles.degree}>{degree}, </Text>
            <Text style={styles.institution}>{institution}</Text>
          </div>
          {description ? (
            <Text style={styles.description}>{description}</Text>
          ) : null}
        </div>
      </div>
    </View>
  );
};

export default ResumeEducation;
