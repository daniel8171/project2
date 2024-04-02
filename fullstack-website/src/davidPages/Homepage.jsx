import { ChakraProvider, Box, Button, ButtonGroup, Image, Spacer, Flex, Center } from "@chakra-ui/react";
import logo from "../assets/Images/logo.jpeg";
import backgroundImage from "../assets/Images/homepage.jpg"
import { Routes, Route, Link } from 'react-router-dom';
import React, { Compoment } from 'react';



const props = {
    color: "rgba(50, 90, 141, 0.9)"
}

const Hbutton = (props) => {
    return <Button className="headerButton" 
                    variant="ghost"
                    color="white"
                    fontSize={35}
                    _hover={{bg: "rgba(255, 255, 255, 0.0)"}}>{props.text}
                    </Button>;
  };

function Homepage() {
    return (
        <>
        <div style={{ backgroundImage: `url(${backgroundImage})`, 
                        height: "100vh",
                        backgroundPositionY: "-200px",
                        backgroundPositionX: "-30px"}}>
            <Flex direction="row" alignItems="flex-start" h='50vh' bgGradient={`linear(to bottom, ${props.color}, transparent)`}>
                <Box m={2}><Image borderRadius='full' boxSize='80px' src={logo}/></Box>
                <Spacer />
                <Box m={6}><HeaderButtonsPhysical /></Box>
                <Spacer />
                <Box m={2}boxSize='80px' />
            </Flex>
            <CenterTitle />
        </div>
        </>
    )
}

function HeaderButtons() {
    return (
        <>
        <HeaderButtonsPhysical />
        <HeaderButtonsSwitch />
        </>
    )
}

function HeaderButtonsPhysical() {
    return (
        <>
            <ButtonGroup gap='40' size='lg' fontFamily="Lobster">
                <Link to="/about"><Hbutton text="About us" /></Link>
                <Link to="/videos"><Hbutton text="Videos" /></Link>
                <Link to="/members"><Hbutton text="Members" /></Link>
            </ButtonGroup>
        </>
    )
}

function CenterTitle() {
    return (
        <>
             <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                bg="rgba(0, 0, 0, 0.6)"
                color="white"
                borderRadius="30px"
                p={4}
                fontSize={70}
                fontWeight={700}
                textAlign="center"
                fontFamily="Lobster"
            >
                Noteworthy<br /> A Capela
            </Box>
        </>
    )
}

export default Homepage;