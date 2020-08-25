import { Flex, Footer, View } from "@adobe/react-spectrum";
import React from "react";
const LocalFooter = () => {
  const date = new Date();

  return (
    // -------grid area: footer
    // <Footer>
    <View gridArea="footer" backgroundColor="gray-200" padding="0.5rem">
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
      {/* </Footer> */}
    </View>
  );
};

export default LocalFooter;
