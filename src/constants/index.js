
import {
  web,
  javascript,
  html,
  css,
  git,
  springBoot,
  excelR2,
  HPLUS1,
  sales,
  assesment,
  java,
  github,
  aws,
  reactjs,
  nfidata1,
  mysql
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume"
  }
];

const services = [
  {
    title: "Java Fullstack Developer",
    icon: web,
  },
  
  // {
  //   title: "Backend Developer",
  //   icon: backend,
  // },
  
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Spring Boot",
    icon: springBoot,
  },
  {
    name: "My SQL",
    icon: mysql,
  },
  
  {
    name: "aws",
    icon: aws,
  },
  
  {
    name: "Git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: github,
  },
  
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
   {
    name: "Reactjs",
    icon: reactjs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  
  
];

const experiences = [
  {
    title: "Java Fullstack Developer intern",
    company_name: "ExcelR ",
    icon: excelR2,
    iconBg: "#383E56",
    date: "June 2024 - May 2025",
    points:[
  "Completed Java Full Stack internship at ExcelR, Bengaluru.",
  "Built real-time web apps using Java, Spring Boot, and Hibernate.",
  "Designed responsive UIs with HTML, CSS, Bootstrap, and JavaScript.",
  "Worked with RESTful APIs to connect frontend and backend.",
  "Handled database operations using MySQL.",
  "Used Git & GitHub for version control."
  
]


  },
  {
    title: "Java Web Developer",
    company_name: "Infidata Technologies",
    icon: nfidata1,
    iconBg: "#E6DEDD",
    date: "July 2023 -  Sep 2023",
    points:[
  "Completed hands-on internship in Java Web Development.",
  "Developed Assessment Portal with JSP, Servlets, HTML, CSS, and JavaScript.",
  "Implemented backend logic using Core Java and MySQL.",
  "Designed user-friendly web pages for login, assessments, and results.",
  "Gained full-stack experience from frontend to backend and deployment.",
  "Deployed app on Apache Tomcat, learning web server setup.",
  "Enhanced skills in problem-solving and clean coding."
]

  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];



const projects = [
  {
    name: "Salesavy E-commerce Application",
    description:
      "I built Sales Savvy, an online shopping platform for small and medium businesses. It has two parts: one for admins to manage users, products, and orders, and one for customers to browse products, use the cart, and track orders. I added safe payments using Razorpay and secure login with JWT. The website uses React for the front-end, Spring Boot for the back-end, MySQL for the database, and Docker to run easily. The app is easy to use, safe, and works well even with many users.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "SpringBoot",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "MYSQL",
        color: "blue-text-gradient",
      },
      {
        name: "Razorpay",
        color: "orange-text-gradient",
      },
      {
        name: "Docker",
        color: "green-text-gradient",
      },

      {
        name: "Rest APIs",
        color: "orange-text-gradient",
      },

      {
        name: "JWT",
        color: "pink-text-gradient",
      }
       
    ],
    image: sales,
    visit_link: "https://github.com/Pooja-jadhav20/Sales_Savvy_Ecommerce_Website",
  },
  {
    name: "Assessment Portal Project",
    description:
"I built an Assessment Portal for managing online tests and user performance. It has two modules: one for admins to create tests, manage users, and track results, and one for users to take assessments and view their scores. I implemented secure login with Spring Security and ensured smooth data flow using REST APIs. The front-end is built with HTML, CSS, and Bootstrap, the back-end uses Java and Spring Boot, and data is stored in MySQL. The app is responsive, secure, and handles multiple users efficiently.",
tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "SpringBoot",
        color: "green-text-gradient",
      },
      
      {
        name: "Rest APIs",
        color: "orange-text-gradient",
      },
      {
        name: "MySql",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
     {
  name: "CSS",
  color: "orange-text-gradient",
},
{
  name: "Bootstrap",
  color: "pink-text-gradient",
},
{
  name: "JSP",
  color: "orange-text-gradient", // replaced invalid '-text-gradient' with a valid one
}
    

    ],
    image: assesment,
    visit_link: "https://github.com/Pooja-jadhav20/Assessment_Project1",
  },
  {
    name: "H+ Sports Portal Application",
    description:
      "I built H+ Sports, a Java web application using the Spring MVC framework, following the MVC design pattern. I developed controllers, handled form validations, and configured view resolvers to render dynamic content. The app includes features like localization, global error handling, and interceptors to manage request flow. I also implemented UI theming and built RESTful APIs to support modern integrations. This project enhanced my backend development skills and gave me a strong grasp of Spring’s web capabilities.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "SpringBoot",
        color: "green-text-gradient",
      },
      {
        name: "MySql",
        color: "pink-text-gradient",
      },
      {
        name: "Rest APIs",
        color: "orange-text-gradient",
      },
      {
        name: "JSP",
        color: "blue-text-gradient",
      },
      {
        name: "Spring MVC",
        color: "pink-text-gradient",
      },
     

    ],
    image: HPLUS1,
    visit_link: "https://github.com/Pooja-jadhav20/Hplus-Sports-Portal-Application",
  },
];

export { services, technologies, experiences, projects };
