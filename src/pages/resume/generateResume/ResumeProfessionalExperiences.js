import { Text, View, StyleSheet } from '@react-pdf/renderer';
import React from 'react';
import ResumeProfessionalExperience from './ResumeProfessionalExperience';

const styles = StyleSheet.create({
  title: { fontFamily: 'Helvetica-Bold', fontSize: '18px' },
  titleWrapper: {
    borderBottomStyle: 'solid',
    borderBottomColor: 'black',
    borderBottomWidth: '2px',
    marginBottom: '5px',
  },
});

const ResumeProfessionalExperiences = ({ professionalExperiences }) => {
  return (
    <View>
      <div style={styles.titleWrapper}>
        <Text style={styles.title}>Professional experience</Text>
      </div>
      {professionalExperiences.map((experience) => {
        const { date, company, position } = experience;
        const key = `${company}-${position}-${date?.startDate?.year}${date?.endDate?.year}`;
        return (
          <ResumeProfessionalExperience
            key={key}
            professionalExperienceData={experience}
          />
        );
      })}
    </View>
  );
};

export default ResumeProfessionalExperiences;
