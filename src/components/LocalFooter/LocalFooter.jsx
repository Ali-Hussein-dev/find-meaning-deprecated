import { Flex, Footer, View } from "@adobe/react-spectrum";
import React from "react";
const LocalFooter = () => {
  const date = new Date();

  return (
    <Footer width="100%" bottom="0" alignSelf="flex-end">
      <View backgroundColor="gray-50" width="100%" padding="0.5rem">
        <Flex direction="column" justifyContent="center" alignItems="center">
          Copyright&copy; {date.getFullYear()}
          <View>
            Made with
            <span role="img" aria-label="">
              💓
            </span>
            by
            <a
              href="https://twitter.com/AliHussein_20"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ali Hussein
            </a>
          </View>
        </Flex>
      </View>
    </Footer>
  );
};

export default LocalFooter;
