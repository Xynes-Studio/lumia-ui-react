import React from "react";
import type { Preview } from "@storybook/react";
import { GlobalStyle } from "../src/shared/global";
import { Global } from '@emotion/react';

export function loadUserConfig() {
  try {
    // Check if the user's configuration file exists
    const userConfig = require(process.cwd() + '/lumia-ui-config.js');
    return userConfig;
  } catch (error) {
    // If the file doesn't exist or there's an error, return an empty object
    console.warn('No lumia-ui config');
    return false;
  }
}

const userConfig = loadUserConfig();
let GS = userConfig;

if(!userConfig){
  GS = GlobalStyle;
}

const preview: Preview = {
  decorators: [
    (Story) => (
      <>
        <Global styles={GS} />
        <Story />
      </>
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
