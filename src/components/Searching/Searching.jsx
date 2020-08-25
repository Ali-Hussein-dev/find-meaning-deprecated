import React, { useState } from "react";
import { Flex } from "@adobe/react-spectrum";
import SearchBar from "../SearchBar/SearchBar";
import AllResults from "../AllResults/AllResults";

import { SearchProvider } from "../../SearchContext";
//--------------------------
const Searching = () => {
  const [state, setState] = useState([]);
  const getData = (state) => setState(state);
  //-----------------------
  return (
    <Flex direction="column">
      <Flex justifySelf="center">
        <SearchBar liftupState={getData} />
      </Flex>
      <Flex direction="column">
        <SearchProvider value={state}>
          <AllResults />
        </SearchProvider>
      </Flex>
    </Flex>
  );
};

export default Searching;
