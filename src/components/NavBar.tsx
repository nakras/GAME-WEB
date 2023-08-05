import { HStack, Image, keyframes, Box } from "@chakra-ui/react";
import logo from "../assets/portfolio-home.png";
import ColorModeSwitch from "./ColorModeSwitch";
import MultiText from "./MultiText";
import "../NavBar.css";

const NavBar = () => {
  return (
    <HStack
      justifyContent={"space-between"}
      padding={"15px"}
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      backgroundColor={"#111"}
    >
      <Image
        src={logo}
        boxSize="50px"
        boxShadow={"5px 5px 5px #D69E2E"}
        borderRadius={"10"}
        className="float-animation"
      ></Image>
      <MultiText />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
