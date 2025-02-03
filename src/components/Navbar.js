import React, {useState, useEffect} from 'react'
import { motion, AnimatePresence } from 'framer-motion';

//import global styles
import {
    FlexContainer,
    PaddingContainer,
    Container,
    BlueText,
} from '../styles/Global.styled';

//import navbar styles 
import {
    NavbarContainer,
    Logo,
    MenuIcon,
} from '../styles/Navbar.styled';

import { GiHamburgerMenu } from 'react-icons/gi';
import { theme } from '../utils/Theme';
import NavMenu from './layouts/NavMenu';

const Navbar = () => {
    const [OpenMenu, setOpenMenu] = useState(false);
    const [sticky, setSticky] = useState(false);

    useEffect (()=> {
        // onscroll function
        const onScroll = () => {
            window.pageYOffset > 50 ? setSticky (true) : setSticky (false)
        }
        window.addEventListener ('scroll',onScroll);

        //cleanup
        return () => window.removeEventListener('scroll',onScroll);
    },[])

    return (
        <NavbarContainer bgcolor= {sticky ? theme.colors.primary : 'transparent'}>
            <PaddingContainer
                top="1.2rem"
                bottom="1.2rem"
                responsiveleft="1rem"
                responsiveright="1rem"
            >
                <Container>
                    <FlexContainer justify ="space-between" responsiveflex ="true">

                        {/*--left-logo--*/}
                        <Logo>
                            JustA <BlueText>Dev</BlueText>
                        </Logo>
                        
                         {/*--right-menu-icon--*/}
                         <MenuIcon
                         as={motion.a}
                         whileHover={{scale:1.2}}
                         onClick={() =>{ setOpenMenu(true) }}
                         >
                            <GiHamburgerMenu/>
                         </MenuIcon>
                        

                    </FlexContainer>
                </Container>

                <AnimatePresence>
                    {OpenMenu && <NavMenu setOpenMenu={setOpenMenu} />}
                </AnimatePresence>
                
            </PaddingContainer>
        </NavbarContainer>
    )
}

export default Navbar