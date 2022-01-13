import { faCode } from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faNodeJs,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faBootstrap,
  faMicrosoft,
  faPaypal,
  faStripe,
  faFontAwesome,
  faNpm,
  faGitAlt,
  faGithubAlt,
  faDocker,
} from '@fortawesome/free-brands-svg-icons';

let defaultTechnologyObject = { name: '', documentation: '', icon: faCode };

const Technology = {
  REACTJS: {
    ...defaultTechnologyObject,
    name: 'ReactJs',
    documentation: 'https://reactjs.org/',
    icon: faReact,
  },
  NODEJS: {
    ...defaultTechnologyObject,
    name: 'NodeJs',
    documentation: 'https://nodejs.org/en/',
    icon: faNodeJs,
  },
  MONGODB: {
    ...defaultTechnologyObject,
    name: 'MongoDB',
    documentation: 'https://docs.mongodb.com/',
  },
  MONGOOSEJS: {
    ...defaultTechnologyObject,
    name: 'MongooseJs',
    documentation: 'https://mongoosejs.com/',
  },
  GRAPHQL: {
    ...defaultTechnologyObject,
    name: 'Apollo GraphQL',
    documentation: 'https://www.apollographql.com/',
  },
  NETLIFY: {
    ...defaultTechnologyObject,
    name: 'Netlify',
    documentation: 'https://www.netlify.com/',
  },
  HEROKU: {
    ...defaultTechnologyObject,
    name: 'Heroku',
    documentation: 'https://www.heroku.com/',
  },
  HTML5: {
    ...defaultTechnologyObject,
    name: 'HTML5',
    documentation: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5',
    icon: faHtml5,
  },
  CSS3: {
    ...defaultTechnologyObject,
    name: 'CSS3',
    documentation: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    icon: faCss3Alt,
  },
  JAVASCRIPT: {
    ...defaultTechnologyObject,
    name: 'JavaScript',
    documentation: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    icon: faJsSquare,
  },
  POWERSHELL: {
    ...defaultTechnologyObject,
    name: 'PowerShell',
    documentation: 'https://docs.microsoft.com/en-us/powershell/',
    icon: faMicrosoft,
  },
  AXIOS: {
    ...defaultTechnologyObject,
    name: 'Axios',
    documentation: 'https://axios-http.com/docs/intro',
  },
  BOOTSTRAP: {
    ...defaultTechnologyObject,
    name: 'Bootstrap',
    documentation: 'https://getbootstrap.com/',
    icon: faBootstrap,
  },
  ELECTRONJS: {
    ...defaultTechnologyObject,
    name: 'ElectronJs',
    documentation: 'https://www.electronjs.org/',
  },
  CSHARP: {
    ...defaultTechnologyObject,
    name: 'C#',
    documentation: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
    icon: faMicrosoft,
  },
  JEST: {
    ...defaultTechnologyObject,
    name: 'Jest',
    documentation: 'https://jestjs.io/',
  },
  ENZYME: {
    ...defaultTechnologyObject,
    name: 'Enzyme',
    documentation: 'https://enzymejs.github.io/enzyme/',
  },
  FILEPOND: {
    ...defaultTechnologyObject,
    name: 'Filepond',
    documentation: 'https://pqina.nl/filepond/',
  },
  PAYPAL: {
    ...defaultTechnologyObject,
    name: 'PayPal',
    documentation: 'https://www.paypal.com/us/home',
    icon: faPaypal,
  },
  STRIPE: {
    ...defaultTechnologyObject,
    name: 'Stripe',
    documentation:
      'https://stripe.com/?utm_campaign=paid_brand-US_Search_Brand_Stripe-1803852691&utm_medium=cpc&utm_source=google&ad_content=448938759825&utm_term=kwd-94834400&utm_matchtype=e&utm_adposition=&utm_device=c&gclid=CjwKCAiAlfqOBhAeEiwAYi43F1jFJ-9R_ku-p6PDSaSqhbBQi09HhquilUAsK0SuvliZveN3Y4uU3RoCMZMQAvD_BwE',
    icon: faStripe,
  },
  REACT_ROUTER: {
    ...defaultTechnologyObject,
    name: 'React Router',
    documentation: 'https://reactrouter.com/',
  },
  FORMIK: {
    ...defaultTechnologyObject,
    name: 'Formik',
    documentation: 'https://formik.org/',
  },
  FONTAWESOME: {
    ...defaultTechnologyObject,
    name: 'Fontawesome',
    documentation: 'https://fontawesome.com/',
    icon: faFontAwesome,
  },
  MATERIALUI: {
    ...defaultTechnologyObject,
    name: 'Material UI',
    documentation: 'https://mui.com/',
  },
  AUTH0: {
    ...defaultTechnologyObject,
    name: 'Auth0',
    documentation: 'https://auth0.com/',
  },
  STYLED_JSX: {
    ...defaultTechnologyObject,
    name: 'Styled Jsx',
    documentation: 'https://www.npmjs.com/package/styled-jsx',
    icon: faNpm,
  },
  NPM: {
    ...defaultTechnologyObject,
    name: 'NPM',
    documentation: 'https://www.npmjs.com/',
    icon: faNpm,
  },
  MOMENTJS: {
    ...defaultTechnologyObject,
    name: 'MomentJs',
    documentation: 'https://momentjs.com/',
  },
  AZURE: {
    ...defaultTechnologyObject,
    name: 'Azure',
    documentation: 'https://azure.microsoft.com/en-us/',
    icon: faMicrosoft,
  },
  GIT: {
    ...defaultTechnologyObject,
    name: 'Git',
    documentation: 'https://git-scm.com/',
    icon: faGitAlt,
  },
  GITHUB: {
    ...defaultTechnologyObject,
    name: 'Github',
    documentation: 'https://github.com/',
    icon: faGithubAlt,
  },
  DOCKER: {
    ...defaultTechnologyObject,
    name: 'Docker',
    documentation: 'https://www.docker.com/',
    icon: faDocker,
  },
  YUP: {
    ...defaultTechnologyObject,
    name: 'Yup',
    documentation: 'https://github.com/jquense/yup',
  },
  EXPRESSJS: {
    ...defaultTechnologyObject,
    name: 'ExpressJs',
    documentation: 'https://expressjs.com/',
  },
  STRAPI: {
    ...defaultTechnologyObject,
    name: 'Strapi',
    documentation: 'https://strapi.io/',
  },
};

export default Technology;
