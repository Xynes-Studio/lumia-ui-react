import React from "react";
import { Global } from "@emotion/react";
import LumiaProvider from "../src/Contexts/LumiaProvider";
import { GlobalStyle } from "../src/shared/global";

export function loadUserConfig() {
  try {
    // Check if the user's configuration file exists
    const userConfig = require(process.cwd() + "/lumia-ui-config.js");
    return userConfig;
  } catch (error) {
    // If the file doesn't exist or there's an error, return an empty object
    console.warn("No lumia-ui config");
    return false;
  }
}

const userConfig = loadUserConfig();
const GS = userConfig || GlobalStyle;

const preview = {
  decorators: [
    (Story) => (
      <LumiaProvider>
        <Global styles={GS} />
        <Story />
      </LumiaProvider>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
