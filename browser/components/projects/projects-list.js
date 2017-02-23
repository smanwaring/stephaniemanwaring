const projects = [
  { 
    id: 1,
    title: 'Silent-Salutations',
    description: " A fun single page web application inspired by Periscope's floating hearts and Facebook's reaction icons. Create a custom clap board or join one that already exists to view and/or participate in silent reactions from a audience, gauge audience sentiment, or use it for a colorful visual applaud from remote users during your presentation.", 
    poweredBy: ' React, Redux, Express, PostgreSql, Socket.io, HTML5/CSS3 and my own React-Redux boilerplate', 
    links: [ { url: 'https://github.com/smanwaring/silent-clapper', display: 'GITHUB' }, {url: "https://github.com/smanwaring", display: 'LIVESITE' } ]
  },
  {
    id: 2,
    title: 'Archiver', 
    description: "A custom version-control desktop application for text documents. Users can create teams of collaborators for specific documents and any collaborator can push up changes for others to view or download to their computer. Archiver let's users have a complete version history of all  changes too. Archiver doesn't use any external APIs or git commands. Instead, we built custom version control commands to create a unique user experience that doesn't involve having to learn the command line or having to interface with Github.", 
    poweredBy: 'Electron.js, React, Redux, Express, PostreSql HTML5/CSS3', 
    links: [ { url: 'https://github.com/chehitskenniexd/Archiver', display: 'GIT'}, {url: 'https://www.youtube.com/watch?v=5izv_zAEQEI', display: 'DEMO' } ]
  }
];

export default projects;


