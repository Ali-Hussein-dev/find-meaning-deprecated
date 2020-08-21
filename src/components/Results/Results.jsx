import React from "react";
import { get } from "lodash";
import { Flex, Text, View } from "@adobe/react-spectrum";
import { Divider } from "antd";
// has no style effect
import "./results.scss";
/* Todo
 * relplace current RegExp with / non-letters char, "" /
 */
// -----------------------------------------------
const Definition = ({ def, type }) => {
  return (
    <View>
      {def.length > 0 ? (
        <View>
          <Divider orientation="center" style={{ color: "var(--secondary)" }}>
            {type}
          </Divider>
          {def.map((o, i) => (
            <Text key={i}>
              -{" "}
              {(o.definition || "").replace(/<[^>]*>/gm, "").replace(/â/gm, "")}
              <br />
              <b>
                {(o.example || "").replace(/<[^>]*>/gm, "").replace(/â/gm, "")}
              </b>
              {/* <br /> */}
            </Text>
          ))}
        </View>
      ) : (
        ""
      )}
    </View>
  );
};
// -----------------------------------------------
const Results = ({ definitions }) => {
  let owlbotDefinitions = get(definitions, "data.definitions") || [];
  const filtering = (array, type) => {
    return array.filter((def) => def.type === type);
  };

  return (
    <Flex direction="column">
      <Flex direction="column">
        <View></View>
        <Definition def={filtering(owlbotDefinitions, "noun")} type={"Noun"} />
        <Definition
          def={filtering(owlbotDefinitions, "adjective")}
          type={"Adjective"}
        />
        <Definition def={filtering(owlbotDefinitions, "verb")} type={"Verb"} />
        <Definition
          def={filtering(owlbotDefinitions, "adverb")}
          type={"Adverb"}
        />
        <Definition
          def={filtering(owlbotDefinitions, "preposition")}
          type={"Preposition"}
        />
        <Definition
          def={filtering(owlbotDefinitions, "determiner")}
          type={"Determiner"}
        />
        <Definition
          def={filtering(owlbotDefinitions, "determinerPronoun")}
          type={"Determiner and Pronoun"}
        />
        <Definition
          def={filtering(owlbotDefinitions, "pronoun")}
          type={"Pronoun"}
        />
        <Definition
          def={filtering(owlbotDefinitions, "exclamation")}
          type={"Exclamation"}
        />
      </Flex>
    </Flex>
  );
};

export default Results;
