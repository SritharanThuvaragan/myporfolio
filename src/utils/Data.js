import {FaReact, FaNode, FaCss3Alt } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';

import Project1 from '../assets/Project1.png';
import Project2 from '../assets/Project2.png';

export const Skills = [
        {
            id: 0,
            tech: 'React JS',
            icon: <FaReact />
        },
        {
            id: 1,
            tech: 'Node JS',
            icon: <FaNode />
        },
        {
            id: 2,
            tech: 'CSS',
            icon: <FaCss3Alt />
        },
        {
            id: 3,
            tech: 'Javascript',
            icon: <SiJavascript />
        }
    ];

    export const projectDetails = [
        {
            id: 0,
            project_name: "Around Lanka",
            project_desc: "I have developed the Around Lanka Travel website, a project aimed at showcasing the beauty and diversity of Sri Lanka. Built using HTML, JavaScript, and CSS, the website features an intuitive and responsive design, providing visitors with easy access to information about various travel destinations across the island. With a focus on user experience, I implemented interactive elements and dynamic content to engage users and offer an immersive browsing experience. This project highlights my skills in front-end web development and my ability to create functional, visually. ",
            tech_stack: ['Html','CSS','JavaScript'],
            project_img:Project1,
            project_url: 'http://www.youtube.com',
            reverse: false,
        },
        {
            id: 1,
            project_name: "Patient register sysytem",
            project_desc: "I developed a patient registration system that utilizes three stacks to efficiently manage the registration process. The system handles patient details by using stacks to store and organize different categories of information, such as personal details, medical history, and appointment data. By implementing this stack-based approach, the project demonstrates the practical application of data structures in solving real-world problems, optimizing the flow of information, and ensuring a structured and efficient data management process.. ",
            tech_stack: ['Java'],
            project_img:Project2,
            project_url: 'http://www.youtube.com',
            reverse: true,
        }

    ]

    export const navLinks = [
        {
            id:0,
            name:'Home',
            href: 'Home',
        },
        {
            id:1,
            name:'My Skills',
            href: 'Skills',  
        },
        {
            id:3,
            name:'My Projects',
            href: 'Projects',
        },
        {
            id:4,
            name:'My Contact',
            href: 'contact',
        },
    
    ]