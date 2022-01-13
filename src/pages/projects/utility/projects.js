import MyTechLogo from '../../../static/mytech.svg';
import EmeraldEmpireLogo from '../../../static/Emerald-Empire.jpg';
import BIPLogo from '../../../static/bip.jpg';
import WalmartLogo from '../../../static/WalmartLogo.png';
import NewRepublicArkLogo from '../../../static/newrepubliclogo.png';
import KaneCrazyChristmasLogo from '../../../static/kanecrazychristmas.jpg';
import Technology from '../../../utility/constants/technologies';

const Projects = [
  {
    title: 'MyTech',
    company: 'Walmart',
    startDate: '2019',
    endDate: 'Ongoing',
    repos: [],
    technologies: [
      Technology.AXIOS,
      Technology.AZURE,
      Technology.CSS3,
      Technology.DOCKER,
      Technology.ENZYME,
      Technology.EXPRESSJS,
      Technology.FILEPOND,
      Technology.FONTAWESOME,
      Technology.FORMIK,
      Technology.GIT,
      Technology.GITHUB,
      Technology.GRAPHQL,
      Technology.HTML5,
      Technology.JAVASCRIPT,
      Technology.JEST,
      Technology.MATERIALUI,
      Technology.MOMENTJS,
      Technology.MONGODB,
      Technology.MONGOOSEJS,
      Technology.NODEJS,
      Technology.NPM,
      Technology.REACTJS,
      Technology.REACT_ROUTER,
      Technology.STYLED_JSX,
      Technology.YUP,
      Technology.STRAPI,
    ],
    description:
      'Was asked to build a applictaion where users can come to see tech related information, their assigned devices, support, ect. MyTech was our solution. Although I am primarily a front end developer on this project, I also handle occasional backend and dev ops related tasks. This is still a ongoing project and I am excited to be a part of its growth. Some technologies I have worked with on this project as it has grown are: ReactJs, NodeJs, Azure, Apollo GraphQL, MongoDB, Strapi, React-Router, Material UI, Jest, Enzyme, Axios, Filepond, Formik, Moment, Redux, Context, Styled-jsx, Yup, LDAP',
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
    repos: [
      {
        url: 'https://github.com/ReesesSnickers/BobbyleeIngallsPortfolio-FE',
        label: 'Frontend',
      },
      {
        url: 'https://github.com/ReesesSnickers/BobbyleeIngallsPortfolio-BE',
        label: 'Backend',
      },
    ],
    technologies: [
      Technology.REACTJS,
      Technology.REACT_ROUTER,
      Technology.CSS3,
      Technology.HTML5,
      Technology.JAVASCRIPT,
      Technology.MATERIALUI,
      Technology.MONGODB,
      Technology.MONGOOSEJS,
      Technology.NETLIFY,
      Technology.NODEJS,
      Technology.NPM,
      Technology.STYLED_JSX,
      Technology.GIT,
      Technology.GITHUB,
      Technology.GRAPHQL,
      Technology.HEROKU,
      Technology.AXIOS,
      Technology.JEST,
      Technology.ENZYME,
      Technology.FONTAWESOME,
      Technology.EXPRESSJS,
      Technology.STRAPI,
    ],
    description:
      'Personal Portfolio for myself. This is a MERN (MongoDb, Express, ReactJs, NodeJs) stack web application that also utilizes Apollo GraphQL. Hosted by Netlify and Heroku for the back and front ends.',
    url: 'https://bobbyleeingalls.dev',
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
    repos: [],
    technologies: [
      Technology.CSS3,
      Technology.GIT,
      Technology.GITHUB,
      Technology.HTML5,
      Technology.JAVASCRIPT,
      Technology.NPM,
      Technology.REACTJS,
      Technology.REACT_ROUTER,
      Technology.STYLED_JSX,
    ],
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
    repos: [],
    technologies: [
      Technology.AXIOS,
      Technology.BOOTSTRAP,
      Technology.CSS3,
      Technology.ELECTRONJS,
      Technology.FONTAWESOME,
      Technology.GIT,
      Technology.GITHUB,
      Technology.HTML5,
      Technology.JAVASCRIPT,
      Technology.MATERIALUI,
      Technology.NPM,
      Technology.POWERSHELL,
      Technology.REACTJS,
      Technology.REACT_ROUTER,
    ],
    description:
      'I came on this project for the v2 refactor. Origionally it was a simple applictaion with a few simple scripts that Windows users could use to see computer information and fix minor issues. The origional developer of the project had moved on and support for the appliction left with him. This was one of the applications I first started on and we grew the v2 version of the applictaion into much more then just simple scripts and information. We added advanced powershell scripts that allowed corrections of common issues seen on the level one helpdesk as well as knowledge share for different technologies that were new. We also provided quick links to commonly used sites and directories that the user may have needed. I only worked on the frontend for this application and some of the technologies I worked with during the development process are: ReactJs, Bootstrap, ElectronJs, Powershell, Axios',
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
    repos: [],
    technologies: [
      Technology.AXIOS,
      Technology.CSS3,
      Technology.FONTAWESOME,
      Technology.GIT,
      Technology.GITHUB,
      Technology.HTML5,
      Technology.JAVASCRIPT,
      Technology.MATERIALUI,
      Technology.MONGODB,
      Technology.NODEJS,
      Technology.NPM,
      Technology.POWERSHELL,
      Technology.REACTJS,
      Technology.REACT_ROUTER,
      Technology.STRAPI,
    ],
    description:
      'We were asked to help reduce calls and increase the corrected issues and only slightly increasing the number of tickets. We accomplished this by creating a self service portal where callers could see current Issues in Progress (IIPs) as well as select common issues and do general troubleshooting by following instructions we provided for the issue. if it was fixed we made a ticket and showed it was fixed and if not we made a ticket and logged the information that the user would have done to the proper team to correct the issue. This project successfully did as we were asked. Some of the technologies I worked with during this project are: ReactJs, Axios, Remedy, PowerShell, NodeJs, React-Router',
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
    repos: [],
    technologies: [Technology.CSHARP, Technology.POWERSHELL],
    description:
      'The application was built to support the level one helpdesk in expiditing tasks to help them in correcting incidents either on the call quickly or while working placed issues. It held numerous scripts and had additional features to help gain information on a device that they needed to work on when the device was not in their posession. The applictaion was Written in C# and for a very short time I maintained the C# part of the code and added one or two requested features. Being said I do not claim to know C#. During the time working on this application I contributed the most by writing PowerShell scripts.',
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
    startDate: '2019',
    endDate: '2019',
    repos: [],
    technologies: [
      Technology.CSS3,
      Technology.GIT,
      Technology.GITHUB,
      Technology.HTML5,
      Technology.JAVASCRIPT,
      Technology.NODEJS,
      Technology.NPM,
      Technology.REACTJS,
    ],
    description:
      'I worked briefly on this project at the beginning creation. The application at the time allowed users to create custome themed emails similar to MailChimp. Technologies I worked with at the time of the project are: ReactJs, NodeJs',
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
    repos: [],
    technologies: [
      Technology.CSS3,
      Technology.ENZYME,
      Technology.FILEPOND,
      Technology.GIT,
      Technology.GITHUB,
      Technology.HTML5,
      Technology.JAVASCRIPT,
      Technology.JEST,
      Technology.NODEJS,
      Technology.NPM,
      Technology.REACTJS,
    ],
    description:
      'Worked on this project for a short time. Was asked to assist the developer who was on it with adding a few features. Shortly after adding a feature or two the project was handed of to a different team during a reorg event. The application was a widget that would show different feed back and other information to a page widget if the site was registerd to show it. It also had a custome admin page for setting up what features showed on each registered site. I also helped get this project from no test coverage to >50% test coverage. During the time i worked with technologies such as: Filepond, ReactJs, NodeJs, Jest, Enzyme',
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
    repos: [
      {
        url: 'https://github.com/newrepublicark/newrepublicark-FE',
        label: 'Frontend',
      },
      {
        url: 'https://github.com/newrepublicark/newrepublicark-BE',
        label: 'Backend',
      },
      {
        url: 'https://github.com/newrepublicark/NewRepublicArk_CMS',
        label: 'CMS',
      },
    ],
    technologies: [
      Technology.AXIOS,
      Technology.CSS3,
      Technology.ENZYME,
      Technology.EXPRESSJS,
      Technology.FONTAWESOME,
      Technology.FORMIK,
      Technology.GIT,
      Technology.GITHUB,
      Technology.GRAPHQL,
      Technology.HEROKU,
      Technology.HTML5,
      Technology.JAVASCRIPT,
      Technology.JEST,
      Technology.MATERIALUI,
      Technology.MOMENTJS,
      Technology.MONGODB,
      Technology.MONGOOSEJS,
      Technology.NETLIFY,
      Technology.NODEJS,
      Technology.NPM,
      Technology.PAYPAL,
      Technology.REACTJS,
      Technology.REACT_ROUTER,
      Technology.STRIPE,
      Technology.STYLED_JSX,
      Technology.YUP,
      Technology.STRAPI,
    ],
    description:
      'Was asked to create a web page for a Ark Survival Evolved Cluster. Request was to have information about the page as well as a better way to help players purchase donation packages that would be easier for the admin to track and complete as well. During the process I was asked to implement Paypal but later was asked to find a different service after finding out Paypal had requirements that was outside they were willing to do at the time. I implemented Stripe as the payment gateway but then the Requested user decided they wanted to just cancel the site as they were having issues with the cluster. Implementation of this was a MERN stack. Other noteable technologies I used or worked with was PayPal, Stripe and Apollo GraphQL. Hosted using Heroku and Netlify. ',
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
    repos: [
      {
        url: 'https://github.com/ReesesSnickers/kane-crazy-christmas',
        label: 'Frontend',
      },
      {
        url: 'https://github.com/ReesesSnickers/kane-crazy-christmas-be',
        label: 'Backend',
      },
    ],
    technologies: [
      Technology.MATERIALUI,
      Technology.MONGODB,
      Technology.NPM,
      Technology.REACT_ROUTER,
      Technology.REACTJS,
      Technology.CSS3,
      Technology.HTML5,
      Technology.JAVASCRIPT,
      Technology.FONTAWESOME,
      Technology.FORMIK,
      Technology.AXIOS,
      Technology.GIT,
      Technology.GITHUB,
      Technology.GRAPHQL,
      Technology.AUTH0,
      Technology.STYLED_JSX,
      Technology.MOMENTJS,
      Technology.MONGOOSEJS,
      Technology.EXPRESSJS,
      Technology.NODEJS,
      Technology.HEROKU,
      Technology.NETLIFY,
    ],
    description:
      'Every year my family would play a gift game where each player would bring a wrapped gift and set it in the middle. We would all pull a number for order then proceed to choose a gift but the next person to pick had the option to steal a gift. The catch was a gift could only be stolen twice. This is one of my favorite games each year. The issue I saw was we have a very large family. Many of which were very far away and I wanted to find a way to include them. So I started making a game where we could have sessions and play the same game but virtually on a screen. This is a inprogress game that I started but have yet to find the time to finish. Technologies I have used working on this so far are: ReactJs, NodeJs, Apollo GraphQL, MongoDB, Express, React-router, Netlify, Heroku, styled-jsx, Formik, Axios, Fontawesome, Material UI, Moment, Mongoose, Auth0',
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
    repos: [
      {
        url: 'https://github.com/LunaRaven/LunaRavenWitchery-FE',
        label: 'Frontend',
      },
      {
        url: 'https://github.com/LunaRaven/LunaRavensWitchery-BE',
        label: 'Backend',
      },
    ],
    technologies: [
      Technology.CSS3,
      Technology.HTML5,
      Technology.JAVASCRIPT,
      Technology.FORMIK,
      Technology.REACTJS,
      Technology.MONGODB,
      Technology.GRAPHQL,
      Technology.MONGODB,
      Technology.MONGOOSEJS,
      Technology.NODEJS,
      Technology.NPM,
      Technology.GITHUB,
      Technology.GIT,
      Technology.MATERIALUI,
      Technology.EXPRESSJS,
    ],
    description:
      'Bridget Ingalls had a Etsy as a way for her sell her witchy services and products. She asked to begin building a simple website to take over for the Etsy profile she had. I began building the site, but soon after she decided to close the Etsy shop and cancel the website. During my time starting this project I worked with the following technologies: ReactJs, MongoDB, Formik',
    url: '',
    assets: [],
  },
  {
    title: 'Emerald-Empire',
    company: 'Freelance for Roger Hernandez',
    startDate: 'Novemeber 2019',
    endDate: 'Novemeber 2019',
    repos: [],
    technologies: [
      Technology.GIT,
      Technology.GITHUB,
      Technology.HTML5,
      Technology.CSS3,
      Technology.NPM,
    ],
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
