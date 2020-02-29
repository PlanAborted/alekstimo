export const aboutText = `Passionné par l'informatique depuis toujours, c'est logiquement que je me suis tourné vers des études de Programmation.
Cela m'a permis d'acquérir un esprit logique et une capacité d'analyse, mais aussi les bases dans tous les domaines de l'Informatique tels que la gestion de projets, les réseaux, les bases de données, la sécurité et le génie logiciel.
Après un stage de fin d’études réussi, l’idée de mettre à profit mes compétences acquises à l’Université au sein de projets concrets m’a motivé à me lancer dans le monde professionnel.
Les un an au sein de Talan Labs m’ont permis d’acquérir une solide expérience dans l’artisanat logiciel, notamment en participant à un projet d’envergure pour le compte de la SNCF Gares & Connexions.`;

export const personnalInformations = {
  name: 'Aleksandar Timotijevic',
  jobTitle: 'Développeur Fullstack Javascript',
  links: {
    email: 'contact@alekstimo.fr',
    linkedIn: 'https://linkedin.com/in/aleks-timo',
    github: 'https://github.com/PlanAborted',
    resume: './Resume.pdf',
  },
};

export const jobs = [
  {
    location: {
      logo: './logoTalanLabs.png',
      name: 'Talan Labs',
      adress: 'Paris, France',
    },
    dates: 'Sep. 2018 - Déc. 2019',
    title: 'Développeur Fullstack Javascript',
    summary: '',
    description: `Montée en compétences`,
    bulletPoints: [
      `Javascript (NodeJS, ReactJS, ES6)`,
      `Artisanat logiciel (Extreme Programming, Mob / Pair Programming, Tests Driven Development, Code Review, Git Workflow, Clean Code, Clean Architecture)`,
      `Agilité (Scrum, Kanban)`,
      `Intégration et Déploiement continu`,
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
          name: 'SNCF Gares & Connexions (via Talan Labs)',
          adress: 'Paris, France',
        },
        dates: 'Nov. 2018 - Déc. 2019',
        title: 'Développeur Fullstack Javascript',
        summary: `Dans le but de tester et monitorer une application en cours de développement en mode boîte grise, la SNCF Gares et Connexions souhaitait développer un outil de test afin de vérifier les performances, la montée en charge et la cohérence entre les données envoyées en entrée et les données reçues en sortie de cette dernière.`,
        description: '',
        bulletPoints: [
          `Création de modules conteneurisés en entrée et en sortie de l’application (NodeJS, Docker, API REST, WebSockets)`,
          `Création d’une interface permettant le pilotage l’outil de test (ReactJS, Swagger)`,
          `Mise en place d’une base de données (InfluxDB)`,
          `Mise en place d’un tableau de bord pour monitorer les performances de l’application testée (Grafana)`,
          `Mise en place d’un outil pour valider la montée en charge de notre solution (Gatling)`,
          `Déploiement, gestion (montée en charge) et monitoring de notre outil déployé sur un cluster Kubernetes (Helm, kubectl, DataDog)`,
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
    dates: 'Fév. 2018 - Mai 2019',
    title: 'Développeur Stagiaire Java',
    summary: `En tant que développeur stagiaire, mon rôle à été de conçevoir et d'implémenter un logiciel pour un client de l'entreprise avec le soutien de mon maître de stage.`,
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
        title: 'Développeur Stagiaire Java',
        summary: '',
        description: '',
        bulletPoints: [
          `Analyse et définition des besoins du Client final`,
          `Mise en place et configuration d'une Base de Données MySQL : MySQL WorkBench`,
          `Mise en place d'un Web Service : Serveur Glassfish 5, Back-End JavaEE`,
          `Migration d'une Base de Données ACCESS 97 vers MySQL : Export de la BDD sous Excel, Création de scripts d'importation dans la nouvelle BDD (Parsing Excel - Apache POI, Validation des données, Import MySQL par Web Service)`,
          `Mise en place d'une interface graphique : Front-End JavaFX, Système de comptes utilisateurs (Cryptage et stockage des mots de passe dans la BDD, Système de Tokens utilisateurs)`,
          `Configuration de la communication Front Back (Client Serveur) : Jax-WS, SOAP-XML`,
          `Mise en place de la création de documents : Fiches de Suivi de Commandes, Bons de Livraisons, etc. (Remplissage de formulaires PDF - API iText)`,
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

export const studies = [
  {
    location: {
      logo: './logoDescartes.png',
      name: 'Université Paris 5 Descartes',
      adress: 'Paris, France',
    },
    dates: '2012 - 2018',
    title:
      'Licence MIAGE (Méthodes Informatiques Appliquées à la Gestion des Entreprises)',
    description: 'Compétences principales acquises',
    bulletPoints: [
      `Langages de programmation : C, Java, C#, Web (HTML, CSS, JavaScript, PHP)`,
      `Bases de données : PostgreSQL`,
      `Ingénierie Logicielle`,
      `Gestion de projets`,
      `Travail en équipe`,
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
          name: 'Université Paris 5 Descartes',
          adress: 'Paris, France',
        },
        dates: 'Jan. 2017 - Mai 2017',
        title: `Développement d'un jeu sur Android (en équipe de 4)`,
        summary: '',
        description: '',
        bulletPoints: [
          `Analyse et définition des besoins du client`,
          `Etude de marché`,
          `Maquettage de l'application`,
          `Rédaction de la documentation technique : Cahier des Charges, Plan de Développement, Plan de Tests, Cahier de Recette, Guide utilisateurs`,
          `Planification et mise en place du projet : RedMine (SVN, Gantt, Dépôt de code)`,
          `Développement de la solution logicielle : Android Studio (SDK), Java : Mise en place de la logique de jeu`,
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
          `Analyse et définition des besoins du client`,
          `Rédaction de la documentation technique : Cahier des Charges, Plan de Développement, Plan de Tests, Cahier de Recette, Guide utilisateurs`,
          `Planification et mise en place du projet : RedMine (SVN, Gantt, Dépôt de code)`,
          `Développement de la solution logicielle : Unity3D : Génération plateau de jeu et pièces, C# : Mise en place de la logique de jeu, Intelligence Artificielle : Algorithme Alpha-Beta, Jeu contre l'ordinateur avec plusieurs niveaux de difficultés`,
        ],
        mainTechnos: [
          'C#',
          'Unity3D',
          'Intelligence Artificielle',
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
      name: 'Lycée Marcel Cachin',
      adress: 'Saint-Ouen, France',
    },
    dates: '2012',
    title: 'Baccalauréat S',
    description: '',
  },
];
