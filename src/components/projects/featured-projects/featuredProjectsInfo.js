import symbolSearch from "assets/featured-projects-images/symbols-search.png";
import nodeBlogZlog from "assets/featured-projects-images/node-blog-zlog.png";
import kuEceHelper from "assets/featured-projects-images/ku-ece-helper.png";

const featuredProjectsList = [
  {
    id: 1,
    projectName: "symbol search",
    imageSrc: symbolSearch,
    summary:
      "Tired of searching for symbols for assignments? Go to Symbol Search and find them right away.",
    tags: [
      {
        tagName: "nextjs",
      },
      {
        tagName: "tailwindcss",
      },
    ],
    externalLink: "https://symbols-search.vercel.app/",
    githubLink: "https://github.com/farhan2077/symbols-search",
  },
  {
    id: 2,
    projectName: "KU ECE Helper",
    imageSrc: kuEceHelper,
    summary: "KU ECE academic related things in one place.",
    tags: [
      {
        tagName: "nextjs",
      },
      {
        tagName: "chakra-ui",
      },
    ],
    externalLink: "https://ku-ece-helper.vercel.app/",
  },
  {
    id: 3,
    projectName: "zlog the blog",
    imageSrc: nodeBlogZlog,
    summary: "A beautiful blogging site made for the readability.",
    tags: [
      {
        tagName: "express",
      },
      {
        tagName: "ejs",
      },
      {
        tagName: "authentication",
      },
    ],
    externalLink: "https://nodeblogzlog.herokuapp.com/",
    githubLink: "https://github.com/farhan2077/node-blog-test",
  },
];

export default featuredProjectsList;
