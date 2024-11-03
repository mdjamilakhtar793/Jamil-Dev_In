export const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },

  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a FullStack Ecommerce Web App",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Online Ecommerce website to explore",
    des: "Designed and Developed Online ecommerce platform, that allowing users to buy products. such as, maxPrice and minPrice, and Category wise search, filters products, user can Buy products anything anywhere authenticated users.● Admin Dashboard, admin can manage and see revenue & transaction, users, products and, inventory, gender ratio, order throughout the year and Order fulfilment ratio, stock availability, revenue distribution, user age group, active user,total revenue, discount allotted, and coupon code and on dashboard.",
    img: "/Ecommerce.png",
    iconLists: ["/re.svg", "js.gif", "/node.png", "/mongo.png"],
    link: "https://tamanna-collection--theta.vercel.app/",
  },
  {
    id: 2,
    title: "Online Booking to explore",
    des: "Designed and Developed Online marketplace platform, that allowing users to search accommodations. such as, date range, map location, number of guests, listings, search filters property, user can anything anywhere booking/reserve.Guest / Owner Booking / Reservation system, cancellation, Creation and deletion of properties Pricing calculation.Credential authentication, Google authentication, GitHub authentication.Implementing responsive design and ensuring cross-browser compatibility.",
    img: "/Qbooking.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/mongo.png"],
    link: "https://quick-booking-eight.vercel.app/",
  },
  {
    id: 3,
    title: "Real-Estate Agency to explore",
    des: "Real-Estate is to the best place to find your next perfect place to live.Real estate agency that specializes in helping clients buy, sell, and rent properties in the most desirable neighborhoods.",
    img: "/realestate.png",
    iconLists: ["/re.svg", "js.gif", "/node.png", "/mongo.png"],
    link: "https://rm-real-estate-agency-kbyz.onrender.com/",
  },
  {
    id: 4,
    title: "Drug Research Platform",
    des: "Developed a full-stack w e b application researchers and visualize molecular structures, generate custom molecules using SMILES notation. aims to streamline the molecular research process, and improved decision-making. Group creation and message management for research collaboration. Implemented 6+ key features including user authentication, authorization, AI powered molecule generation, Real-time collaboration, dashboard, Molecule visualization, Data analysis with RDKit.",
    img: "/prj.png",
    iconLists: ["/re.svg", "js.gif", "/node.png", "/mongo.png"],
    link: "https://medicine-research-platform.vercel.app/auth-page/signin",
  },
];

export const testimonials = [
  {
    quote:
      "I thought it was impossible to make a website as beautiful as our product, but proved me wrong.I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "@Dr R Prakash",
    images:
      "https://cdn1.vectorstock.com/i/1000x1000/23/70/man-avatar-icon-flat-vector-19152370.jpg",
    title: "HOD Of CSE - AVIT",
  },
  {
    quote:
      "Collaborating with Md Jamil Akhtar was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Jamil Akhtar's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Jamil Akhtar is the ideal partner.",
    name: "@Sonu Iqubal",
    images:
      "https://cdn1.vectorstock.com/i/1000x1000/23/70/man-avatar-icon-flat-vector-19152370.jpg",
    title: "Director of Tamanna Collection",
  },
];

export const companies = [
  {
    id: 1,
    name: "T-C Collection",
    img: "/t-c.png",
    nameImg: "/t-c.png",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Development",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Web Dev Project",
    desc: "Lead the dev of a Web app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/mdjamilakhtar793",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/mdakhtar_jamil",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/mdjamilakhtar786/",
  },
  {
    id: 3,
    img: "/facebook.png",
    link: "https://www.facebook.com/profile.php?id=100023565732668",
  },
  {
    id: 3,
    img: "/instagram.png",
    link: "https://www.instagram.com/_mdjamilakhtar786/",
  },
];
