import React from 'react';
import { Text, View } from '@react-pdf/renderer';

const ResumeIntroduction = ({ introduction }) => {
  return (
    <View>
      <Text>{introduction}</Text>
    </View>
  );
};

export default ResumeIntroduction;
