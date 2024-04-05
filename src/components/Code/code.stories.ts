import type { Meta, StoryObj } from "@storybook/react";
import { Code } from "./code";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Component/Code",
  component: Code,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const JS: Story = {
  args: {
    language: "JS",
    editable: false,
    code: `const message = "Hello, world!"; // This is a comment`,
  },
};
export const HTML: Story = {
  args: {
    language: "html",
    editable: false,
    code: `
    <div class="container">
        <h1>Title</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  `,
  },
};
export const CSS: Story = {
  args: {
    language: "css",
    editable: false,
    code: `
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .button {
      background-color: #007bff;
      color: #ffffff;
      padding: 10px 20px;
      border-radius: 5px;
    }
  `,
  },
};
export const Rust: Story = {
  args: {
    language: "rust",
    editable: false,
    code: `
    fn main() {
      let x = 42;
      println!("The value of x is {}", x);
  }
  `,
  },
};
export const SQL: Story = {
  args: {
    language: "sql",
    editable: false,
    code: `
    SELECT
      id,
      name
    FROM
      users
    WHERE
      age > 18;
  `,
  },
};
export const PHP: Story = {
  args: {
    language: "php",
    editable: false,
    code: `
    <?php
      // Define a function to add two numbers
      function add($a, $b) {
          return $a + $b;
      }

      // Call the add function
      $result = add(10, 20);
      echo "Result: $result";
    ?>
  `,
  },
};
export const Python: Story = {
  args: {
    language: "python",
    editable: false,
    code: `
    # Define a function to calculate the factorial of a number
    def factorial(n):
        if n == 0:
            return 1
        else:
            return n * factorial(n-1)

    # Call the factorial function
    result = factorial(5)
    print("Factorial of 5:", result)
  `,
  },
};
