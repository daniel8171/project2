import { Routes, Route, Link } from 'react-router-dom';
import { ChakraProvider, Box, Button, ButtonGroup, Image, Spacer, Text, Flex, Center, AbsoluteCenter } from "@chakra-ui/react";
import { SimpleGrid } from '@chakra-ui/react'
import Sidebarbuttons from "../utils"
import React from "react";
import fly0 from '../assets/Images/flyers/flyer0.jpg'
import fly1 from '../assets/Images/flyers/flyer1.png'
import fly2 from '../assets/Images/flyers/flyer2.png'
import fly3 from '../assets/Images/flyers/flyer3.png'
import fly4 from '../assets/Images/flyers/flyer4.png'
import fly5 from '../assets/Images/flyers/flyer5.png'
import fly6 from '../assets/Images/flyers/flyer6.jpg'
import cityhall from '../assets/Images/cityhall.jpeg'
import { Carousel } from 'react-responsive-3d-carousel'
import feed0 from '../assets/Images/igfeed/feed0.jpeg'
import feed1 from '../assets/Images/igfeed/feed1.jpeg'
import feed2 from '../assets/Images/igfeed/feed2.jpeg'
import feed3 from '../assets/Images/igfeed/feed3.jpeg'




const imageProp = {
    w: '200px'
}

const props = {
    color: "rgba(50, 70, 141, 1)",
    aboutTextSize: 20,
    aboutTextWeight:500,
    aboutTextColor:"white"
}

function About() {
    return (
        <>
        <Box bgGradient={`linear(to bottom, ${props.color}, rgba(240, 200, 21, 0.5))`} h='100vh'>
        <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            w='100%'
        >
            <HeaderWithSideButtons />
        </Box>
        <AboutDesc />
        <BottomSection />
        </Box>

      </>
    )
}

function BottomSection() {
    return (
        <>
        <Flex direction="row" alignItems="flex-start">
            <Spacer />
            <MainBox title="Events" textComponent={<EventsText />} visualComponent={<Flyers />} />
            <Spacer />
            <MainBox title="Hire us" textComponent={<HireText />} visualComponent={<Image src={cityhall} />} />
            <Spacer />
            <MainBox title="Follow us" visualComponent={<InstagramFeed/>} />
            <Spacer />
        </Flex>
        </>
    )
}

function BoxTitle(props) {
    return (
        <>
        <Text fontSize={40}
        fontWeight={700}
        textAlign="center"
        m={0}
        fontFamily="Lobster"
        >
            {props.title}
        </Text>
        </>
    )
}

function InstagramFeed() {
    return (
        <>
        <SimpleGrid columns={2} spacing={3} marginTop={10}>
            <a href="https://www.instagram.com/cal_noteworthy/"><Image w='100%' h='150px' src={feed0} className="igImg" /></a>
            <a href="https://www.instagram.com/cal_noteworthy/"><Image w='100%' h='150px' src={feed1} className="igImg" /></a>
            <a href="https://www.instagram.com/cal_noteworthy/"><Image w='100%' h='150px' src={feed2} className="igImg" /></a>
            <a href="https://www.instagram.com/cal_noteworthy/"><Image w='100%' h='150px' src={feed3} className="igImg" /></a>
        </SimpleGrid>
        </>
    )
}

function EventsText() {
    return (
        <>
        <Text fontSize={15}
        fontWeight={500}
        textAlign="center"
        lineHeight='110%'
        fontFamily='Amaranth'
        color="rgb(240,255,255)">
            In addition to performing weekly concerts at Sather Gate, we also host big events throughout the year!
        </Text>
        </>
    )
}

function HireText() {
    return (
        <>
        <Text fontSize={15}
        fontWeight={500}
        textAlign="center"
        lineHeight='110%'
        marginBottom={8}
        fontFamily='Amaranth'
        color="rgb(240,255,255)">
            Please e-mail our business manager at noteworthy@ucchoral.berkeley.edu 
            and fill out this <a className="hireLink" href="https://forms.gle/8d4TJZrQ7eX4oSbz8">form</a>. 
            <br />
            <br />
            In your email, let us know: who you are,
            the details of the event (where and when it’ll be),
            what kind of songs you’d like us to perform and how long the performance should be.
            <br />
            <br />
            We’ll respond to you with a quote as soon as possible.
        </Text>
        </>
    )
}

function MainBox(props) {
    return (
        <>
        <Box w='30vw'
            maxH='60vh'
            minH='60vh'
                bg="rgba(0, 0, 0, 0.2)"
                color="white"
                borderRadius="10px"
                p={2}
            >
                <BoxTitle title={props.title} />
                <Center maxW='100%'>{props.textComponent}</Center>
                <Center boxSize='100%'>{props.visualComponent}</Center>
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
            <Box width="10%" />
            <Spacer />
            <p style={{ color:'white', fontSize:60, fontWeight:700, textAlign:'center' }}>About us</p>
            <Spacer />
            <Sidebarbuttons text1="Home" text2="Videos" text3="Members" color="white" />
        </Box>
        </>
    )
}

function AboutDesc() {
    return (
        <>
        <Flex justify="center">
            <Box w='77%' fontFamily='Amaranth'>
                <p style={{ color:props.aboutTextColor, fontSize:props.aboutTextSize, fontWeight:props.aboutTextWeight, margin:30, textAlign:'center' }}>
                    We’re a lower-voices a cappella group known for our fun performances and fresh takes on popular songs! 
                    It always feels sunny when we perform, and not just because of our golden vests!
                </p>
                <p style={{ color:props.aboutTextColor, fontSize:props.aboutTextSize, fontWeight:props.aboutTextWeight, margin:30, textAlign:'center' }}>
                    Since our founding in 2000, we’ve gone million-view-viral on YouTube multiple times, 
                    released an album entirely composed of original songs, 
                    and performed at the 2022 UC Berkeley commencement.
                </p>
            </Box>
        </Flex>
        </>
    )
}

function Flyers() {
    return (
      <Carousel width='200px'
      spread='wide' 
      depth={2} 
      autoPlay={false} 
      selectable={true}
      showStatus={false}
      showArrows={false}
      showIndicators={false}>
        <Image src={fly0} objectFit='fill'/>
        <Image src={fly1} objectFit='fill'/>
        <Image src={fly2} objectFit='fill'/>
        <Image src={fly3} objectFit='fill'/>
        <Image src={fly4} objectFit='fill'/>
        <Image src={fly5} objectFit='fill'/>
        <Image src={fly6} objectFit='fill'/>
      </Carousel>
    )
  }

export default About