import React from 'react'
import {motion} from 'framer-motion';

//import global styles
import {
    FlexContainer,
    PaddingContainer,
    Heading,
    IconContainer,
    ParaText,
    BlueText,
} from '../styles/Global.styled';

//import my skills styles
import{
    SkillsCardContainer,
    SkillsCard,
} from '../styles/MySkills.styled';

import { Skills } from '../utils/Data'

import { fadeInLeftVariant, fadeInRightVariant } from '../utils/Variants';

const MySkills = () =>{
    return (
        <PaddingContainer
        id="Skills"
        top="10%"
        bottom= "10%"
        responsiveleft="1rem"
        responsiveright="1rem"
        >

        <FlexContainer 
        responsiveflex ="true"
        responsivedirection="column-reverse"
        fullwidthchild="true"
        >
            {/*--left-section--*/}
            <SkillsCardContainer
                as = {motion.div}
                variants={fadeInLeftVariant}
                initial= "hidden"
                whileInView= "visible"
            >
                {Skills.map((skill, index) => (
                    <SkillsCard key={index}> 
                        <IconContainer size="5rem" color="blue">
                           {skill.icon}
                        </IconContainer>

                        <Heading as="h4" size= "h4" >
                            {skill.tech}
                        </Heading>
                    </SkillsCard>
                ))}
            </SkillsCardContainer>

            {/*--right-section--*/}
            <motion.div
                variants={fadeInRightVariant}
                initial= "hidden"
                whileInView= "visible"
            >
                <Heading as="h4" size= "h4">
                    MY SKILLS
                </Heading>

                <Heading as="h2" size="h2" top = "0.5rem">
                    What<BlueText> I can do</BlueText>
                </Heading>

                <ParaText top ="2rem" bottom = "1.5rem">
                AI Regulation Advocate: I am a software engineering student at BCAS Campus, with a strong passion for 
                exploring innovative technologies and applying them to real-world problems. Currently, I am working on 
                various projects, including a Smart Water Tank system, network shortest path algorithms, and a sales data 
                analysis application for Sampath Food City. 
                </ParaText>
                
                <ParaText>
                Throughout my studies, I have embraced the principles of clean coding, SOLID development practices, and data
                science techniques, ensuring that my projects are scalable, maintainable, and effective in solving real business 
                challenges. I am always eager to expand my knowledge and apply it to new and diverse projects. Additionally,
                I have gained valuable experience as an intern at CodeArson, where I have honed my problem-solving and
                development skills. 
                </ParaText>

            </motion.div>

        </FlexContainer>
        </PaddingContainer>
    )
}

export default MySkills;