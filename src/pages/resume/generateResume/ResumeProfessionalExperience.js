import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  position: {
    fontFamily: 'Helvetica-Bold',
  },
  company: {
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
  responsabilities: {
    marginLeft: '15px',
  },
  dateAndLocationWrapper: {
    width: '20%',
  },
});

const ResumeProfessionalExperience = ({ professionalExperienceData }) => {
  const {
    date,
    position,
    company,
    city,
    state,
    country,
    responsabilities = [],
  } = professionalExperienceData;
  const startDateFormattedString = `${
    date?.startDate?.month ? date?.startDate?.month + '/' : ''
  }${date?.startDate?.year}`;
  const endDateFormattedString = `${
    date?.endDate?.month ? date?.endDate?.month + '/' : ''
  }${date?.endDate?.year}`;
  const formattedDateString = `${startDateFormattedString} - ${endDateFormattedString}`;
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
            <Text style={styles.position}>{position}, </Text>
            <Text style={styles.company}>{company}</Text>
          </div>
          {responsabilities.length ? (
            <div>
              {responsabilities.map((responsability, i) => {
                return (
                  <Text key={i} style={styles.responsabilities}>
                    {`\u2022  ${responsability}`}
                  </Text>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </View>
  );
};

export default ResumeProfessionalExperience;
