import React from 'react';
import { Page, Document, StyleSheet } from '@react-pdf/renderer';
import ResumeReferences from './ResumeReferences';
import ResumeInterests from './ResumeInterests';
import ResumeIntroduction from './ResumeIntroduction';
import ResumeSkills from './ResumeSkills';
import ResumeAwards from './ResumeAwards';

import Projects from '../../projects/utility/projects';
import ResumeProjects from './ResumeProjects';
import ResumeCourses from './ResumeCourses';
import ResumeEducations from './ResumeEducations';
import ResumeProfessionalExperiences from './ResumeProfessionalExperiences';

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

const courses = [
  {
    date: {
      startDate: { month: '03', year: '2022' },
      endDate: { month: '03', year: '2022' },
    },
    course: 'Microservices Foundations',
    institution: 'LinkedIn',
    url: 'https://www.linkedin.com/learning/microservices-foundations',
  },
  {
    date: {
      startDate: { month: '03', year: '2022' },
      endDate: { month: '03', year: '2022' },
    },
    course: 'Cloud Native Twelve-Factor Applications',
    institution: 'LinkedIn',
    url: 'https://www.linkedin.com/learning/cloud-native-twelve-factor-applications/leverage-twelve-factor-methodologies?u=26192810',
  },
  {
    date: {
      startDate: { month: '06', year: '2021' },
      endDate: { month: '06', year: '2021' },
    },
    course: 'React Hooks',
    institution: 'LinkedIn',
    url: 'https://www.linkedin.com/learning/react-js-building-an-interface-8551484?replacementOf=react-js-building-an-interface-2019',
  },
  {
    date: {
      startDate: { month: '11', year: '2020' },
      endDate: { month: '11', year: '2020' },
    },
    course: 'React.js: Building an Interface',
    institution: 'LinkedIn',
    url: 'https://www.linkedin.com/learning/react-js-building-an-interface-8551484?replacementOf=react-js-building-an-interface-2019',
  },
  {
    date: {
      startDate: { month: '10', year: '2020' },
      endDate: { month: '10', year: '2020' },
    },
    course: 'Learning React.js',
    institution: 'LinkedIn',
    url: 'https://www.linkedin.com/learning/learning-react-js-5',
  },
  {
    date: {
      startDate: { month: '10', year: '2020' },
      endDate: { month: '10', year: '2020' },
    },
    course: 'Learning S.O.L.I.D. Programming Principles',
    institution: 'LinkedIn',
    url: 'https://www.linkedin.com/learning/learning-s-o-l-i-d-programming-principles',
  },
  {
    date: {
      startDate: { month: '10', year: '2020' },
      endDate: { month: '10', year: '2020' },
    },
    course: 'Node.js Essential Training',
    institution: 'LinkedIn',
    url: 'https://www.linkedin.com/learning/node-js-essential-training-2',
  },
  {
    date: {
      startDate: { month: '10', year: '2020' },
      endDate: { month: '10', year: '2020' },
    },
    course: 'React.js Essential Training',
    institution: 'LinkedIn',
    url: 'https://www.linkedin.com/learning/react-js-essential-training?replacementOf=react-js-essential-training-2018',
  },
  {
    date: {
      startDate: { month: '10', year: '2020' },
      endDate: { month: '10', year: '2020' },
    },
    course: 'React: Context API Development',
    institution: 'LinkedIn',
    url: 'https://www.linkedin.com/learning/react-context-api-development',
  },
  {
    date: {
      startDate: { month: '10', year: '2020' },
      endDate: { month: '10', year: '2020' },
    },
    course: 'React: Ecosystems',
    institution: 'LinkedIn',
    url: 'https://www.linkedin.com/learning/react-ecosystems',
  },
  {
    date: {
      startDate: { month: '10', year: '2020' },
      endDate: { month: '10', year: '2020' },
    },
    course: 'GraphQL Essential Training',
    institution: 'LinkedIn',
    url: 'https://www.linkedin.com/learning/graphql-essential-training',
  },
];

const educations = [
  {
    degree: 'Associate of Arts (A.A.) - Liberal Arts & Science/Liberal Studies',
    date: { startYear: '2012', endYear: '2018' },
    city: 'Wichita',
    state: 'Kansas',
    country: 'United States',
    institution: 'Butler Community College',
    institutionWebsiteUrl: 'https://butlercc.edu/',
    description: `Classes taken: \n\u2022 Physical Education \n\u2022 Art Appreciation \n\u2022 U.S. History I`,
  },
  {
    degree: 'High School Diploma',
    date: { startYear: '1995', endYear: '2010' },
    city: 'Pea Ridge',
    state: 'Arkansas',
    country: 'United States',
    institution: 'Pea Ridge High School',
    institutionWebsiteUrl: '',
    description: '',
  },
];

