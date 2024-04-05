export function formatCodeJs(input: string): JSX.Element {
  // Define regular expressions for each token type
  const keywordRegex = /\b(const|let|var|if|else|for|while|function)\b/g;
  const stringRegex = /(["'])(?:(?=(\\?))\2.)*?\1/g;
  const numberRegex = /\b\d+\b/g;
  const commentRegex = /\/\/.*|\/\*[^]*?\*\//g;
  const functionRegex = /\b\w+\s*\(/g;
  const operatorRegex = /[+\-*/=<>]/g;
  const punctuationRegex = /[.,;:(){}[\]]/g;

  // Split the input string into tokens
  const tokens = input.split(/(\s+)/).map((token, index) => {
    if (keywordRegex.test(token)) {
      return (
        <span key={index} className="keyword">
          {token}
        </span>
      );
    } else if (stringRegex.test(token)) {
      return (
        <span key={index} className="string">
          {token}
        </span>
      );
    } else if (numberRegex.test(token)) {
      return (
        <span key={index} className="number">
          {token}
        </span>
      );
    } else if (commentRegex.test(token)) {
      return (
        <span key={index} className="comment">
          {token}
        </span>
      );
    } else if (functionRegex.test(token)) {
      return (
        <span key={index} className="function">
          {token}
        </span>
      );
    } else if (operatorRegex.test(token)) {
      return (
        <span key={index} className="operator">
          {token}
        </span>
      );
    } else if (punctuationRegex.test(token)) {
      return (
        <span key={index} className="punctuation">
          {token}
        </span>
      );
    }
    return token;
  });

  // Wrap tokens in <p> tags
  return <p>{tokens}</p>;
}

export const formatHTML = (input: string): JSX.Element => {
  // Define regular expressions for each HTML tag and attribute
  const tagRegex = /<\s*(\/)?\s*([a-zA-Z0-9-]+)\s*([^>]*)\s*>/g;
  const attributeRegex = /\b([a-zA-Z-]+)\s*=\s*(['"][^'"]*['"])/g;

  // Split the input string into tags and text nodes
  const nodes = [];
  let lastIndex = 0;
  let match;
  while ((match = tagRegex.exec(input)) !== null) {
    const index = match.index;
    if (index > lastIndex) {
      nodes.push(input.substring(lastIndex, index));
    }
    const [, isClosing, tagName, attributes] = match;
    const trimmedTagName = tagName.trim();
    const trimmedAttributes = attributes.trim();
    const formattedAttributes = trimmedAttributes
      .replace(attributeRegex, (_match, attributeName, attributeValue) => {
        return `${attributeName}=${attributeValue}`;
      })
      .trim(); // Trim trailing spaces
    nodes.push(
      <span key={index} className={`tag${isClosing ? " closing" : ""}`}>
        &lt;{isClosing ? "/" : ""}
        <span className="tagName">{trimmedTagName}</span> {formattedAttributes}
        &gt;
      </span>
    );
    lastIndex = index + match[0].length;
  }
  if (lastIndex < input.length) {
    nodes.push(input.substring(lastIndex));
  }

  return <>{nodes}</>;
};

export const formatCSS = (input: string): JSX.Element => {
  // Define regular expressions for CSS selectors, properties, and values
  const selectorRegex = /([.#]?[a-zA-Z][a-zA-Z0-9_-]*)\s*{/g;
  const propertyRegex = /([a-zA-Z-]+)\s*:\s*([^;]+);/g;
  const valueRegex = /:\s*([^;]+);/g;
  const closingBracketRegex = /}/g;

  // Split the input string into lines
  const lines = input.split("\n").map((line, index) => {
    // Match selectors, properties, and values in the line
    const selectors = line.match(selectorRegex);
    const properties = line.match(propertyRegex);
    const values = line.match(valueRegex);
    const closingBrackets = line.match(closingBracketRegex);

    // Format selectors, properties, and values
    const formattedSelectors = selectors
      ? selectors.map((selector, selectorIndex) => (
          <span key={`selector-${index}-${selectorIndex}`} className="selector">
            {selector}
          </span>
        ))
      : [];
    const formattedProperties = properties
      ? properties.map((property, propertyIndex) => (
          <span key={`property-${index}-${propertyIndex}`} className="property">
            {property?.split(":")[0]}:
          </span>
        ))
      : [];
    const formattedValues = values
      ? values.map((value, valueIndex) => (
          <span key={`value-${index}-${valueIndex}`} className="value">
            {value?.split(":")[1]}
          </span>
        ))
      : [];

    const formattedClosingBrackets = closingBrackets
      ? closingBrackets.map((closingBracket, bracketIndex) => (
          <span
            key={`closing-bracket-${index}-${bracketIndex}`}
            className="selector"
          >
            {closingBracket}
          </span>
        ))
      : [];

    // Combine all formatted elements into a single line
    const formattedLine = [
      ...formattedSelectors,
      ...formattedProperties,
      ...formattedValues,
      ...formattedClosingBrackets,
    ];

    // Return the formatted line with a unique key
    return (
      <p key={`line-${index}`} className="line">
        {formattedLine}
      </p>
    );
  });

  // Wrap lines in a container and add closing bracket
  return <div>{lines}</div>;
};

export const formatRust = (input: string): JSX.Element => {
  // Define regular expressions for Rust tokens
  const keywordRegex = /\b(let|fn|mut|match|if|else|while|for|loop|return)\b/g;
  const identifierRegex = /\b([a-zA-Z_]\w*)\b/g;
  const numberRegex = /\b(\d+)\b/g;
  const stringRegex = /"([^"]*)"/g;
  const commentRegex = /\/\/.*|\/\*[\s\S]*?\*\//g;
  const operatorRegex = /(\+|-|\*|\/|%|==|!=|<|>|<=|>=|\|\||&&|!|&|\||\^)/g;
  const punctuationRegex = /([;,()[\]{}])/g;

  // Split the input string into lines
  const lines = input.split("\n").map((line, index) => {
    // Format each token in the line
    const tokens = line
      .split(
        /\b(?:(let|fn|mut|match|if|else|while|for|loop|return)\b|\b([a-zA-Z_]\w*)\b|\b(\d+)\b|("([^"]*)")|\/\/.*|\/\*[\s\S]*?\*\/|(\+|-|\*|\/|%|==|!=|<|>|<=|>=|\|\||&&|!|&|\||\^)|([;,()[\]{}]))/g
      )
      .filter(Boolean);

    // Map each token to JSX element
    const formattedLine = tokens.map((token, tokenIndex) => {
      if (keywordRegex.test(token)) {
        return (
          <span key={tokenIndex} className="keyword">
            {token}
          </span>
        );
      } else if (identifierRegex.test(token)) {
        return (
          <span key={tokenIndex} className="identifier">
            {token}
          </span>
        );
      } else if (numberRegex.test(token)) {
        return (
          <span key={tokenIndex} className="number">
            {token}
          </span>
        );
      } else if (stringRegex.test(token)) {
        return (
          <span key={tokenIndex} className="string">
            {token}
          </span>
        );
      } else if (commentRegex.test(token)) {
        return (
          <span key={tokenIndex} className="comment">
            {token}
          </span>
        );
      } else if (operatorRegex.test(token)) {
        return (
          <span key={tokenIndex} className="operator">
            {token}
          </span>
        );
      } else if (punctuationRegex.test(token)) {
        return (
          <span key={tokenIndex} className="punctuation">
            {token}
          </span>
        );
      } else {
        return token;
      }
    });

    // Wrap the line in a <p> tag
    return <p key={index}>{formattedLine}</p>;
  });

  // Return the formatted lines
  return <>{lines}</>;
};

export const formatSQL = (input: string): JSX.Element => {
  // Define regular expressions for SQL tokens
  const keywordRegex =
    /\b(SELECT|FROM|WHERE|INSERT INTO|VALUES|UPDATE|SET|DELETE FROM|CREATE TABLE|ALTER TABLE|DROP TABLE)\b/g;
  const identifierRegex = /`([^`]+)`/g; // Matches backtick-enclosed identifiers
  const stringRegex = /'([^']+)'|("[^"]+")/g; // Matches single-quoted and double-quoted strings
  const commentRegex = /--.*|\/\*[\s\S]*?\*\//g;

  // Split the input string into lines
  const lines = input.split("\n").map((line, index) => {
    // Format each token in the line
    const tokens = line
      .split(
        /\b(SELECT|FROM|WHERE|INSERT INTO|VALUES|UPDATE|SET|DELETE FROM|CREATE TABLE|ALTER TABLE|DROP TABLE)\b|`([^`]+)`|('([^']+)'|("[^"]+"))|--.*|\/\*[\s\S]*?\*\//g
      )
      .filter(Boolean);

    // Map each token to JSX element
    const formattedLine = tokens.map((token, tokenIndex) => {
      if (keywordRegex.test(token)) {
        return (
          <span key={tokenIndex} className="keyword">
            {token}
          </span>
        );
      } else if (identifierRegex.test(token)) {
        return (
          <span key={tokenIndex} className="identifier">
            {token}
          </span>
        );
      } else if (stringRegex.test(token)) {
        return (
          <span key={tokenIndex} className="string">
            {token}
          </span>
        );
      } else if (commentRegex.test(token)) {
        return (
          <span key={tokenIndex} className="comment">
            {token}
          </span>
        );
      } else {
        return token;
      }
    });

    // Wrap the line in a <p> tag
    return <p key={index}>{formattedLine}</p>;
  });

  // Return the formatted lines
  return <>{lines}</>;
};

