import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  course: {
    fontFamily: 'Helvetica-Bold',
  },
  institution: {
    fontFamily: 'Helvetica-Oblique',
  },
  date: {
    fontFamily: 'Helvetica-Oblique',
    width: '20%',
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
  url: {
    marginLeft: '15px',
  },
});

const ResumeAward = ({ courseData }) => {
  const { date, course, institution, url } = courseData;
  const startDateFormattedString = `${date?.startDate?.month}/${date?.startDate?.year}`;
  const endDateFormattedString = `${date?.endDate?.month}/${date?.endDate?.year}`;
  const formattedDateString = `${startDateFormattedString} - ${endDateFormattedString}`;

  return (
    <View style={styles.awardWrapper}>
      <div style={styles.row}>
        <Text style={styles.date}>{formattedDateString}</Text>
        <div style={styles.information}>
          <div style={styles.row}>
            <Text style={styles.course}>{course}, </Text>
            <Text style={styles.institution}>{institution}</Text>
          </div>
          {url ? <Text style={styles.url}>{url}</Text> : null}
        </div>
      </div>
    </View>
  );
};

export default ResumeAward;
