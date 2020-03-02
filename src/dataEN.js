const aboutText = `Passionate about computers since the beginning, I decided to follow Programming studies path. This allowed me to acquire a logical mind and analytical skills, but also the basics in all areas of IT such as project management, networks, databases, security and software engineering. After a first successful experience at TalanLabs, where I had the opportunity to enter the Software Craftsmanship world, I am looking for new challenges to deepen my knowledge.
Autonomous, eager to learn, curious, available, passionate, these are the main qualities that qualify me. `;

const personnalInformations = {
  name: 'Aleksandar Timotijevic',
  jobTitle: 'Fullstack Javascript Developer',
  location: 'Paris, France',
  links: {
    email: 'contact@alekstimo.fr',
    linkedIn: 'https://linkedin.com/in/aleks-timo',
    github: 'https://github.com/PlanAborted',
    resume: './Resume.pdf',
  },
};

const skills = [
  {
    name: 'Javascript',
    description: 'NodeJS (Express, Jest), ReactJS',
    percentage: 90,
  },
  {
    name: 'Databases',
    description: 'MySQL, PostgreSQL, MongoDB, GraphQL, InfluxDB',
    percentage: 80,
  },
  {
    name: 'Software Craftsmanship',
    description: 'Agile (Scrum), XP, TDD, Clean Code',
    percentage: 60,
  },
  { name: 'CI/CD', description: 'Git, Docker, Kubernetes', percentage: 60 },
  { name: 'Architecture', description: 'Microservices', percentage: 60 },
  { name: 'Java', percentage: 60 },
];

const jobs = [
  {
    location: {
      logo: './logoTalanLabs.png',
      name: 'Talan Labs',
      adress: 'Paris, France',
    },
    dates: 'Sep. 2018 - Dec. 2019',
    title: 'Fullstack Javascript Developer',
    summary: '',
    description: `Skills development`,
    bulletPoints: [
      `Javascript (NodeJS, ReactJS, ES6)`,
      `Software Craftsmanship (Extreme Programming, Mob / Pair Programming, Tests Driven Development, Code Review, Git Workflow, Clean Code, Clean Architecture)`,
      `Agility (Scrum, Kanban)`,
      `Continuous Integration and Development`,
    ],
    mainTechnos: [
      'NodeJS',
      'ReactJS',
      'ES6',
      'XP',
      'TDD',
      'Git',
      'Scrum',
      'CI/CD',
    ],
    projects: [
      {
        location: {
          logo: './logoSncf.png',
          name: 'SNCF Gares & Connexions (through Talan Labs)',
          adress: 'Paris, France',
        },
        dates: 'Nov. 2018 - Dec. 2019',
        title: 'Fullstack Javascript Developer',
        summary: `In order to test and monitor an application under development in grey box mode,
        SNCF Gares et Connexions wanted to develop a test tool to check the performance,
        scalability and consistency between the data sent in and the data received out of the
        latter.`,
        description: '',
        bulletPoints: [
          `Creation of containerized modules on input and output sides of the application (NodeJS, Docker, API REST, WebSockets)`,
          `Creation of an interface allowing the control of the test tool (ReactJS,Swagger)`,
          `Setting up a database (InfluxDB)`,
          `Dashboard implementation to monitor the performance of the tested application (Grafana)`,
          `Implementation of a tool to validate the scalability of our solution (Gatling)`,
          `Deployment, management (scalability) and monitoring of our tool deployed on
          a Kubernetes cluster (Helm, kubectl, DataDog)`,
        ],
        mainTechnos: [
          'NodeJS',
          'ReactJS',
          'ES6',
          'InfluxDB',
          'Grafana',
          'Gatling',
          'Docker',
          'Kubernetes',
          'Helm',
          'TDD',
          'Git',
          'Scrum',
        ],
      },
    ],
  },
  {
    location: {
      logo: './logoAcsi.png',
      name: 'ACSI Multimedia',
      adress: 'Saint-Gratien, France',
    },
    dates: 'Feb. 2018 - May 2019',
    title: 'Java Developer Intern',
    summary: `As an intern developer, my role was to design and implement a software for the entreprise's client.`,
    description: ``,
    bulletPoints: [],
    mainTechnos: [
      'JavaEE',
      'Glassfish',
      'MySQL',
      'Microsoft Access',
      'Jax WS',
      'SOAP',
      'XML',
      'PDF',
    ],
    projects: [
      {
        location: {
          logo: './logoAtcn.png',
          name: 'SAS ATCN',
          adress: 'Saint-Gratien, France',
        },
        dates: 'Fév. 2018 - Mai 2019',
        title: 'Fullstack Java Developer Intern',
        summary: '',
        description: '',
        bulletPoints: [
          `Analysis and definition of the end customer's needs`,
          `Setting up and configuring a MySQL Database : MySQL WorkBench`,
          `Web Service implementation : Serveur Glassfish 5, Back-End JavaEE`,
          `Migrating an ACCESS 97 database to MySQL : Exporting the database to Excel,
          Creating import scripts in the new database
          (Excel parsing - Apache POI, Data validation, MySQL import by Web Service)`,
          `Implementation of a graphical interface: JavaFX Front-End, User Account System (Encryption and storage of passwords in the BDD, User Token System)`,
          `Front - Back communication configuration (Client-Server): Jax-WS, SOAP-XML`,
          `Setting up document creation: Order Tracking Sheets, Delivery Notes, etc. (Filling PDF forms - iText API)`,
        ],
        mainTechnos: [
          'JavaEE',
          'Glassfish',
          'MySQL',
          'Microsoft Access',
          'Jax WS',
          'SOAP',
          'XML',
          'PDF',
        ],
      },
    ],
  },
];

