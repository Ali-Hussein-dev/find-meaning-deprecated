import { View, Text } from "@adobe/react-spectrum";
import React, { useContext } from "react";
import SearchContext from "../../SearchContext";
import NotFound from "../NotFound/NotFound";
import Results from "../Results/Results";
import TopResults from "../TopResults/TopResults";

const AllResults = () => {
  const searchConsumer = useContext(SearchContext);
  const { owlbot, linguaRobot } = searchConsumer.context || {};
  console.log(searchConsumer.context);
  switch (searchConsumer.value) {
    case "idle":
      return (
        <View backgroundColor="gray-100" padding="1rem">
          <Text>Waiting for your queries...</Text>
        </View>
      );
    case "resolved":
      return (
        <View backgroundColor="gray-100" padding="1rem">
          <TopResults owlbot={owlbot} linguaRobot={linguaRobot} />
          <Results definitions={owlbot} />
        </View>
      );
    case "typing" && owlbot:
      return (
        <View backgroundColor="gray-100" padding="1rem">
          <TopResults owlbot={owlbot} linguaRobot={linguaRobot} />
          <Results definitions={owlbot} />
        </View>
      );
    case "rejected":
      return <NotFound />;
    default:
      return null;
  }
};

export default AllResults;
