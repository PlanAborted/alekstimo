(this.webpackJsonpalekstimo=this.webpackJsonpalekstimo||[]).push([[0],{57:function(e,t,a){e.exports=a(72)},72:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(11),r=a(87),s=a(30),l=a(89),c=function(e){var t=e.title,a=e.children,n=e.titleVariant,o=void 0===n?"h4":n;return i.a.createElement(r.a,{container:!0,direction:"column",spacing:2},i.a.createElement(r.a,{item:!0},i.a.createElement(s.a,{variant:o},t)),i.a.createElement(r.a,{item:!0},i.a.createElement(l.a,null)),i.a.createElement(r.a,{item:!0},a))},m=a(15),d=a(90),u=a(91),p=a(92),g=a(45),f=a.n(g),h=a(46),v=a.n(h),E=a(43),S=a.n(E),b=a(44),y=a.n(b),D=a(47),P=a.n(D),k=a(4),C=a(42),A=function(){var e=window.pageYOffset,t=window.innerHeight,a=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)-t;return Math.floor(e/a*100)},J=Object(k.a)({root:{height:7},colorPrimary:{backgroundColor:"#303030"},barColorPrimary:{backgroundColor:"#fafafa"}})(d.a),M=Object(C.a)((function(e){return{appbar:{backgroundColor:e.palette.grey.A400},icons:{color:e.palette.grey[50],fontSize:35},locale:{color:e.palette.grey[50],fontSize:25}}})),T=function(e){var t=e.links,a=e.handleSwitchDarkMode,o=e.darkMode,l=e.handleSwitchLocale,c=e.localeIsFrench,d=M(),g=Object(n.useState)(0),h=Object(m.a)(g,2),E=h[0],b=h[1];Object(n.useEffect)((function(){document.addEventListener("scroll",(function(){requestAnimationFrame((function(){b(A())}))}))}),[]);var D=t.github,k=t.linkedIn,C=t.email;return i.a.createElement(u.a,{classes:{root:d.appbar}},i.a.createElement(r.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},i.a.createElement(r.a,{item:!0},i.a.createElement(p.a,{onClick:l},c?i.a.createElement(s.a,{classes:{root:d.locale}},"FR"):i.a.createElement(s.a,{classes:{root:d.locale}},"EN")),i.a.createElement(p.a,{onClick:a},o?i.a.createElement(S.a,{classes:{root:d.icons}}):i.a.createElement(y.a,{classes:{root:d.icons}}))),i.a.createElement(r.a,{item:!0},i.a.createElement(r.a,{container:!0},k&&i.a.createElement(r.a,{item:!0},i.a.createElement(p.a,{href:k,target:"_blank"},i.a.createElement(f.a,{classes:{root:d.icons}}))),D&&i.a.createElement(r.a,{item:!0},i.a.createElement(p.a,{href:D,target:"_blank"},i.a.createElement(v.a,{classes:{root:d.icons}}))),C&&i.a.createElement(r.a,{item:!0},i.a.createElement(p.a,{href:"mailto:".concat(C),target:"_blank"},i.a.createElement(P.a,{classes:{root:d.icons}})))))),i.a.createElement(J,{variant:"determinate",value:E,color:"primary"}))},j=a(48),I=a(103),x=a(50),F=a.n(x),w=a(49),G=a.n(w),L=Object(C.a)((function(e){return{avatar:{width:"150px",height:"150px"},icons:{color:e.palette.grey[50],fontSize:24}}})),O=function(e){var t=e.name,a=e.jobTitle,n=e.location,o=e.links,l=L(),c=o.resume;return i.a.createElement(r.a,{container:!0,direction:"column",alignItems:"center",spacing:3},i.a.createElement(r.a,{item:!0},i.a.createElement(I.a,{alt:"Aleksandar's profile pic",src:"./profilePic.png",className:l.avatar})),i.a.createElement(r.a,{item:!0,container:!0,direction:"column",alignItems:"center"},i.a.createElement(r.a,{item:!0},i.a.createElement(s.a,{variant:"h4",align:"center"},t)),i.a.createElement(r.a,{item:!0},i.a.createElement(s.a,{variant:"h5",align:"center"},a)),i.a.createElement(r.a,{item:!0,container:!0,direction:"row",alignItems:"center",justify:"center"},i.a.createElement(r.a,{item:!0},i.a.createElement(G.a,null)),i.a.createElement(r.a,{item:!0},i.a.createElement(s.a,{variant:"h5",align:"center"},n)))),i.a.createElement(r.a,{item:!0},i.a.createElement(p.a,{href:c,target:"_blank"},i.a.createElement(F.a,{classes:{root:l.icons}}),i.a.createElement(s.a,{classes:{root:l.icons}},"CV"))))},N=a(93),R=Object(C.a)((function(e){return{root:{position:"relative",transform:"rotate(180deg)"},top:{color:e.palette.getContrastText(e.palette.background.default)},bot:{color:e.palette.grey[600],position:"absolute",left:5,top:5},skill:{width:"200px"}}})),B=function(e){var t=e.name,a=e.description,n=e.percentage,o=R();return i.a.createElement(r.a,{container:!0,direction:"column",justify:"center",alignItems:"center",classes:{root:o.skill}},i.a.createElement(r.a,{item:!0,classes:{root:o.root}},i.a.createElement(N.a,{variant:"static",value:100,thickness:3,size:90,className:o.bot}),i.a.createElement(N.a,{variant:"static",value:n,thickness:7,size:100,className:o.top})),i.a.createElement(r.a,{item:!0},i.a.createElement(s.a,{variant:"h5",align:"center"},t)),a&&i.a.createElement(r.a,{item:!0},i.a.createElement(s.a,{variant:"body1",align:"center"},a)))},W=function(e){var t=e.skills;return i.a.createElement(r.a,{container:!0,direction:"row",justify:"center",spacing:4},t.map((function(e,t){return i.a.createElement(r.a,{item:!0,key:t},i.a.createElement(B,e))})))},q=a(94),H=a(104),Q=a(102),U=Object(C.a)((function(e){return{summary:{fontStyle:"italic",textAlign:"justify"},description:{textAlign:"justify"},listItem:{textAlign:"justify"},chip:{backgroundColor:e.palette.getContrastText(e.palette.background.default),color:e.palette.background.default,margin:"2px",padding:"2px"}}})),V=function(e){var t=e.summary,a=e.description,n=e.bulletPoints,o=e.mainTechnos,l=U();return i.a.createElement(r.a,{container:!0,direction:"column",spacing:2},t&&i.a.createElement(r.a,{item:!0},i.a.createElement(s.a,{variant:"body1",classes:{root:l.summary}},t)),a&&i.a.createElement(r.a,{item:!0},i.a.createElement(s.a,{variant:"body1",classes:{root:l.description}},a)),n&&n.length>0&&i.a.createElement(r.a,{item:!0},i.a.createElement(q.a,{dense:!0},n.map((function(e,t){return i.a.createElement(H.a,{key:t,classes:{root:l.listItem}},i.a.createElement(s.a,{variant:"body1"},e))})))),o&&i.a.createElement(r.a,{item:!0,container:!0,direction:"row"},o.map((function(e,t){return i.a.createElement(r.a,{item:!0,key:t},i.a.createElement(Q.a,{size:"small",label:e,classes:{root:l.chip}}))}))))},X=a(8),K=a(95),z=a(96),_=a(101),Y=a(97),$=a(3),Z=a(51),ee=a.n(Z),te=Object(C.a)((function(e){return{expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"}}})),ae=function(e){var t=e.location,a=e.dates,o=e.title,r=e.summary,c=void 0===r?"":r,d=e.description,u=void 0===d?"":d,g=e.bulletPoints,f=void 0===g?[]:g,h=e.mainTechnos,v=void 0===h?[]:h,E=te(),S=Object(n.useState)(!1),b=Object(m.a)(S,2),y=b[0],D=b[1];return i.a.createElement(K.a,null,i.a.createElement(z.a,{avatar:i.a.createElement(I.a,{src:t.logo}),title:i.a.createElement(s.a,{variant:"subtitle1"},"".concat(t.name," | ").concat(t.adress)),subheader:"".concat(o," / ").concat(a),action:i.a.createElement(p.a,{className:Object($.a)(E.expand,Object(X.a)({},E.expandOpen,y)),onClick:function(){D(!y)},"aria-expanded":y,"aria-label":"show more"},i.a.createElement(ee.a,null))}),i.a.createElement(l.a,{variant:"fullWidth"}),i.a.createElement(_.a,{in:y,timeout:"auto",unmountOnExit:!0},i.a.createElement(Y.a,null,i.a.createElement(V,{summary:c,description:u,bulletPoints:f,mainTechnos:v}))))},ne=function(e){var t,a=e.location,n=e.dates,o=e.title,m=e.summary,d=e.description,u=e.bulletPoints,p=e.mainTechnos,g=e.projects,f=e.localeIsFrench;return(m||d||u||p||g)&&(t=i.a.createElement(Y.a,null,i.a.createElement(V,{summary:m,description:d,bulletPoints:u,mainTechnos:p}),g&&g.length>0&&i.a.createElement(c,{title:f?"Projet(s)":"Project(s)",titleVariant:"h6"},g.map((function(e,t){return i.a.createElement(r.a,{item:!0,key:t},i.a.createElement(ae,e))}))))),i.a.createElement(K.a,null,i.a.createElement(z.a,{avatar:i.a.createElement(I.a,{src:a.logo}),title:i.a.createElement(s.a,{variant:"h5"},a.name),subheader:"".concat(o," / ").concat(n)}),i.a.createElement(l.a,{variant:"fullWidth"}),t)},ie=function(e){var t=e.details,a=e.localeIsFrench;return i.a.createElement(r.a,{container:!0,direction:"column",spacing:3},t.map((function(e,t){return i.a.createElement(r.a,{item:!0,key:t},i.a.createElement(ne,Object.assign({},e,{localeIsFrench:a})))})))},oe=a(98),re=function(e){var t=e.aboutText,a=e.jobs,n=e.studies,o=e.skills,l=e.localeIsFrench;return i.a.createElement(oe.a,{maxWidth:"md"},i.a.createElement(r.a,{container:!0,direction:"column",spacing:7},i.a.createElement(r.a,{item:!0},i.a.createElement(c,{title:l?"A propos":"About me"},i.a.createElement(s.a,{align:"justify",variant:"body1"},t))),i.a.createElement(r.a,{item:!0},i.a.createElement(c,{title:l?"Comp\xe9tences":"Skills"},i.a.createElement(W,{skills:o}))),i.a.createElement(r.a,{item:!0},i.a.createElement(c,{title:l?"Exp\xe9rience":"Experience"},i.a.createElement(ie,{details:a,localeIsFrench:l}))),i.a.createElement(r.a,{item:!0},i.a.createElement(c,{title:l?"Formation":"Education"},i.a.createElement(ie,{details:n})))))},se=function(){return i.a.createElement(r.a,{container:!0,justify:"center",alignItems:"center"},i.a.createElement(r.a,{item:!0},i.a.createElement(s.a,{variant:"body1",justify:"center"},"Copyright \xa9 ",(new Date).getFullYear()," - Aleksandar Timotijevic")))},le={aboutText:"Passionn\xe9 par l'informatique depuis toujours, c'est logiquement que je me suis tourn\xe9 vers des \xe9tudes de Programmation.\nCela m'a permis d'acqu\xe9rir un esprit logique et une capacit\xe9 d'analyse, mais aussi les bases dans tous les domaines de l'Informatique tels que la gestion de projets, les r\xe9seaux, les bases de donn\xe9es, la s\xe9curit\xe9 et le g\xe9nie logiciel.\nApr\xe8s un stage de fin d\u2019\xe9tudes r\xe9ussi, l\u2019id\xe9e de mettre \xe0 profit mes comp\xe9tences acquises \xe0 l\u2019Universit\xe9 au sein de projets concrets m\u2019a motiv\xe9 \xe0 me lancer dans le monde professionnel.\nLes un an au sein de Talan Labs m\u2019ont permis d\u2019acqu\xe9rir une solide exp\xe9rience dans l\u2019artisanat logiciel, notamment en participant \xe0 un projet d\u2019envergure pour le compte de la SNCF Gares & Connexions.",jobs:[{location:{logo:"./logoTalanLabs.png",name:"Talan Labs",adress:"Paris, France"},dates:"Sep. 2018 - D\xe9c. 2019",title:"D\xe9veloppeur Fullstack Javascript",summary:"",description:"Mont\xe9e en comp\xe9tences",bulletPoints:["Javascript (NodeJS, ReactJS, ES6)","Artisanat logiciel (Extreme Programming, Mob / Pair Programming, Tests Driven Development, Code Review, Git Workflow, Clean Code, Clean Architecture)","Agilit\xe9 (Scrum, Kanban)","Int\xe9gration et D\xe9ploiement continu"],mainTechnos:["NodeJS","ReactJS","ES6","XP","TDD","Git","Scrum","CI/CD"],projects:[{location:{logo:"./logoSncf.png",name:"SNCF Gares & Connexions (via Talan Labs)",adress:"Paris, France"},dates:"Nov. 2018 - D\xe9c. 2019",title:"D\xe9veloppeur Fullstack Javascript",summary:"Dans le but de tester et monitorer une application en cours de d\xe9veloppement en mode bo\xeete grise, la SNCF Gares et Connexions souhaitait d\xe9velopper un outil de test afin de v\xe9rifier les performances, la mont\xe9e en charge et la coh\xe9rence entre les donn\xe9es envoy\xe9es en entr\xe9e et les donn\xe9es re\xe7ues en sortie de cette derni\xe8re.",description:"",bulletPoints:["Cr\xe9ation de modules conteneuris\xe9s en entr\xe9e et en sortie de l\u2019application (NodeJS, Docker, API REST, WebSockets)","Cr\xe9ation d\u2019une interface permettant le pilotage l\u2019outil de test (ReactJS, Swagger)","Mise en place d\u2019une base de donn\xe9es (InfluxDB)","Mise en place d\u2019un tableau de bord pour monitorer les performances de l\u2019application test\xe9e (Grafana)","Mise en place d\u2019un outil pour valider la mont\xe9e en charge de notre solution (Gatling)","D\xe9ploiement, gestion (mont\xe9e en charge) et monitoring de notre outil d\xe9ploy\xe9 sur un cluster Kubernetes (Helm, kubectl, DataDog)"],mainTechnos:["NodeJS","ReactJS","ES6","InfluxDB","Grafana","Gatling","Docker","Kubernetes","Helm","TDD","Git","Scrum"]}]},{location:{logo:"./logoAcsi.png",name:"ACSI Multimedia",adress:"Saint-Gratien, France"},dates:"F\xe9v. 2018 - Mai 2019",title:"D\xe9veloppeur Stagiaire Java",summary:"En tant que d\xe9veloppeur stagiaire, mon r\xf4le \xe0 \xe9t\xe9 de con\xe7evoir et d'impl\xe9menter un logiciel pour un client de l'entreprise avec le soutien de mon ma\xeetre de stage.",description:"",bulletPoints:[],mainTechnos:["JavaEE","Glassfish","MySQL","Microsoft Access","Jax WS","SOAP","XML","PDF"],projects:[{location:{logo:"./logoAtcn.png",name:"SAS ATCN",adress:"Saint-Gratien, France"},dates:"F\xe9v. 2018 - Mai 2019",title:"D\xe9veloppeur Stagiaire Java",summary:"",description:"",bulletPoints:["Analyse et d\xe9finition des besoins du Client final","Mise en place et configuration d'une Base de Donn\xe9es MySQL : MySQL WorkBench","Mise en place d'un Web Service : Serveur Glassfish 5, Back-End JavaEE","Migration d'une Base de Donn\xe9es ACCESS 97 vers MySQL :  de la BDD sous Excel, Cr\xe9ation de scripts d'importation dans la nouvelle BDD (Parsing Excel - Apache POI, Validation des donn\xe9es, Import MySQL par Web Service)","Mise en place d'une interface graphique : Front-End JavaFX, Syst\xe8me de comptes utilisateurs (Cryptage et stockage des mots de passe dans la BDD, Syst\xe8me de Tokens utilisateurs)","Configuration de la communication Front Back (Client Serveur) : Jax-WS, SOAP-XML","Mise en place de la cr\xe9ation de documents : Fiches de Suivi de Commandes, Bons de Livraisons, etc. (Remplissage de formulaires PDF - API iText)"],mainTechnos:["JavaEE","Glassfish","MySQL","Microsoft Access","Jax WS","SOAP","XML","PDF"]}]}],studies:[{location:{logo:"./logoDescartes.png",name:"Universit\xe9 Paris 5 Descartes",adress:"Paris, France"},dates:"2012 - 2018",title:"Licence MIAGE (M\xe9thodes Informatiques Appliqu\xe9es \xe0 la Gestion des Entreprises)",description:"Comp\xe9tences principales acquises",bulletPoints:["Langages de programmation : C, Java, C#, Web (HTML, CSS, JavaScript, PHP)","Bases de donn\xe9es : PostgreSQL","Ing\xe9nierie Logicielle","Gestion de projets","Travail en \xe9quipe"],mainTechnos:["Java","C","C#","Javascript","HTML","CSS","PHP","PostgreSQL"],projects:[{location:{logo:"./logoDescartes.png",name:"Universit\xe9 Paris 5 Descartes",adress:"Paris, France"},dates:"Jan. 2017 - Mai 2017",title:"D\xe9veloppement d'un jeu sur Android (en \xe9quipe de 4)",summary:"",description:"",bulletPoints:["Analyse et d\xe9finition des besoins du client","Etude de march\xe9","Maquettage de l'application","R\xe9daction de la documentation technique : Cahier des Charges, Plan de D\xe9veloppement, Plan de Tests, Cahier de Recette, Guide utilisateurs","Planification et mise en place du projet : RedMine (SVN, Gantt, D\xe9p\xf4t de code)","D\xe9veloppement de la solution logicielle : Android Studio (SDK), Java : Mise en place de la logique de jeu"],mainTechnos:["Java","Android Studio","SVN","Redmine","Gantt"]},{location:{logo:"./logoDescartes.png",name:"Universit\xe9 Paris 5 Descartes",adress:"Paris, France"},dates:"Jan. 2016 - Mai 2016",title:"D\xe9veloppement d'un Jeu de Dames sur PC (en \xe9quipe de 4)",summary:"",description:"",bulletPoints:["Analyse et d\xe9finition des besoins du client","R\xe9daction de la documentation technique : Cahier des Charges, Plan de D\xe9veloppement, Plan de Tests, Cahier de Recette, Guide utilisateurs","Planification et mise en place du projet : RedMine (SVN, Gantt, D\xe9p\xf4t de code)","D\xe9veloppement de la solution logicielle : Unity3D : G\xe9n\xe9ration plateau de jeu et pi\xe8ces, C# : Mise en place de la logique de jeu, Intelligence Artificielle : Algorithme Alpha-Beta, Jeu contre l'ordinateur avec plusieurs niveaux de difficult\xe9s"],mainTechnos:["C#","Unity3D","Intelligence Artificielle","SVN","Redmine","Gantt"]}]},{location:{logo:"",name:"Lyc\xe9e Marcel Cachin",adress:"Saint-Ouen, France"},dates:"2012",title:"Baccalaur\xe9at S",description:""}],skills:[{name:"Javascript",description:"NodeJS (Express, Jest), ReactJS",percentage:90},{name:"Bases de Donn\xe9es",description:"MySQL, PostgreSQL, MongoDB, GraphQL, InfluxDB",percentage:80},{name:"Artisanat Logiciel",description:"Agile (Scrum), XP, TDD, Clean Code",percentage:60},{name:"CI/CD",description:"Git, Docker, Kubernetes",percentage:60},{name:"Architecture",description:"Microservices",percentage:60},{name:"Java",percentage:60}],personnalInformations:{name:"Aleksandar Timotijevic",jobTitle:"D\xe9veloppeur Fullstack Javascript",location:"Paris, France",links:{email:"contact@alekstimo.fr",linkedIn:"https://linkedin.com/in/aleks-timo",github:"https://github.com/PlanAborted",resume:"./Resume.pdf"}}},ce={aboutText:"Passionate about computers since the beginning, I decided to follow Programming studies path. This allowed me to acquire a logical mind and analytical skills, but also the basics in all areas of IT such as project management, networks, databases, security and software engineering. After a first successful experience at TalanLabs, where I had the opportunity to enter the Software Craftsmanship world, I am looking for new challenges to deepen my knowledge.\nAutonomous, eager to learn, curious, available, passionate, these are the main qualities that qualify me. ",jobs:[{location:{logo:"./logoTalanLabs.png",name:"Talan Labs",adress:"Paris, France"},dates:"Sep. 2018 - Dec. 2019",title:"Fullstack Javascript Developer",summary:"",description:"Skills development",bulletPoints:["Javascript (NodeJS, ReactJS, ES6)","Software Craftsmanship (Extreme Programming, Mob / Pair Programming, Tests Driven Development, Code Review, Git Workflow, Clean Code, Clean Architecture)","Agility (Scrum, Kanban)","Continuous Integration and Development"],mainTechnos:["NodeJS","ReactJS","ES6","XP","TDD","Git","Scrum","CI/CD"],projects:[{location:{logo:"./logoSncf.png",name:"SNCF Gares & Connexions (through Talan Labs)",adress:"Paris, France"},dates:"Nov. 2018 - Dec. 2019",title:"Fullstack Javascript Developer",summary:"In order to test and monitor an application under development in grey box mode,\n        SNCF Gares et Connexions wanted to develop a test tool to check the performance,\n        scalability and consistency between the data sent in and the data received out of the\n        latter.",description:"",bulletPoints:["Creation of containerized modules on input and output sides of the application (NodeJS, Docker, API REST, WebSockets)","Creation of an interface allowing the control of the test tool (ReactJS,Swagger)","Setting up a database (InfluxDB)","Dashboard implementation to monitor the performance of the tested application (Grafana)","Implementation of a tool to validate the scalability of our solution (Gatling)","Deployment, management (scalability) and monitoring of our tool deployed on\n          a Kubernetes cluster (Helm, kubectl, DataDog)"],mainTechnos:["NodeJS","ReactJS","ES6","InfluxDB","Grafana","Gatling","Docker","Kubernetes","Helm","TDD","Git","Scrum"]}]},{location:{logo:"./logoAcsi.png",name:"ACSI Multimedia",adress:"Saint-Gratien, France"},dates:"Feb. 2018 - May 2019",title:"Java Developer Intern",summary:"As an intern developer, my role was to design and implement a software for the entreprise's client.",description:"",bulletPoints:[],mainTechnos:["JavaEE","Glassfish","MySQL","Microsoft Access","Jax WS","SOAP","XML","PDF"],projects:[{location:{logo:"./logoAtcn.png",name:"SAS ATCN",adress:"Saint-Gratien, France"},dates:"F\xe9v. 2018 - Mai 2019",title:"Fullstack Java Developer Intern",summary:"",description:"",bulletPoints:["Analysis and definition of the end customer's needs","Setting up and configuring a MySQL Database : MySQL WorkBench","Web Service implementation : Serveur Glassfish 5, Back-End JavaEE","Migrating an ACCESS 97 database to MySQL : Exporting the database to Excel,\n          Creating import scripts in the new database\n          (Excel parsing - Apache POI, Data validation, MySQL import by Web Service)","Implementation of a graphical interface: JavaFX Front-End, User Account System (Encryption and storage of passwords in the BDD, User Token System)","Front - Back communication configuration (Client-Server): Jax-WS, SOAP-XML","Setting up document creation: Order Tracking Sheets, Delivery Notes, etc. (Filling PDF forms - iText API)"],mainTechnos:["JavaEE","Glassfish","MySQL","Microsoft Access","Jax WS","SOAP","XML","PDF"]}]}],studies:[{location:{logo:"./logoDescartes.png",name:"Paris 5 Descartes University",adress:"Paris, France"},dates:"2012 - 2018",title:"CS Bachelor's Degree",description:"Main skills acquired",bulletPoints:["Programming languages: C, Java, C#, Web (HTML, CSS, JavaScript, PHP)","Databases: PostgreSQL","Software Engineering","Project management","Teamwork"],mainTechnos:["Java","C","C#","Javascript","HTML","CSS","PHP","PostgreSQL"],projects:[{location:{logo:"./logoDescartes.png",name:"Paris 5 Descartes University",adress:"Paris, France"},dates:"Jan. 2017 - May 2017",title:"Android Runner game development (4 people)",summary:"",description:"",bulletPoints:["Analysis and definition of customer needs","Market research","Application modeling","Writing of technical documentation: Specifications, Development Plan, Test Plan, Acceptance Test Plan, User Guide","Project planning and implementation: RedMine (SVN, Gantt, Code repository)","Development of the software solution: Android Studio (SDK), Java: Implementation of the game logic"],mainTechnos:["Java","Android Studio","SVN","Redmine","Gantt"]},{location:{logo:"./logoDescartes.png",name:"Paris 5 Descartes University",adress:"Paris, France"},dates:"Jan. 2016 - May 2016",title:"PC Checkers game development (4 people)",summary:"",description:"",bulletPoints:["Analysis and definition of customer needs","Writing of technical documentation: Specifications, Development Plan, Test Plan, Acceptance Test Plan, User Guide","Project planning and implementation: RedMine (SVN, Gantt, Code repository)","Development of the software solution: Unity3D: Generation of game board and parts, C#: Implementation of game logic, Artificial Intelligence: Alpha-Beta algorithm, Game against the computer with several levels of difficulty"],mainTechnos:["C#","Unity3D","Artificial Intelligence","SVN","Redmine","Gantt"]}]},{location:{logo:"",name:"Marcel Cachin High School",adress:"Saint-Ouen, France"},dates:"2012",title:"Scientific High School Diploma",description:""}],skills:[{name:"Javascript",description:"NodeJS (Express, Jest), ReactJS",percentage:90},{name:"Databases",description:"MySQL, PostgreSQL, MongoDB, GraphQL, InfluxDB",percentage:80},{name:"Software Craftsmanship",description:"Agile (Scrum), XP, TDD, Clean Code",percentage:60},{name:"CI/CD",description:"Git, Docker, Kubernetes",percentage:60},{name:"Architecture",description:"Microservices",percentage:60},{name:"Java",percentage:60}],personnalInformations:{name:"Aleksandar Timotijevic",jobTitle:"Fullstack Javascript Developer",location:"Paris, France",links:{email:"contact@alekstimo.fr",linkedIn:"https://linkedin.com/in/aleks-timo",github:"https://github.com/PlanAborted",resume:"./Resume.pdf"}}},me=a(99),de=a(52),ue=a(100),pe=Object(C.a)((function(e){return{header:{backgroundColor:e.palette.grey.A400,color:e.palette.grey[50],padding:e.spacing(15,5,6,5)},content:{padding:e.spacing(3)},footer:{backgroundColor:e.palette.grey.A400,color:e.palette.grey[50],padding:e.spacing(5)}}})),ge=function(){var e=pe(),t=Object(n.useState)(le),a=Object(m.a)(t,2),o=a[0],r=a[1],s=Object(n.useState)(!1),l=Object(m.a)(s,2),c=l[0],d=l[1],u=Object(n.useState)(!0),p=Object(m.a)(u,2),g=p[0],f=p[1];return Object(n.useEffect)((function(){r(g?le:ce)}),[g]),i.a.createElement(me.a,{theme:Object(de.a)({typography:{fontSize:12},palette:{type:c?"dark":"light"}})},i.a.createElement(ue.a,null),i.a.createElement(j.Helmet,null,i.a.createElement("title",null,"Aleksandar Timotijevic | Fullstack Javascript Developer"),i.a.createElement("meta",{name:"description",content:"Aleksandar Timotijevic's personnal resume/website"})),i.a.createElement(T,{links:o.personnalInformations.links,handleSwitchDarkMode:function(){d(!c)},darkMode:c,handleSwitchLocale:function(){f(!g)},localeIsFrench:g}),i.a.createElement(oe.a,{maxWidth:!1,disableGutters:!0,classes:{root:e.header}},i.a.createElement(O,o.personnalInformations)),i.a.createElement(oe.a,{maxWidth:!1,disableGutters:!0,classes:{root:e.content}},i.a.createElement(re,{aboutText:o.aboutText,jobs:o.jobs,studies:o.studies,skills:o.skills,localeIsFrench:g})),i.a.createElement(oe.a,{maxWidth:!1,disableGutters:!0,classes:{root:e.footer}},i.a.createElement(se,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var fe=document.getElementById("root");Object(o.render)(i.a.createElement(ge,null),fe),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[57,1,2]]]);
//# sourceMappingURL=main.38470588.chunk.js.map