import React from "react";
import {
  Text,
  Flex,
  Heading,
  Image,
} from "@adobe/react-spectrum";
import welcome from "./homeIllustration.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch} from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      justifySelf="stretch"
      alignItems="center"
      alignSelf="stretch"
      gap={25}
    >
      <Image alt="" src={welcome} width="60vw" height="60vh" />
      <Link to="/searching">
          <FontAwesomeIcon
            icon={faSearch}
            color="var(--brand-dark)"
            size="3x"
          />
      </Link>
          <Text>Find Meaning</Text>
      <Heading level={1}>English-English Dictionary</Heading>
    </Flex>
  );
};

export default Home;
