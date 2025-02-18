// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Conference, journal, and preprint publications of my work",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-photography",
          title: "Photography",
          description: "Street and Travel Gallery",
          section: "Navigation",
          handler: () => {
            window.location.href = "/photography/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Details about my track record and previous affiliations",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-welcome",
      
        title: "Welcome!",
      
      description: "Introducing the new website",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/welcome/";
        
      },
    },{id: "news-the-seacrowd-data-catalogue-the-main-consolidated-repositority-for-all-datasets-collected-by-the-seacrowd-project-is-now-live",
          title: 'The SEACrowd Data Catalogue – the main consolidated repositority for all datasets collected...',
          description: "",
          section: "News",},{id: "news-i-ll-be-joining-mbzuai-as-a-phd-student-this-fall-2024",
          title: 'I’ll be joining MBZUAI as a PhD student this Fall 2024!',
          description: "",
          section: "News",},{id: "news-the-preprint-for-our-paper-cvqa-culturally-diverse-multilingual-visual-question-answering-benchmark-is-out",
          title: 'The preprint for our paper CVQA: Culturally-diverse Multilingual Visual Question Answering Benchmark is...',
          description: "",
          section: "News",},{id: "news-the-preprint-for-our-paper-seacrowd-a-multilingual-multimodal-data-hub-and-benchmark-suite-for-southeast-asian-languages-is-out",
          title: 'The preprint for our paper SEACrowd: A Multilingual Multimodal Data Hub and Benchmark...',
          description: "",
          section: "News",},{id: "news-one-paper-in-emnlp-and-two-papers-in-wmt-2024-were-accepted",
          title: 'One paper in EMNLP and two papers in WMT 2024 were accepted!',
          description: "",
          section: "News",},{id: "news-cvqa-has-been-accepted-as-an-oral-presentation-in-neurips-2024",
          title: 'CVQA has been accepted as an oral presentation in NeurIPS 2024!',
          description: "",
          section: "News",},{id: "news-we-release-world-cuisines-a-massive-multilingual-and-multicultural-vqa-benchmark-dataset-preprint-can-be-accessed-here",
          title: 'We release World Cuisines, a massive multilingual and multicultural VQA benchmark dataset. Preprint...',
          description: "",
          section: "News",},{id: "news-we-are-proud-to-announce-the-creation-of-the-acl-special-interest-group-on-southeast-asian-nlp-acl-sigsea",
          title: 'We are proud to announce the creation of the ACL Special Interest Group...',
          description: "",
          section: "News",},{id: "news-two-papers-world-cuisines-and-thank-you-stingray-have-been-accepted-in-naacl-2025",
          title: 'Two papers, World Cuisines and Thank You, Stingray, have been accepted in NAACL...',
          description: "",
          section: "News",},{id: "projects-vancouver",
          title: 'Vancouver 🇨🇦',
          description: "December 2024",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
