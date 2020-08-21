import React from "react";
import "./topResults.scss";
import { View, Flex, Image, Text } from "@adobe/react-spectrum";
import { get } from "lodash";
import Pronunciation from "./Pronunciation";


const TopResults = ({ owlbot, linguaRobot }) => {

  let imgSrc = "";
  let query = "";
  // let pronunciation = get(owlbot, "data.pronunciation");
  query = get(owlbot, "data.word");
  //---------extracting image url
  let imgs = get(owlbot, "data.definitions");
  imgs = imgs ? imgs.filter((img) => img.image_url != null) : (imgs = [{}]);
  imgSrc = get(imgs[0], "image_url") || "";

  return (
    <View padding="size-50">
      <Flex alignItems="center" justifyContent="space-between">
        <Flex alignItems="center" gap={10}>
          <Text><b>{query}</b></Text>
          <Pronunciation linguaRobot={linguaRobot} />
        </Flex>
        {imgSrc.length > 0 ? (
          <Image
            src={imgSrc}
            alt=""
            width="size-1000"
            height="size-1000"
            marginStart="size-10"
          />
        ) : undefined}
      </Flex>
    </View>
  );
};

export default TopResults;

/*
bugs: 
1- crush when searching for "ice-cream" 
*/