const studies = [
  {
    location: {
      logo: './logoDescartes.png',
      name: 'Paris 5 Descartes University',
      adress: 'Paris, France',
    },
    dates: '2012 - 2018',
    title: `CS Bachelor's Degree`,
    description: 'Main skills acquired',
    bulletPoints: [
      `Programming languages: C, Java, C#, Web (HTML, CSS, JavaScript, PHP)`,
      `Databases: PostgreSQL`,
      `Software Engineering`,
      `Project management`,
      `Teamwork`,
    ],
    mainTechnos: [
      'Java',
      'C',
      'C#',
      'Javascript',
      'HTML',
      'CSS',
      'PHP',
      'PostgreSQL',
    ],
    projects: [
      {
        location: {
          logo: './logoDescartes.png',
          name: 'Paris 5 Descartes University',
          adress: 'Paris, France',
        },
        dates: 'Jan. 2017 - May 2017',
        title: `Android game development (4 people)`,
        summary: '',
        description: '',
        bulletPoints: [
          `Analysis and definition of customer needs`,
          `Market research`,
          `Application modeling`,
          `Writing of technical documentation: Specifications, Development Plan, Test Plan, Acceptance Test Plan, User Guide`,
          `Project planning and implementation: RedMine (SVN, Gantt, Code repository)`,
          `Development of the software solution: Android Studio (SDK), Java: Implementation of the game logic`,
        ],
        mainTechnos: ['Java', 'Android Studio', 'SVN', 'Redmine', 'Gantt'],
      },
      {
        location: {
          logo: './logoDescartes.png',
          name: 'Université Paris 5 Descartes',
          adress: 'Paris, France',
        },
        dates: 'Jan. 2016 - Mai 2016',
        title: `Développement d'un Jeu de Dames sur PC (en équipe de 4)`,
        summary: '',
        description: '',
        bulletPoints: [
          `Analysis and definition of customer needs`,
          `Writing of technical documentation: Specifications, Development Plan, Test Plan, Acceptance Test Plan, User Guide`,
          `Project planning and implementation: RedMine (SVN, Gantt, Code repository)`,
          `Development of the software solution: Unity3D: Generation of game board and parts, C#: Implementation of game logic, Artificial Intelligence: Alpha-Beta algorithm, Game against the computer with several levels of difficulty`,
        ],
        mainTechnos: [
          'C#',
          'Unity3D',
          'Artificial Intelligence',
          'SVN',
          'Redmine',
          'Gantt',
        ],
      },
    ],
  },
  {
    location: {
      logo: '',
      name: 'Marcel Cachin High School',
      adress: 'Saint-Ouen, France',
    },
    dates: '2012',
    title: 'Scientific High School Diploma',
    description: '',
  },
];

const dataEN = {
  aboutText,
  jobs,
  studies,
  skills,
  personnalInformations,
};

export default dataEN;