export const formatPHP = (input: string): JSX.Element => {
  // Define regular expressions for PHP tokens
  const keywordRegex =
    /\b(class|function|echo|return|if|else|elseif|while|foreach|for|switch|case|break|continue|include|require|require_once|include_once)\b/g;
  const variableRegex = /\$([a-zA-Z_]\w*)/g;
  const stringRegex = /'([^']+)'|("([^"]+)")/g;
  const commentRegex = /\/\/.*|\/\*[\s\S]*?\*\//g;

  // Split the input string into lines
  const lines = input.split("\n").map((line, index) => {
    // Format each token in the line
    const tokens = line
      .split(
        /\b(class|function|echo|return|if|else|elseif|while|foreach|for|switch|case|break|continue|include|require|require_once|include_once)\b|\$([a-zA-Z_]\w*)|('([^']+)'|("([^"]+)"))|\/\/.*|\/\*[\s\S]*?\*\//g
      )
      .filter(Boolean);

    // Map each token to JSX element
    const formattedLine = tokens.map((token, tokenIndex) => {
      if (keywordRegex.test(token)) {
        return (
          <span key={tokenIndex} className="keyword">
            {token}
          </span>
        );
      } else if (variableRegex.test(token)) {
        return (
          <span key={tokenIndex} className="variable">
            {token}
          </span>
        );
      } else if (stringRegex.test(token)) {
        return (
          <span key={tokenIndex} className="string">
            {token}
          </span>
        );
      } else if (commentRegex.test(token)) {
        return (
          <span key={tokenIndex} className="comment">
            {token}
          </span>
        );
      } else {
        return token;
      }
    });

    // Wrap the line in a <p> tag
    return <p key={index}>{formattedLine}</p>;
  });

  // Return the formatted lines
  return <>{lines}</>;
};

