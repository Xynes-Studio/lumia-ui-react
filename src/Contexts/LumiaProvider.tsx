import React from "react";
import { NotificationProvider } from "./notifications/NotificationProvider";
import { StandardModalProvider } from "./Modals/StandardModalProvider";
import { HorizontalModalProvider } from "./Modals/HorizontalModalProvider";
import { HorizontalModal, StandardModal } from "./Modals";
import { Theme } from "./Themes/themeProvider.types";
import { defaultTheme } from "./Themes/themeProvider.constant";
import { ThemeProvider } from "./Themes/themeProvider";

const LumiaProvider: React.FC<{ theme?: Theme; children: React.ReactNode }> = ({
  theme,
  children,
}) => {
  return (
    <ThemeProvider theme={theme || defaultTheme}>
        <NotificationProvider>
          <StandardModalProvider>
            <HorizontalModalProvider>
              {children}
              <StandardModal />
              <HorizontalModal />
            </HorizontalModalProvider>
          </StandardModalProvider>
        </NotificationProvider>
    </ThemeProvider>
  );
};

export default LumiaProvider;
