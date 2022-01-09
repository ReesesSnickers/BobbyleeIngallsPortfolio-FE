import MyTechLogo from '../../../static/mytech.svg';
import EmeraldEmpireLogo from '../../../static/Emerald-Empire.jpg';
import BIPLogo from '../../../static/bip.jpg';
import WalmartLogo from '../../../static/WalmartLogo.png';
import NewRepublicArkLogo from '../../../static/newrepubliclogo.png';
import KaneCrazyChristmasLogo from '../../../static/kanecrazychristmas.jpg';

const Projects = [
  {
    title: 'MyTech',
    company: 'mock1 company',
    startDate: '2019',
    endDate: 'Ongoing',
    description: '',
    url: '',
    assets: [
      {
        type: 'image',
        path: MyTechLogo,
        alt: 'MyTech Logo',
        title: 'MyTech Logo',
      },
    ],
  },
  {
    title: 'Bobbylee Ingalls Portfolio',
    company: 'Personal Project',
    startDate: '2019',
    endDate: 'Ongoing',
    description:
      'Personal Portfolio for myself. This is a MERN (MongoDb, Express, ReactJs, NodeJs) stack web application that also utilizes Apollo GraphQL. Hosted by Netlify and Heroku for the back and front ends.',
    url: 'https://bobbyleeingals.dev',
    assets: [
      {
        type: 'image',
        path: BIPLogo,
        alt: 'BIP Logo',
        title: 'Bobbylee Ingalls Portfolio Logo',
      },
    ],
  },
  {
    title: 'Night Notes',
    company: 'Walmart',
    startDate: '2020',
    endDate: '2020',
    description:
      'Assisted on the beginning of this project by createing a demo app to assist with showing the applictaion had potential for helping a team by removing the Excel based process they we doing that took alot of time and contained inconsitencies. By creating the demo, this help gain the needed approvals to start the real application. All I did was create a ReactJs SPA that had hard coded values but looked like it did more then what was going on in the background. The application was able to gain traction and be completed by fellow developers on my team by the end of 2021.',
    url: '',
    assets: [
      {
        type: 'image',
        path: WalmartLogo,
        alt: 'Walmart Logo',
        title: 'Pending Logo for Night Notes',
      },
    ],
  },
  {
    title: 'Home Office Self Service (HOSS)',
    company: 'Walmart',
    startDate: '2017',
    endDate: '2019',
    description: '',
    url: '',
    assets: [
      {
        type: 'image',
        path: WalmartLogo,
        alt: 'Walmart Logo',
        title: 'Pending Logo for HOSS',
      },
    ],
  },
  {
    title: 'Self Service as a Service (SSasS)',
    company: 'Walmart',
    startDate: '2018',
    endDate: '2019',
    description: '',
    url: '',
    assets: [
      {
        type: 'image',
        path: WalmartLogo,
        alt: 'Walmart Logo',
        title: 'Pending Logo for SSaaS',
      },
    ],
  },
  {
    title: 'Workstation Tool',
    company: 'Walmart',
    startDate: '2017',
    endDate: '2019',
    description: '',
    url: '',
    assets: [
      {
        type: 'image',
        path: WalmartLogo,
        alt: 'Walmart Logo',
        title: 'Pending Logo for Workstation Tool',
      },
    ],
  },
  {
    title: 'Spark Notifications',
    company: 'Walmart',
    startDate: '',
    endDate: '',
    description: '',
    url: '',
    assets: [
      {
        type: 'image',
        path: WalmartLogo,
        alt: 'Walmart Logo',
        title: 'Pending Logo for Spark Notifications',
      },
    ],
  },
  {
    title: 'Toolbox Widget',
    company: 'Walmart',
    startDate: '2020',
    endDate: '2021',
    description: '',
    url: '',
    assets: [
      {
        type: 'image',
        path: WalmartLogo,
        alt: 'Walmart Logo',
        title: 'Pending Logo for Toolbox Widget',
      },
    ],
  },
  {
    title: 'New Republic Ark',
    company: 'Volunteer freelance for David Cordell',
    startDate: 'Feb 2021',
    endDate: 'Feb 2021',
    description:
      'Was asked to create a web page for a Ark Survival Evolved Cluster. Request was to have information about the page as well as a better way to help players purchase donation packages that would be easier for the admin to track and complete as well. During the process I was asked to implement Paypal but later was asked to find a didferent service after finding out Paypal had requirements that was outside they were willing to do at the time. I implemented Stripe as the payment gateway but then the Requested user decided they wanted to just cancel the site as they were having issues with the cluster. Implementation of this was a MERN stack. Other noteable technologies I used or worked with was PayPal, Stripe and Apollo GraphQL. Hosted using Heroku and Netlify. ',
    url: '',
    assets: [
      {
        type: 'image',
        path: NewRepublicArkLogo,
        alt: 'New Republic Ark Logo',
        title: 'New Republic Ark Logo',
      },
    ],
  },
  {
    title: 'Kane Crazy Christmas',
    company: 'Personal Project',
    startDate: 'Nov 2019',
    endDate: 'Nov 2020 (Pending Re-start)',
    description: '',
    url: '',
    assets: [
      {
        type: 'image',
        path: KaneCrazyChristmasLogo,
        alt: 'Kane Crazy Christmas Logo',
        title: 'Kane Crazy Christmas Logo',
      },
    ],
  },
  {
    title: `Luna Ravens Witchery`,
    company: 'Volunteer freelance for Bridget Ingalls',
    startDate: '2020',
    endDate: '2020',
    description: '',
    url: '',
    assets: [],
  },
  {
    title: 'Emerald-Empire',
    company: 'Freelance for Roger Hernandez',
    startDate: 'Novemeber 2019',
    endDate: 'Novemeber 2019',
    description:
      'Roger Hernandez brought me on to help with correcting HTML and CSS for a website he was building for a distribution center in Oklahoma, USA. During the time the application was being written with Ruby on Rails but I only worked on updating CSS and HTML.',
    url: '',
    assets: [
      {
        type: 'image',
        path: EmeraldEmpireLogo,
        alt: 'Emerald Empire Logo',
        title: 'Emerald Empire Logo',
      },
    ],
  },
];

export default Projects;
