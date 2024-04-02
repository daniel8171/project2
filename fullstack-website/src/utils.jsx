import { ChakraProvider, Box, Button, ButtonGroup, Image, Spacer, Flex, Center, VStack } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const sideButtonToPageReferences = {
    "home": "/",
    "about us": "/about",
    "members": "/members",
    "videos": "/videos"
  };

const Sidebarbutton = (props) => {
    return <Button className="headerButton" 
                    variant="ghost"
                    width="100%"
                    fontSize={25}
                    justifyContent="flex-end"
                    color={props.color}
                    _hover={{bg: "rgba(255, 255, 255, 0.0)"}}
                    fontFamily='Amaranth'>{props.text}
                    </Button>;
  };

const Sidebarbuttons = (props) => {
    return <Box width="10%" p={0} m={0}>
                <Link to={sideButtonToPageReferences[props.text1.toLowerCase()]}>
                  <Sidebarbutton text={props.text1} color={props.color} />
                </Link>
                <Link to={sideButtonToPageReferences[props.text2.toLowerCase()]}>
                  <Sidebarbutton text={props.text2} color={props.color} />
                </Link>
                <Link to={sideButtonToPageReferences[props.text3.toLowerCase()]}>
                  <Sidebarbutton text={props.text3} color={props.color} />
                </Link>
            </Box>
};
export default Sidebarbuttons