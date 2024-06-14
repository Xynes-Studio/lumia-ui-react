import React from "react";
import { NotificationProvider } from "./notifications/NotificationProvider";
import { StandardModalProvider } from "./Modals/StandardModalProvider";
import { HorizontalModalProvider } from "./Modals/HorizontalModalProvider";
import { HorizontalModal, StandardModal } from "./Modals";
import { Theme } from "./Themes/themeProvider.types";
import { defaultTheme } from "./Themes/themeProvider.constant";
import { ThemeProvider } from "./Themes/themeProvider";
import { TranslationProvider } from "./translation/TranslationProvider";

export const LumiaProvider: React.FC<{
  theme?: Theme;
  children: React.ReactNode;
  enableTranslation: boolean;
}> = ({ theme, children, enableTranslation = false }) => {
  return (
    <ThemeProvider theme={theme || defaultTheme}>
      <TranslationProvider enableTranslation={enableTranslation}>
        <NotificationProvider>
          <StandardModalProvider>
            <HorizontalModalProvider>
              {children}
              <StandardModal />
              <HorizontalModal />
            </HorizontalModalProvider>
          </StandardModalProvider>
        </NotificationProvider>
      </TranslationProvider>
    </ThemeProvider>
  );
};
