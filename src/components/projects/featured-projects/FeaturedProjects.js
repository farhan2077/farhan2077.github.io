import React from "react";
import featuredProjectsInfo from "./featuredProjectsInfo";

import { ReactComponent as ExternalLinkIcon } from "assets/icons/external-link-icon.svg";
import { ReactComponent as GithubIcon } from "assets/icons/github-icon.svg";

export default function FeaturedProjects() {
  return (
    <div>
      <span id="project"></span>
      <h2 className="header">featured projects</h2>
      <section className="mt-7 md:mt-14 ml-0 lg:ml-28 mr-0 lg:mr-28 grid gap-y-0 md:gap-y-1.5">
        {featuredProjectsInfo.map((project) => (
          <div
            key={project.id}
            className="flex flex-col md:flex-row mb-8 md:mb-10 last:mb-0 gap-y-3 md:gap-y-0 gap-x-0 md:gap-x-10"
          >
            <div className="border-3 border-blue-500 hover:border-blue-600 rounded-md overflow-hidden w-full md:w-1/2 transition ease-in-out duration-200 shadow-md hover:shadow-lg">
              <a
                href={project.externalLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project.imageSrc}
                  alt={project.projectName}
                  className="object-cover w-full"
                />
              </a>
            </div>
            <div className="w-full md:w-1/2">
              <div className="text-primary text-gray-600 uppercase tracking-tight font-bold">
                {project.projectName}
              </div>
              <div className="text-primary mt-1">{project.summary}</div>
              <div className="flex gap-x-3 mt-2 md:mt-5">
                {project.tags.map((tag, index) => (
                  <div
                    key={index}
                    className="text-sm bg-blue-100 text-blue-700 px-2.5 py-0.5 rounded-full"
                  >
                    {tag.tagName}
                  </div>
                ))}
              </div>
              <div className="flex items-center mt-3 md:mt-6 ml-0.5">
                <div>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon className="w-5 mr-4 text-gray-500 hover:text-blue-600 stroke-current stroke-2 transition ease-in-out duration-200 transform hover:-translate-y-0.5" />
                  </a>
                </div>
                <div>
                  <a
                    href={project.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLinkIcon className="mb-0.5 w-5 text-gray-500 hover:text-blue-600 stroke-current stroke-2 transition ease-in-out duration-200 transform hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
