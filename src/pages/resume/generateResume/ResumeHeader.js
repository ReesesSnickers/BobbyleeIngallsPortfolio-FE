import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import Consts from '../../../utility/constants/consts';
import URLs from '../../../utility/constants/urls';

const styles = StyleSheet.create({
  name: {
    fontFamily: 'Helvetica-Bold',
    fontSize: '25px',
  },
  position: {
    fontFamily: 'Helvetica-Oblique',
    fontSize: '20px',
    marginTop: '5px',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  wrapper: {
    padding: '30px 50px',
    backgroundColor: '#c7d5eb',
  },
  addTopMargin: {
    marginTop: '10px',
  },
});

const ResumeHeader = () => {
  return (
    <View style={styles.wrapper}>
      <div style={styles.row}>
        <div style={styles.column}>
          <div style={styles.row}>
            <Text style={styles.name}>{Consts.FULL_NAME} </Text>
            <Text style={styles.position}>{Consts.BASE_JOB}</Text>
          </div>
          <div style={styles.row}>
            <div>
              <Text>{Consts.ADDRESS}</Text>
              <Text style={styles.addTopMargin}>{Consts.PHONE}</Text>
              <Text style={styles.addTopMargin}>{Consts.DOB}</Text>
              <Text style={styles.addTopMargin}>{URLs.LINKEDIN}</Text>
              <Text style={styles.addTopMargin}>{URLs.CODEPEN}</Text>
            </div>
            <div>
              <Text>{Consts.EMAIL}</Text>
              <Text style={styles.addTopMargin}>{URLs.WEBSITE}</Text>
              <Text style={styles.addTopMargin}>
                United States Air Force Active Duty
              </Text>
              <Text style={styles.addTopMargin}>{URLs.GITHUB}</Text>
            </div>
          </div>
        </div>
        {/* <Image /> */}
      </div>
    </View>
  );
};

export default ResumeHeader;