export const formatPython = (input: string): JSX.Element => {
  // Define regular expressions for Python tokens
  const keywordRegex =
    /\b(if|elif|else|while|for|in|def|class|return|True|False|None)\b/g;
  const identifierRegex = /\b([a-zA-Z_]\w*)\b/g;
  const numberRegex = /\b(\d+)\b/g;
  const stringRegex = /'([^']*)'|"([^"]*)"/g;
  const commentRegex = /#.*/g;
  const operatorRegex = /(\+|-|\*|\/|%|==|!=|<|>|<=|>=|\|\||&&|!|&|\||\^)/g;
  const punctuationRegex = /([;,()[\]{}])/g;

  // Split the input string into lines
  const lines = input.split("\n").map((line, index) => {
    // Format each token in the line
    const formattedLine = line
      .split(
        /(\b(if|elif|else|while|for|in|def|class|return|True|False|None)\b|\b([a-zA-Z_]\w*)\b|\b(\d+)\b|'([^']*)'|"([^"]*)"|#.*)|(\+|-|\*|\/|%|==|!=|<|>|<=|>=|\|\||&&|!|&|\||\^)|([;,()[\]{}])/g
      )
      .map((token, tokenIndex) => {
        if (keywordRegex.test(token)) {
          return <span key={tokenIndex} className="keyword">{token}</span>;
        } else if (identifierRegex.test(token)) {
          return <span key={tokenIndex} className="identifier">{token}</span>;
        } else if (numberRegex.test(token)) {
          return <span key={tokenIndex} className="number">{token}</span>;
        } else if (stringRegex.test(token)) {
          return <span key={tokenIndex} className="string">'{token}'</span>;
        } else if (commentRegex.test(token)) {
          return <span key={tokenIndex} className="comment">{token}</span>;
        } else if (operatorRegex.test(token)) {
          return <span key={tokenIndex} className="operator">{token}</span>;
        } else if (punctuationRegex.test(token)) {
          return <span key={tokenIndex} className="punctuation">{token}</span>;
        } else {
          return token;
        }
      });

    // Wrap the line in a <p> tag
    return <p key={index}>{formattedLine}</p>;
  });

  // Return the formatted lines
  return <>{lines}</>;
};


