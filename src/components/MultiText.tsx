import React from "react";
import { Text } from "@chakra-ui/react";
import useTypingAnimation from "../hooks/useTypingAnimation";

const MultiText = () => {
  const targetRef = useTypingAnimation(
    ".mutiple-text",
    ["Welcome To My", "Game &amp; Quiz", "Web-Application"],
    {
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 2000,
      loop: true,
    }
  );

  return (
    <Text as="h3" fontSize={30} color={"yellow.500"} fontWeight={"bold"}>
      <span ref={targetRef} className="mutiple-text"></span>
    </Text>
  );
};

export default MultiText;
