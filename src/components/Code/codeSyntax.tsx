import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/css';
import rust from 'highlight.js/lib/languages/rust';
import sql from 'highlight.js/lib/languages/sql';
import php from 'highlight.js/lib/languages/php';
import python from 'highlight.js/lib/languages/python';

export function formatCode(input: string, babel: boolean): JSX.Element {
  if (babel) {
    input = atob(input);
  }
  const highlightedCode = hljs.highlightAuto(
    input,
  ).value;

  return (
    <div className="Container" dangerouslySetInnerHTML={{ __html: highlightedCode }}></div>
  );
}

export function formatCodeJS(input: string, babel: boolean): JSX.Element {
  hljs.registerLanguage('jsx', javascript);
  // Define regular expressions for each token type
  if (babel) {
    input = atob(input);
  }
  const highlightedCode = hljs.highlight(
    input,
    { language: 'jsx' }
  ).value;

  return (
    <div className="Container" dangerouslySetInnerHTML={{ __html: highlightedCode }}></div>
  );
}

export const formatHTML = (input: string, babel: boolean): JSX.Element => {
  if (babel) {
    input = atob(input);
  }
  const highlightedCode = hljs.highlight(
    input,
    { language: 'html' }
  ).value;

  return (
    <div className="Container" dangerouslySetInnerHTML={{ __html: highlightedCode }}></div>
  );
};

export const formatCSS = (input: string, babel: boolean): JSX.Element => {
  hljs.registerLanguage('css', css);
  // Define regular expressions for each token type
  if (babel) {
    input = atob(input);
  }
  const highlightedCode = hljs.highlight(
    input,
    { language: 'css' }
  ).value;

  return (
    <div className="Container" dangerouslySetInnerHTML={{ __html: highlightedCode }}></div>
  );
};

export const formatRust = (input: string, babel: boolean): JSX.Element => {
  hljs.registerLanguage('rust', rust);
  // Define regular expressions for each token type
  if (babel) {
    input = atob(input);
  }
  const highlightedCode = hljs.highlight(
    input,
    { language: 'rust' }
  ).value;

  return (
    <div className="Container" dangerouslySetInnerHTML={{ __html: highlightedCode }}></div>
  );
};

export const formatSQL = (input: string, babel: boolean): JSX.Element => {
  hljs.registerLanguage('sql', sql);
  // Define regular expressions for each token type
  if (babel) {
    input = atob(input);
  }

  const highlightedCode = hljs.highlight(
    input,
    { language: 'sql' }
  ).value;

  return (
    <div className="Container" dangerouslySetInnerHTML={{ __html: highlightedCode }}></div>
  );
};

export const formatPHP = (input: string, babel: boolean): JSX.Element => {
  hljs.registerLanguage('php', php);
  // Define regular expressions for each token type
  if (babel) {
    input = atob(input);
  }
  const highlightedCode = hljs.highlight(
    input,
    { language: 'php' }
  ).value;

  return (
    <div className="Container" dangerouslySetInnerHTML={{ __html: highlightedCode }}></div>
  );
};

export const formatPython = (input: string, babel: boolean): JSX.Element => {
  hljs.registerLanguage('python', python);
  // Define regular expressions for each token type
  if (babel) {
    input = atob(input);
  }
  const highlightedCode = hljs.highlight(
    input,
    { language: 'python' }
  ).value;

  return (
    <div className="Container" dangerouslySetInnerHTML={{ __html: highlightedCode }}></div>
  );
};


