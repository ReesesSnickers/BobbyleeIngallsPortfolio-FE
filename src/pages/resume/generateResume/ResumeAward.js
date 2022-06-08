import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  award: {
    fontFamily: 'Helvetica-Bold',
  },
  company: {
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
});

const ResumeAward = ({ awardData }) => {
  const { date, award, company, description } = awardData;
  const formattedDateString = `${date?.month ? date.month + '/' : ''}${
    date?.year
  }`;
  return (
    <View style={styles.awardWrapper}>
      <div style={styles.row}>
        <Text style={styles.date}>{formattedDateString}</Text>
        <div style={styles.information}>
          <div style={styles.row}>
            <Text style={styles.award}>{award}, </Text>
            <Text style={styles.company}>
              {company}
              {description ? ',' : null}
            </Text>
          </div>
          {description ? <Text>{description}</Text> : null}
        </div>
      </div>
    </View>
  );
};

export default ResumeAward;
