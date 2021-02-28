import symbolSearch from "./featured-projects-images/symbolSearch.png";
import nodeBlogZlog from "./featured-projects-images/nodeBlogZlog.png";
import studyRoom4UDemo from "./featured-projects-images/studyRoom4UDemo.png";

const featuredProjectsList = [
  {
    id: 1,
    projectName: "symbol search",
    imageSrc: symbolSearch,
    summary:
      "Tired of searching for symbols for assignments? Go to Symbol Search and find them right away.",
    tags: [
      {
        tagName: "html",
      },
      {
        tagName: "css",
      },
    ],
    externalLink: "https://symbol-search.netlify.app/",
    githubLink: "https://github.com/farhan2077/symbol-search",
    githubAvailability: "yes",
  },
  {
    id: 2,
    projectName: "zlog the blog",
    imageSrc: nodeBlogZlog,
    summary: "A beautiful blogging site made for the readability.",
    tags: [
      {
        tagName: "express",
      },
      {
        tagName: "authentication",
      },
    ],
    externalLink: "https://nodeblogzlog.herokuapp.com/",
    githubLink: "https://github.com/farhan2077/node-blog-test",
    githubAvailability: "no",
  },
  {
    id: 3,
    projectName: "study room for you",
    imageSrc: studyRoom4UDemo,
    summary: "An overhauled look and feel of one of my friend's website.",
    tags: [
      {
        tagName: "bootstrap",
      },
    ],
    externalLink: "https://studyroom4udemo.netlify.app/",
    githubLink: "https://github.com/farhan2077/studyroom4uDemo",
    githubAvailability: "yes",
  },
];

export default featuredProjectsList;
