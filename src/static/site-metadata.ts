interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Running Page',
  siteUrl: 'https://runnning.imzt.one',
  logo: 'https://avatars.githubusercontent.com/u/33047106?v=4',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Github',
      url: 'https://github.com/imztone',
    },
    {
      name: 'About',
      url: 'https://github.com/imztone',
    },
  ],
};

export default data;
