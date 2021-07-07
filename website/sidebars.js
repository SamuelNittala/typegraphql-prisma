/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: "autogenerated", dirName: "." }],

  docs: [
    {
      type: "doc",
      id: "intro",
      label: "Introduction",
    },
    {
      type: "category",
      label: "Basics",
      items: [
        {
          type: "autogenerated",
          dirName: "basics",
        },
      ],
    },
    {
      type: "category",
      label: "Advanced",
      items: [
        {
          type: "autogenerated",
          dirName: "advanced",
        },
      ],
    },
  ],
  examples: [
    {
      type: "ref",
      id: "examples",
    },
  ],
};
