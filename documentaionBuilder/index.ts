import * as fs from "fs";
import * as path from "path";
import * as glob from "glob";

interface Meta {
  title: string;
  parameters: {
    docs: {
      description: string;
      md: string;
    };
  };
}

interface ComponentData {
  title: string;
  description: string;
  md: string;
}

// Function to read file content and extract the meta object
const extractMetaJson = (filePath: string): Meta | null => {
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const metaRegex = /export const meta = (\{)/;
  const match = metaRegex.exec(fileContent);
  console.log(match, "this?");
  

  if (match) {
    const startIndex = match.index + match[0].length - 1;
    let braceCount = 1;
    let endIndex = startIndex + 1;

    while (braceCount > 0 && endIndex < fileContent.length) {
      if (fileContent[endIndex] === "{") {
        braceCount++;
      } else if (fileContent[endIndex] === "}") {
        braceCount--;
      }
      endIndex++;
    }

    let metaContent = fileContent.slice(startIndex, endIndex);

    // Ensure the ending format is correct
    metaContent = metaContent.replace(/\\n',\s*},\s*},\s*};/g, "\\n```\"\n    }\n  }\n}");

    // Clean up other potential issues
    metaContent = metaContent.replace(/,\s*}\s*},/g, "\n    }\n  }\n}");

    // Attempt to parse the extracted content as JSON
    try {
      const metaJson = JSON.parse(
        metaContent
          .replace(/(\w+):/g, '"$1":') // Quote object keys
          .replace(/'/g, '"') // Replace single quotes with double quotes
          .replace(/\\\\"/g, '\\"') // Fix escaped quotes
          .replace(/\\n\\`{3}/g, '\\n```') // Correct code block endings
      );
      return metaJson;
    } catch (e) {
      console.error("Failed to parse JSON:", e);
      console.error("Meta content:", metaContent);
      return null;
    }
  } else {
    console.log("No match found");
    return null;
  }
};

// Function to update the README.md file
const updateReadme = (data: Record<string, ComponentData[]>) => {
  const readmePath = path.join(process.cwd(), "readme.md");
  let content = "";

  for (const category in data) {
    content += `## ${category}\n\n`;

    data[category].sort((a, b) => a.title.localeCompare(b.title));

    for (const component of data[category]) {
      content += `### ${component.title}\n\n`;
      content += `${component.description}\n\n`;
      content += `${component.md}\n\n`;
    }
  }

  fs.writeFileSync(readmePath, content, "utf-8");
};

// Main function
const main = () => {
  const pattern = "../**/*.docu.*";
  const files = glob.sync(pattern);
  const data: Record<string, ComponentData[]> = {};

  files.forEach((file) => {
    const metaData = extractMetaJson(file);

    if (metaData != null) {
      const [category, component] = metaData.title.split("/");
      if (!data[category]) {
        data[category] = [];
      }

      data[category].push({
        title: component,
        description: metaData.parameters.docs.description,
        md: metaData.parameters.docs.md,
      });
    }
  });

  updateReadme(data);
};

// Execute the main function
main();
