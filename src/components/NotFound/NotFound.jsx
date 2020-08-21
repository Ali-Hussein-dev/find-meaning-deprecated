import React from "react";
import { Flex, Heading, Image } from "@adobe/react-spectrum";
import notFound from "./notFound.svg";

const NotFound = () => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={25}
    //   flexGrow="1"
    >
      <Image alt="not found" src={notFound} width="100%" height="80vh" />
      <Heading level={3}>No meaning found!</Heading>
    </Flex>
  );
};

export default NotFound;
