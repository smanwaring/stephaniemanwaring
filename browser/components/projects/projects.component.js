import React from 'react';
import projects from './projects-list';

export default () => (
	<div className="spacer">
		{ projects.map( project => {
			return (
				<div key={project.id} className="wrapper bottom-spacer">
					<aside className="aside aside-1">
						<ul className="flex-container">
							<li className={`video-lg-${project.id}`}></li>
						</ul>
					</aside>
				<article className="main">
					<div className="project-head">{project.title}</div>
					<div className="main-text-project">
						{project.description}
					</div>
					<br/>
					<div className="main-text-project">
						Powered by: {project.poweredBy}
						</div>
					<br/>
					{ project.links.map( link => {
						return (
							<a key={link.url} href={link.url}><div className="link-box">{link.display}</div></a>
						);
					})
					}
				</article>
			</div>
			);
		})}
	</div>
);

