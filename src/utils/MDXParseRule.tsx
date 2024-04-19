/* eslint-disable react-refresh/only-export-components */
const H6=/#{6}\s?([^\n]+)/g;
const LumiaH6="<h6>$1</h6>";

const H5=/#{5}\s?([^\n]+)/g;
const LumiaH5="<h5>$1</h5>";

const H4=/#{4}\s?([^\n]+)/g;
const LumiaH4="<h4>$1</h4>";

const H3=/#{3}\s?([^\n]+)/g;
const LumiaH3="<h3>$1</h3>";

const H2=/#{2}\s?([^\n]+)/g;
const LumiaH2="<h2>$1</h2>";

const H1=/#{1}\s?([^\n]+)/g;
const LumiaH1="<h1>$1</h1>";

const Italic1=/\*\s?([^\n]+)\*/g;
const Italic2=/_([^_`]+)_/g;
const LumiaItalic="<i>$1</i>";

const Bold1=/\*\*\s?([^\n]+)\*\*/g;
const Bold2=/__([^_]+)__/g;
const LumiaBold="<b>$1</b>";


const Link=/\[([^\]]+)\]\(([^)]+)\)/g;
const LumiaLink='<a href="$2">$1</a>';

const Highlights=/(`)(\s?[^\n,]+\s?)(`)/g;
const LumiaHighlights='<a">$2</a>';




export const rules = [
    //header rules
    [H1, LumiaH1],
    [H2, LumiaH2],
    [H3, LumiaH3],
    [H4, LumiaH4],
    [H5, LumiaH5],
    [H6, LumiaH6],
    
    //bold, italics and paragragh rules
    [Bold1, LumiaBold],
    [Italic1, LumiaItalic],
    [Bold2, LumiaBold],
    [Italic2, LumiaItalic],
    // [/([^\n]+\n?)/g, "<p>$1</p>"],
    
    //links
    [
      Link,
      LumiaLink,
    ],
    
    //highlights
    [
      Highlights,
      LumiaHighlights,
    ],
   
    //Lists
    [/([^\n]+)(\+)([^\n]+)/g, "<ul><li>$3</li></ul>"],
    [/([^\n]+)(\*)([^\n]+)/g, "<ul><li>$3</li></ul>"],
  
    //Image
    [
      /!\[([^\]]+)\]\(([^)]+)\s"([^")]+)"\)/g,
      '<img src="$2" alt="$1" title="$3" />',
    ],
  ];