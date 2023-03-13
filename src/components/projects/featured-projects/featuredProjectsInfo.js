import symbolSearch from "assets/featured-projects-images/symbols-search.png";
import universalAmity from "assets/featured-projects-images/universal-amity.png";
import kuEceHelper from "assets/featured-projects-images/ku-ece-helper.png";
import swifttoll from "assets/featured-projects-images/swifttoll.png";

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
    summary:
      "Question bank for ECE discipline (KU) and link to some other tools.",
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
    projectName: "SwiftToll",
    imageSrc: swifttoll,
    summary:
      "An open source framework for Automatic Toll Collection which includes both hardware and software.",
    tags: [
      {
        tagName: "nextjs",
      },
      {
        tagName: "chakra-ui",
      },
    ],
    githubLink: "https://github.com/farhan2077/swifttoll",
  },
  {
    id: 4,
    projectName: "Universal Amity",
    imageSrc: universalAmity,
    summary: "Landing page redesign for a charity organization.",
    tags: [
      {
        tagName: "react",
      },
      {
        tagName: "tailwindcss",
      },
    ],
    externalLink: "https://universal-amity-v1.netlify.app/",
    githubLink: "https://github.com/farhan2077/universal-amity-website",
  },
];

export default featuredProjectsList;
