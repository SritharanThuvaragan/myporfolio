import React from 'react'
import {motion} from 'framer-motion'

//import global styles
import {
    PaddingContainer,
    FlexContainer,
} from '../../styles/Global.styled';

//import Navbar styles
import {
    MenuIcon,
    NavMenuContainer,
    MenuItem,
} from '../../styles/Navbar.styled';

import { AiOutlineClose } from 'react-icons/ai';
import { navLinks } from '../../utils/Data';
import { slideInLeft } from '../../utils/Variants';

const NavMenu = ({setOpenMenu}) => {
    return (
        
        <NavMenuContainer
            as = {motion.div}
            variants={slideInLeft}
            initial="hidden"
            animate ="visible"
            exit = "exit"
        >
             { /*--close-Button--*/}
            <PaddingContainer left="5%" right="5%" top="2rem">
                <FlexContainer justify="flex-end" responsiveflex ="true">
                    <MenuIcon
                    as={motion.a}
                    whileHover={{scale:1.2}}
                    onClick = {() => setOpenMenu(false)}
                    >
                        <AiOutlineClose/>
                    </MenuIcon>
                </FlexContainer>
            </PaddingContainer>

           { /*--menu-items--*/}
           <PaddingContainer top = "8%">
                <FlexContainer
                    direction="column"
                    align= "center"
                    responsiveflex
                >
                    {navLinks.map((link) => (
                        <MenuItem 
                        as={motion.a}
                        whileHover={{scale:1.2}}
                        key= {link.id}
                        href={`#${link.href}`}
                        onClick= {() => setOpenMenu(false)}
                        >
                                {link.name}
                            </MenuItem>
                    ))}
                    
                </FlexContainer>
           </PaddingContainer>
        </NavMenuContainer>
    )
}

export default NavMenu