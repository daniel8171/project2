import { ChakraProvider, Box, Button, ButtonGroup, Image, Spacer, Flex, Center } from "@chakra-ui/react";
import About from "./About.jsx";
import Members from "../danielPages/Members.jsx";
import Videos from "../danielPages/Videos.jsx";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React, { Compoment } from 'react';
import Homepage from "./Homepage.jsx";

function App() {
    // 2. Wrap ChakraProvider at the root of your app
    return (
      <ChakraProvider>
        <BrowserRouter>
            <HeaderButtonsSwitch />
        </BrowserRouter>
      </ChakraProvider>
    )
  }

function HeaderButtonsSwitch () {
    return (
        <>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/members" element={<Members />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
        </>
    )
}

export default App