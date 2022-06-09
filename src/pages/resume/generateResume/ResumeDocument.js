import React from 'react';
import { Page, Document, StyleSheet } from '@react-pdf/renderer';
import ResumeReferences from './ResumeReferences';
import ResumeInterests from './ResumeInterests';
import ResumeIntroduction from './ResumeIntroduction';
import ResumeSkills from './ResumeSkills';
import ResumeAwards from './ResumeAwards';

import Projects from '../../projects/utility/projects';
import ResumeProjects from './ResumeProjects';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
    fontFamily: 'Helvetica',
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 50,
    paddingRight: 50,
    lineHeight: 1.5,
    flexDirection: 'column',
  },
  logo: {
    width: 84,
    height: 70,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

const references = [
  {
    name: 'test name',
    title: ' test title',
    company: 'test company',
    email: 'test email',
    phone: '1-111-1111',
  },
  {
    name: 'test name 2',
    title: ' test title',
    company: 'test company',
    email: 'test email',
  },
  {
    name: 'test name 3',
    title: ' test title',
    company: 'test company',
    phone: '1-111-1111',
  },
];

const outdoorInterests = {
  name: 'Outdoor Activities',
  activities: [
    'Hiking',
    'Kayaking',
    'Camping',
    'Gardening',
    'Motorcycle Riding',
  ],
};
const indoorInterests = {
  name: 'Indoor Activities',
  activities: [
    'Coding',
    'Video Games',
    'Board & Card Games',
    'Latin Dancing',
    'Billiards',
  ],
};

const frontendSkills = {
  name: 'Frontend',
  skills: [
    'ReactJs',
    'HTML',
    'CSS',
    'Jest',
    'Enzyme',
    'Formik',
    'JavaScript',
    'React-Router',
    'ReduxJs',
    'MaterialUI',
    'Bulma',
    'FilePond',
    'Fontawesome',
    'Bootstrap',
    'ElectronJs',
    'MustashJs',
    'HandlebarsJs',
  ],
};
const backendSkills = {
  name: 'Backend',
  skills: ['JavaScript', 'NodeJs', 'Apollo GraphQL', 'ExpressJs', 'REST'],
};
const devopsSkills = {
  name: 'DevOps',
  skills: [
    'MongoDB',
    'Git',
    'Agile Methodologies',
    'Scrum',
    'Active Directory/LDAP',
    'Netlify',
    'Heroku',
    'Microsoft Visual Studios Code',
    'Postman',
    'Azure DevOps',
    'Strapi',
    'Axios',
    'NPM',
    'Stripe',
    'Paypal',
    'Auth0',
    'PowerShell',
  ],
};
const softSkills = {
  name: 'Soft',
  skills: [
    'Problem Solving',
    'Teamwork',
    'Quick Learner',
    'Leadership',
    'Employee Training',
    'Critical Thinking',
    'Project Planning',
    'ProjectProgram Management',
    'Technical Writing',
  ],
};
const skills = [frontendSkills, backendSkills, devopsSkills, softSkills];

const interests = [outdoorInterests, indoorInterests];

const introduction =
  'Software Engineer with 3 years of experience building agile enterprise grade applications for the number 1 fortune 500 retail company. Primarily JavaScript Frontend React focused developer, but can work in backend technologies if the skillset is needed. Willing to learn as needed to accomplish project needs.';

const awards = [
  {
    date: { month: '05', year: '2017' },
    award: 'Home Office Client Associate of the Month',
    company: 'WalMart - April McClure',
    description: '',
  },
  {
    date: { month: '04', year: '2015' },
    award: 'Airman Maintenance Professional of the Quarter',
    company: 'USAF, 22nd Aircraft Maintenance Squadron',
    description: 'Presented for outstanding professionalism for the quarter.',
  },
  {
    date: { month: '01', year: '2015' },
    award: 'Commanders Choice Airman',
    company: 'USAF, 22nd Aircraft Maintenance Squadron',
    description:
      'Presented for outstanding performance during a training exercise.',
  },
  {
    date: { month: '', year: '2011' },
    award: 'Meritorious Unit Award',
    company: 'USAF, Secretary of the Air Force',
    description: `Presented to recognize organizations for outstanding achievement or service in direct support of combat operations. The unit must display such outstanding devotion and superior performance of exceptionally difficult tasks as to set it apart and above other units with similar missions. 2011 - Present`,
  },
];

const PdfDocument = ({ resumeData }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {introduction ? (
          <ResumeIntroduction introduction={introduction} />
        ) : null}
        {interests.length ? <ResumeInterests interests={interests} /> : null}
        {skills.length ? <ResumeSkills skills={skills} /> : null}
        {Projects.length ? <ResumeProjects projects={Projects} /> : null}
        {awards.length ? <ResumeAwards awards={awards} /> : null}
        {references.length ? (
          <ResumeReferences references={references} />
        ) : null}
      </Page>
    </Document>
  );
};

export default PdfDocument;