const professionalExperiences = [
  {
    date: {
      startDate: { month: '', year: '2019' },
      endDate: { month: '', year: 'Present' },
    },
    city: 'Bentonville',
    state: 'Arkansas',
    country: 'United States',
    position: 'Software Engineer',
    company: 'Walmart',
    responsabilities: [
      'Adhere to all relevant coding guidelines (Ex: code review processes, code branching strategies, reusability etc.) while writing/configuring code.',
      'Create/configure minimalistic (Less Complex, Highly Robust and high quality) code for a component/module under guidance.',
      'Maintain records by documenting program development and revisions.',
      'Stay updated on the prevalent coding languages and frameworks in the industry outside the immediate scope of delivery.',
      'Identify repetitive and routine tasks in (Continuous Integration/Continuous Delivery) CI/CD, Testing or any other process that can be automated.',
      'Implement telemetry features as required under guidance.',
      'Apply security policy requirements to component/module during code development/configuration.',
      'Identify and create test cases for the task/story.',
      'Map test cases to business and functional requirements.',
      'Comprehend different types of testing and testing tools and can execute them under guidance.',
      'Execute test cases to test the code and detect errors and defects for the component/module under guidance.',
      'Evaluate test results against desired performance, standards, and usability outcomes.',
      'Detect and document defects, bugs and errors for the component/module and conduct analysis to determine source of error under guidance.',
      'Troubleshoot performance and availability bottlenecks for the application under guidance.',
      'Failover incase of an Issue.',
      'Carry out routine maintenance of applications under guidance.',
      'Comprehend applicable application monitoring metrics (for example transaction volume etc.) and can track and analyze them under guidance.',
      'Assist in performing maintenance (corrective, adaptive, perfective) and re- engineering activities.',
      'Understand the concept to Maintenance Debt and implications on allied areas.',
      'Ensure adherence to the project agains approved milestones and timelines.',
      'Serve as a Walmart ambassador and models our values in everyday behavior to foster our culture.',
      'Maintain and promote the highest standards of integrity, ethics and compliance.',
      'Serve the customer by knowing and empathizing with them.',
      'Demonstrate and encourage respect for others. Set high expectations for oneself. Hold self accountable for results. Implement and support ideas that drive exceptional results and create better experiences for our customers.',
      'Align personal goals and objectives with core values and strategic priorities.',
      'Support initiatives to enhance sustainability and ensure shared value across stakeholders.',
      'Contribute to a psychologically safe and inclusive environment where individuals feel respected and diversity is appreciated in all its forms.',
      'Put the interests of the company and others before self.',
      'Be humble and self-aware. Is always honest and transparent.',
      'Demonstrate awareness of how own behaviors, actions, or words affect others and adjusts accordingly Maintain a keen awareness of own strengths and development opportunities by consistently seeking feedback and engaging in self-reflection.',
      'Be Curious and constantly open to learning and applying new concepts; display a growth mindset. Seek opportunities for collaboration to broaden knowledge and capabilities.',
      'Support innovation and intelligent risk-taking while challenging the status quo.',
    ],
  },
  {
    date: {
      startDate: { month: '08', year: '2016' },
      endDate: { month: '02', year: '2019' },
    },
    city: 'Bentonville',
    state: 'Arkansas',
    country: 'United States',
    position: 'Field Support Technician',
    company: 'Walmart',
    responsabilities: [
      'Perform level one troubleshooting on over 150 software used for business daily operation throughout Home Office and Distribution Centers.',
      'Perform level one troubleshooting on Windows 7 and Windows 10 Operating Systems',
      'Identify, Document, and report trends based on call, team, and ticket data.',
      'Train and monitor team members based on skill level requirements.',
      'Understand and use troubleshooting documentation.',
      'Identify and program scripts to increase workflow.',
      'Provide excellent customer service via email, phone, and chats to perform or schedule troubleshooting.',
      'Meet or exceed department and team-based goals.',
      'Meet or exceed department Quality Assurance goals.',
      'Write automated scripts to assist in technician efficiencies.',
      'Write scripts to automate self-help for customers.',
      'Maintain Home Office Client team specific tools using various coding languages.',
    ],
  },
  {
    date: {
      startDate: { month: '08', year: '2010' },
      endDate: { month: '08', year: '2016' },
    },
    city: '',
    state: '',
    country: 'United States',
    position: 'Aerospace Maintenance Journeyman (Crew Chief)',
    company: 'United States Air Force',
    responsabilities: [
      'Preform specialized aircraft ground inspections prior to and after flights.',
      'Identify and document aircraft discrepancies and ensure accuracy of automated and paper forms.',
      'Maintain, troubleshoot and service KC135 aircraft.',
      'Perform aircraft ground handling task such as refuel, defuel and towing.',
      'Remove and replace, adjust, rig, align, and conduct functional checks of aircraft structures and components.',
      'Inventory, inspect and maintain tool kits, test equipment and vehicles worth over $15 million using TCMAX accountability program.',
      'Create, maintain, and control flight line driving records.',
      'Manage and maintain bench stock and shop stock parts programs.',
      'Inspect and schedule maintenance on aircraft emergency escape slides and cargo rolling systems.',
      'Manage, maintain, and inspect hazardous waste satellite points, storage and documents.',
      'Manage, inventory, order, and repair unserviceable tools and test equipment and tool kits.',
      'Maintain required training and supplies to be mobilized quickly world-wide.',
      'Supervise, train and mentor personnel and maintain training documentation.',
      'Maintain operational and security and risk management.',
      'Understand and use aircraft technical orders.',
      'Use and know emergency procedures for specialized ground equipment and vehicles.',
    ],
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
        {professionalExperiences.length ? (
          <ResumeProfessionalExperiences
            professionalExperiences={professionalExperiences}
          />
        ) : null}
        {educations.length ? (
          <ResumeEducations educations={educations} />
        ) : null}
        {courses.length ? <ResumeCourses courses={courses} /> : null}
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
