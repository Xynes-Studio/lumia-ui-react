import { css } from '@emotion/react';
import { color, spacing, typography } from './styles';

export const fontUrl = 'https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap';

export const bodyStyles = css`
  font-family: ${typography.type.primary};
  font-size: ${typography.size.s3};
  color: ${color.foreground};

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-overflow-scrolling: touch;

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: ${typography.weight.regular};
    margin: ${spacing.padding.p0};
    padding: 0;
  }
  p{
    margin: ${spacing.padding.p0};
  }

  button,
  input,
  textarea,
  select {
    all: unset;
    display: flex;
    font-family: ${typography.type.primary};
    margin: ${spacing.padding.p0};
  }

  sub,
  sup {
    font-size: 0.8em;
  }

  sub {
    bottom: -0.2em;
  }

  sup {
    top: -0.2em;
  }

  b,
  em {
    font-weight: ${typography.weight.bold};
  }

  hr {
    border: none;
    border-top: 1px solid ${color.border};
    clear: both;
    margin-bottom: 1.25rem;
  }

  code,
  pre {
    font-family: ${typography.type.code};
    font-size: ${typography.size.s2};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    display: inline-block;
    padding-left: 2px;
    padding-right: 2px;
    vertical-align: baseline;
    /* color: ${color.secondary}; */
  }

  pre {
    line-height: 18px;
    padding: 11px 1rem;
    white-space: pre-wrap;

    background: rgba(0, 0, 0, 0.05);
    color: ${color.foreground};
    border-radius: 3px;
    margin: 1rem 0;
  }

  &.ReactModal__Body--open {
    overflow: hidden;
    &.hide-intercom #intercom-container {
      display: none;
    }
  }

  .ReactModalPortal > div {
    opacity: 0;
  }

  .ReactModalPortal .ReactModal__Overlay {
    transition: all 200ms ease-in;

    &--after-open {
      opacity: 1;
    }
    &--before-close {
      opacity: 0;
    }
  }
`;
export const GlobalStyle = css`
  body {
    ${bodyStyles}
  }
`;
