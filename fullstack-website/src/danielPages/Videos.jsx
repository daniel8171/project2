import { Routes, Route, Link } from 'react-router-dom';
import { ChakraProvider, Box, Button, ButtonGroup, Image, Spacer, Text, Flex, Center, AbsoluteCenter } from "@chakra-ui/react";
import { SimpleGrid } from '@chakra-ui/react';
import Sidebarbuttons from "../utils";
import React from "react";
import { Carousel } from 'react-responsive-3d-carousel';
import logo from "../assets/Images/logo.jpeg";

const props = {
    color: "rgb(21, 29, 40)",
    aboutTextSize: 20,
    aboutTextWeight:500,
    aboutTextColor:"white"
}

function Videos() {
    return (
        <>
        <Box bgGradient={`linear(to bottom, ${props.color}, rgb(210, 166, 53))`} h='100vh'>
        <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            w='100%'
        >
            <HeaderWithSideButtons />
        </Box>
        <YouTubeVids />
        <BottomText />
        </Box>

      </>
    )
}

function HeaderWithSideButtons() {
    return (
        <>
        <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            w='100%'
            m={0}
            p={0}
            fontFamily="Lobster"
        >
            <Box width="4.5%" />
            <Image borderRadius='full' boxSize='80px' src={logo}/>
            <Spacer />
            <p style={{ color:'white', fontSize:60, fontWeight:700, textAlign:'center' }}>Our Favorite Videos</p>
            <Spacer />
            <Sidebarbuttons text1="Home" text2="About us" text3="Members" color="white" />
        </Box>
        </>
    )
}

function BottomText() {
    return (
        <>
        <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            w='100%'
            m={0}
            p={0}
            fontFamily="Lobster"
        >
            <p style={{ color:'white', fontSize:60, fontWeight:700, textAlign:'center' }}><a href='https://youtube.com/@UCBNoteworthy?si=7lOE98HlTURJYFt_'>Find us on YouTube!</a></p>
        </Box>
        </>
    )
}

function YouTubeVids() {
    return (
      <Carousel width='560px'
      height='315px'
      spread='wide' 
      depth={2} 
      autoPlay={false} 
      selectable={true}
      showStatus={false}
      showArrows={true}
      showIndicators={false}>
		<iframe src="https://www.youtube.com/embed/7RPiGAzk4wA?si=64L3p0AgJPhkbky6" allowfullscreen></iframe>
        <iframe src="https://www.youtube.com/embed/udeym8-yr7g?si=GlXwinfmQVGuQ5gX" allowfullscreen></iframe>
        <iframe src="https://www.youtube.com/embed/p_1oUZj3pCo?si=QL6jB2W_PpkbroKi" allowfullscreen></iframe>
        <iframe src="https://www.youtube.com/embed/cOVW4ueBfNY?si=cmP7o4TrJUSK40Ih" allowfullscreen></iframe>
        <iframe src="https://www.youtube.com/embed/d2mEAtmu1h4?si=tfXVIeK9Si-F9cxj" allowfullscreen></iframe>
      </Carousel>
    )
  }

export default Videos