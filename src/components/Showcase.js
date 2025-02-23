import React from 'react'
import {motion} from 'framer-motion'

//import global styles
import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer,
} from '../styles/Global.styled';

//import showcase style
import { ShowcaseImageCard,
    ShowcaseParticleContainer, 
    Particle,
} from '../styles/Showcase.styled';

//omport react- icons
import { BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from 
"react-icons/bs";

//import asset
import ShowcaseImg from '../assets/showcase-img.png';
import BackgroundImg from '../assets/particle.png';

import { fadeInLeftVariant, fadeInRightVariant } from '../utils/Variants';

const Showcase = () => {
    return (
        <PaddingContainer
        id= "Home"
        left= "3%"
        right= "10%"
        top= "18%"
        bottom= "10%"
        responsiveleft ="1rem"
        responsiveright="1rem"
        responsivetop="8rem"
        >
            <FlexContainer fullwidthchild = "true">
                {/* --left-content-- */}
                <motion.div
                    variants = {fadeInLeftVariant}
                    initial= "hidden"
                    whileInView="visible"
                >
                    <Heading as= "h4" size="h4">Hello!</Heading>

                    <Heading
                        as= "h2"
                        size= "h2"
                        top= "0.5rem"
                        bottom= "1rem"
                    >
                        I'm <BlueText>Thuvaragan Sritharan</BlueText>
                    </Heading>

                    <Heading as="h3" size="h3"> 
                        I'm a <BlueText>Intern </BlueText>
                    </Heading>

                    <ParaText as="p" top="2rem" bottom= "4rem">
                        Hello, My name is Thuvaragan Sritharan I am a software engineering student with expertise in programming 
                        languages like Java, C#, and Python, along with web development skills in HTML, CSS, and JavaScript. 
                        I am passionate about applying technology to solve real-world problems, with experience in data analysis,
                         UI/UX design, and developing practical software solutions.
                    </ParaText>

                    {/*--social-icons-- */}
                    <FlexContainer gap="20px" responsiveflex ="true">
                        <IconContainer color="white" size="1.5rem">
                            <BsLinkedin/>
                        </IconContainer>

                        <IconContainer color="white" size="1.5rem">
                            <BsTwitter/>
                        </IconContainer>

                        <IconContainer color="white" size="1.5rem">
                            <BsYoutube/>
                        </IconContainer>

                        <IconContainer color="white" size="1.5rem">
                            <BsInstagram/>
                        </IconContainer>
                    </FlexContainer>
                </motion.div>
                
                {/*--right-content--*/}
                <FlexContainer 
                    as = {motion.div}
                    variants={fadeInRightVariant}
                    initial = "hidden"
                    whileInView="visible"
                    justify="flex-end"
                >
                    <ShowcaseParticleContainer>
                        <ShowcaseImageCard>
                            <img src={ShowcaseImg} alt="showcase" />
                        </ShowcaseImageCard>
                        <Particle
                            as={motion.img}
                            animate={{
                                x:[0, 100, 0],
                                rotate: 360,
                                scale: [1, 0.5, 1],
                            }}
                            transition = {{
                                duration:20,
                                repeat:Infinity,
                            }}
                            src={BackgroundImg}
                            alt = "particle"
                            top = "-80px"
                            left = "20px"
                            rotate = "60deg"
                        />

                        <Particle
                            as={motion.img}
                            animate={{
                                y:[0, 100, 0],
                                rotate: 360,
                                scale: [1, 0.8, 1],
                            }}
                            transition = {{
                                duration:20,
                                repeat:Infinity,
                            }}
                            src={BackgroundImg}
                            alt = "particle"
                            top = "50px"
                            right = "-70px"
                            rotate = "0deg"
                        />

                        <Particle
                            as={motion.img}
                            animate={{
                                y:[0, -100, 0],
                                rotate: 360,
                                scale: [1, 0.9, 1],
                            }}
                            transition = {{
                                duration:15,
                                repeat:Infinity,
                            }}
                            src={BackgroundImg}
                            alt = "particle"
                            bottom = "10px"
                            left = "-70px"
                            rotate = "50deg"
                        />
                    </ShowcaseParticleContainer>
                </FlexContainer>
            </FlexContainer>
        </PaddingContainer>
    )
}

export default Showcase