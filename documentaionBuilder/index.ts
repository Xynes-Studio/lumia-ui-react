import * as fs from "fs";
import * as path from "path";
import * as glob from "glob";

interface ComponentData {
  title: string;
  md: string;
}

// Function to read file content and extract the title
const extractTitle = (fileContent: string): string | null => {
  const titleRegex = /title:\s*"([^"]+)"/;
  const match = titleRegex.exec(fileContent);

  if (match) {
    return match[1]; // Return the captured title
  } else {
    console.log("Title not found.");
    return null;
  }
};

// Function to read file content and extract the docs import
const extractDocsImport = (fileContent: string): string | null => {
  const docsImportRegex = /import\s+document\s+from\s+['"]([^'"]+)['"]/;
  const docsImportMatch = docsImportRegex.exec(fileContent);

  if (docsImportMatch) {
    return docsImportMatch[1];
  } else {
    console.log("`docs` import not found.");
    return null;
  }
};

// Function to update the README.md file
const updateReadme = (data: Record<string, ComponentData[]>) => {
  const readmePath = path.join(process.cwd(), "README.md");
  let content = "";

  for (const category in data) {
    content += `## ${category}\n\n`;

    data[category].sort((a, b) => a.title.localeCompare(b.title));

    for (const component of data[category]) {
      content += `# ${component.title}\n\n`;
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
    try {
      const fileContent = fs.readFileSync(file, "utf-8");
      const title = extractTitle(fileContent);

      if (title != null) {
        const [category, component] = title.split("/");
        if (!data[category]) {
          data[category] = [];
        }

        const docsImport = extractDocsImport(fileContent);
        if (docsImport != null) {
          const mdAbsolutePath = path.resolve(path.dirname(file), docsImport);
          const mdContent = fs.readFileSync(mdAbsolutePath, "utf-8");

          data[category].push({
            title: component,
            md: mdContent,
          });
        }
      }
    } catch (error) {
      console.error(`Failed to process file ${file}:`, error);
    }
  });

  try {
    updateReadme(data);
  } catch (error) {
    console.error("Failed to update README.md:", error);
  }
};

// Execute the main function
main();
