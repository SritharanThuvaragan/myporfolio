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
                AI Regulation Advocate: "And that´s why accountability is important. Bias doesn't just 
                contribute to poverty experience but also suffers from real damages, especially in 
                areas such as health monitoring or accessibility tools. They should be responsible for 
                their algorithms," said an AI regulation advocate.
                </ParaText>
                
                <ParaText>
                AI Regulation Advocate: "And that´s why accountability is important. Bias doesn't just 
                contribute to poverty experience but also suffers from real damages, especially in 
                areas such as health monitoring or accessibility tools. They should be responsible for 
                their algorithms," said an AI regulation advocate.
                </ParaText>

            </motion.div>

        </FlexContainer>
        </PaddingContainer>
    )
}

export default MySkills;