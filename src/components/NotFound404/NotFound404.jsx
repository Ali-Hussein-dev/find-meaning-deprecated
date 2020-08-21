import React from "react";
import { Flex, Heading, Image } from "@adobe/react-spectrum";
import notFound404 from "./notFound404.svg";

const NotFound404 = () => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={25}
    >
      <Image alt="not found 404" src={notFound404} width="100%" height="40vh" />
      <Heading level={3}>404 page not found!</Heading>
    </Flex>
  );
};

export default NotFound404;
