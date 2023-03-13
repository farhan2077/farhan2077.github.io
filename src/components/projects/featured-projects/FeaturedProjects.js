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
            className="flex flex-col mb-8 md:flex-row md:mb-10 last:mb-0 gap-y-3 md:gap-y-0 gap-x-0 md:gap-x-10"
          >
            <div className="w-full overflow-hidden transition duration-200 ease-in-out border-blue-500 rounded-md shadow-md border-3 hover:border-blue-600 md:w-1/2 hover:shadow-lg">
              <a
                href={project.externalLink || project.githubLink}
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
              <div className="font-bold tracking-tight text-gray-600 uppercase text-primary">
                {project.projectName}
              </div>
              <div className="mt-1 text-primary">{project.summary}</div>
              <div className="flex mt-2 gap-x-3 md:mt-5">
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
                  {project.githubLink ? (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GithubIcon className="w-5 mr-4 text-gray-500 hover:text-blue-600 stroke-current stroke-2 transition ease-in-out duration-200 transform hover:-translate-y-0.5" />
                    </a>
                  ) : (
                    <div></div>
                  )}
                </div>
                <div>
                  {project.externalLink ? (
                    <a
                      href={project.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLinkIcon className="mb-0.5 w-5 text-gray-500 hover:text-blue-600 stroke-current stroke-2 transition ease-in-out duration-200 transform hover:-translate-y-0.5" />
                    </a>
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
