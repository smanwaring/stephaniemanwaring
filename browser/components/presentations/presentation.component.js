import React from 'react';
import './presentations.scss';

const presentations = [
  { id: 1, href: 'https://www.youtube.com/watch?v=XkqyDM28y4A&t=25s', title: 'TECH TALK: THE JAVASCRIPT SEMICOLON', description: 'A semi-deep dive into the finer points of semicolons in JavaScript.' },
  { id: 2, href: 'https://www.youtube.com/watch?v=3CYqL3NCO_8', title: 'PROJECT DEMO: SILENT-SALUTATIONS', description: 'A demonstration of a simple silent-applauding app built during a 24-hour hackathon.' },
  { id: 3, href: 'https://www.youtube.com/watch?v=5izv_zAEQEI&t=1s', title: 'PROJECT DEMO: ARCHIVER', description: 'A group presentation on a custom version control desktop application built while at Fullstack Academy.' }
];

export default () => (
  <div className="grey-section spacer-extra">
    <div className="wrapper">
      <article className="main">
          <div className="flex-container">
          { presentations.map(presentation => {
            return (
              <a  key={presentation.id} className="presentation-link" href={presentation.href}>
                <div className="spacer-sm">
                    <div className={`video-sm video-sm-${presentation.id}`}></div>
                    <div className="video-text-box">
                        <div className="text-box">
                            <div className="video-text-title">{presentation.title}</div>
                            <div className="video-text-sm">{presentation.description}</div>
                        </div>
                    </div>
                </div>
              </a>
            );
          })}
        </div>
      </article>
    </div>
  </div>
);