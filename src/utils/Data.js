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
            project_name: "Restaurant App",
            project_desc: "I offer my heartfelt thanks to my teacher, Mr. T. Suresh for such precious assistance and guidance throughout this assignment. His constructive critique and encouragement are the reasons for being able to make it through this project. I also thank all those persons who contributed to the surveys, interviews, and focus group discussions. Their honest insights and feedback played the most vital role in determining the success of this research. ",
            tech_stack: ['React JS','Tailwind','Firebase'],
            project_img:Project1,
            project_url: 'http://www.youtube.com',
            reverse: false,
        },
        {
            id: 1,
            project_name: "Animax",
            project_desc: "I offer my heartfelt thanks to my teacher, Mr. T. Suresh for such precious assistance and guidance throughout this assignment. His constructive critique and encouragement are the reasons for being able to make it through this project. I also thank all those persons who contributed to the surveys, interviews, and focus group discussions. Their honest insights and feedback played the most vital role in determining the success of this research. ",
            tech_stack: ['React JS','Firebase'],
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