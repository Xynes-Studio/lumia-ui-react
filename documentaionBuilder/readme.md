## Utils

# Utils

## Description
This set of utility functions provides helpful methods for handling class names and converting color formats. These functions streamline common operations, making it easier to manage class names and color formats in your application.

## Use Case
These utility functions are ideal for:
- Concatenating class names conditionally.
- Converting hexadecimal color codes to RGBA format.
- Rendering assets conditionally based on visibility.

## Utility Functions

### LMAsset

Renders an asset conditionally based on the visibility prop.

#### LMAssetProps
| Prop Name | Type | Description | Default Value | Required |
|-----------|------|-------------|---------------|----------|
| `Asset` | `React.FC<AssetProps>` | The asset to be rendered. | N/A | Yes |
| `size` | `number` | The size of the asset. | N/A | No |
| `color` | `string` | The color of the asset. | N/A | No |
| `visible` | `boolean` | Whether the asset is visible. | `true` | No |


### cx

A method to extract `classNames` on a React Component.

### hexToRgba

take two arguments `hex: string`, `opacity: number` and returns a rgba value with opacity.

## Form

# Validations

## Description
This set of validation utilities provides a variety of functions to validate different types of input data. It includes general validations like required fields and email format, number validations, length validations, phone number validations, URL and IP address validations, password strength checks, and date validations. These utilities throw errors when the validations fail, making them easy to integrate into form handling or other input validation processes.

## Use Case
These validation utilities are ideal for:
- Validating form inputs in web applications.
- Ensuring data consistency and correctness before processing.
- Providing user feedback for incorrect inputs.

## Validation Functions

### General Validations

#### required
Ensures that the input value is not empty.
```typescript
export const required = (...args: unknown[]) => {
  const value = args[0] as string;
  if (!value) {
    throw new Error("cannot be empty");
  } else {
    if (value.trim() == "") {
      throw new Error("cannot be empty");
    }
  }
};
```


## Typography

# Typography

## Description
The typography components provide a set of styled text elements for your application, including various heading levels (`H1` to `H6`), `Text`, `bold`, `underline`, and `italic` elements. These components support customization options such as type, number of lines, text case, and editable content.

## Use Case
These components are ideal for:
- Structuring content with appropriate heading levels.
- Styling text with different formats like bold, underline, and italic.
- Displaying body text, captions, and error messages.
- Providing editable text elements for user-generated content.

## Props Table

### HeaderProps

| Prop Name        | Type                                      | Description                                                         | Default Value  | Required |
|------------------|-------------------------------------------|---------------------------------------------------------------------|----------------|----------|
| `type`           | `"sans" \| "serif"`                       | The font type for the heading.                                      | `"sans"`       | No       |
| `numberOfLines`  | `number`                                   | The maximum number of lines to display.                             | `undefined`    | No       |
| `editable`       | `boolean`                                  | Whether the heading is editable.                                    | `false`        | No       |
| `onUpdate`       | `(value: string) => void`                 | Callback function when the heading content is updated.              | `undefined`    | No       |

### TextProps

| Prop Name        | Type                                      | Description                                                         | Default Value  | Required |
|------------------|-------------------------------------------|---------------------------------------------------------------------|----------------|----------|
| `type`           | `"error" \| "body" \| "caption"`          | The type of text to display.                                        | `"body"`       | No       |
| `textCase`       | `"none" \| "capitalize" \| "uppercase" \| "lowercase" \| "initial" \| "inherit"` | The case transformation for the text. | `"none"`       | No       |
| `editable`       | `boolean`                                  | Whether the text is editable.                                       | `false`        | No       |
| `codeClassName`  | `string`                                   | Additional class name for code blocks within the text.               | `undefined`    | No       |
| `numberOfLines`  | `number`                                   | The maximum number of lines to display.                             | `undefined`    | No       |
| `onUpdate`       | `(value: string) => void`                 | Callback function when the text content is updated.                 | `undefined`    | No       |

## Example Use Case

### Example 1: Using Headings
Using different heading levels and types.
```jsx
import React from 'react';
import { H1, H2, H3, H4, H5, H6 } from './typography';

const TypographyExample = () => (
  <div>
    <H1 type="serif">Heading 1</H1>
    <H2 type="sans">Heading 2</H2>
    <H3>Heading 3</H3>
    <H4>Heading 4</H4>
    <H5>Heading 5</H5>
    <H6>Heading 6</H6>
  </div>
);

export default TypographyExample;
```

## Component

# Alert

## Description
The `Alert` component is used to display important messages to the user. It can be configured to show different types of alerts, such as success, warning, or error. It also supports icons, titles, descriptions, and actions, making it highly customizable for various use cases.

## Use Case
This component is suitable for displaying notifications, warnings, errors, or any important information that requires the user's attention. It can be integrated into various parts of an application where user feedback or system messages need to be conveyed effectively.

## Props Table

| Prop Name        | Type                          | Description                                                         | Default Value             | Required |
|------------------|-------------------------------|---------------------------------------------------------------------|---------------------------|----------|
| `type`           | `"flat" \| "outlined" \| "default"` | Defines the style of the alert.                                      | `"default"`               | No       |
| `status`         | `"success" \| "warning" \| "error"` | Defines the status of the alert which dictates its color scheme.     | `undefined`               | No       |
| `showIcon`       | `boolean`                     | Whether to show an icon in the alert.                                | `false`                   | No       |
| `icon`           | `React.FC<AssetProps>`        | The icon to be displayed in the alert.                               | `LmCkAdd`                 | No       |
| `showCloseIcon`  | `boolean`                     | Whether to show a close icon in the alert.                           | `undefined`               | No       |
| `onClose`        | `() => void`                  | Callback function to be called when the close icon is clicked.       | `undefined`               | No       |
| `title`          | `string`                      | The title of the alert message.                                      | `"Alert Message Title"`   | No       |
| `description`    | `string`                      | The description or detailed message of the alert.                    | `undefined`               | No       |
| `actionBtn`      | `boolean`                     | Whether to show an action button in the alert.                       | `false`                   | No       |
| `actionBtnLabel` | `string`                      | The label for the action button if `actionBtn` is true.              | `undefined`               | No       |
| `actionBtnOnPress`| `() => void`                 | Callback function to be called when the action button is pressed.    | `undefined`               | No       |

# Badge

## Description
The `Badge` component is a highly customizable UI element used to display labels, counts, or statuses. It supports different shapes (round and square) and styles (filled or outlined). The component can be configured with various colors for both text and background, making it suitable for a wide range of use cases.

## Use Case
The `Badge` component is ideal for displaying:
- Notification counts (e.g., unread messages).
- Status indicators (e.g., online/offline status).
- Labels or tags for categorization.
- Any other brief, prominent information that needs to be highlighted.

## Props Table

| Prop Name        | Type                                    | Description                                                         | Default Value             | Required |
|------------------|-----------------------------------------|---------------------------------------------------------------------|---------------------------|----------|
| `type`           | `"round" \| "square-fill" \| "square-outlined"` | Defines the shape and style of the badge.                            | `"square-fill"`           | No       |
| `label`          | `number \| string`                      | The content to be displayed inside the badge.                        | `undefined`               | Yes      |
| `color`          | `string`                                | The color of the text inside the badge.                              | `globalColor?.foreground` | No       |
| `backgroundColor`| `string`                                | The background color of the badge.                                   | `globalColor?.accent100`  | No       |

## Example Use Case

**Round Badge:**
- To display a count of unread notifications, use a round badge with a numeric label. If the count exceeds 9, it will display "9+".

**Square Badge:**
- To display a status label like "New" or "Sale", use a square badge with a string label. This can be filled or outlined based on the type.

## Component Props

| Prop Name        | Type                                    | Description                                                         | Default Value             | Required |
|------------------|-----------------------------------------|---------------------------------------------------------------------|---------------------------|----------|
| `type`           | `"round" \| "square-fill" \| "square-outlined"` | Defines the shape and style of the badge.                            | `"square-fill"`           | No       |
| `label`          | `number \| string`                      | The content to be displayed inside the badge.                        | `undefined`               | Yes      |
| `color`          | `string`                                | The color of the text inside the badge.                              | `globalColor?.foreground` | No       |
| `backgroundColor`| `string`                                | The background color of the badge.                                   | `globalColor?.accent100`  | No       |

## Usage Example

**Round Badge:**
```jsx
<Badge type="round" label={5} />
```


# Button

## Description
The `Button` component is a versatile UI element used to trigger actions or events in an application. It supports different styles, icons, and labels, making it highly customizable for various use cases. The component is designed to be easily integrated and styled to match the application's design system.

## Use Case
The `Button` component is ideal for:
- Triggering form submissions.
- Initiating navigation to different parts of an application.
- Performing in-app actions like saving data, opening modals, etc.
- Displaying buttons with icons for enhanced visual appeal.

## Props Table

| Prop Name        | Type                                    | Description                                                         | Default Value             | Required |
|------------------|-----------------------------------------|---------------------------------------------------------------------|---------------------------|----------|
| `type`           | `"fill" \| "outlined" \| "label"`       | Defines the style of the button.                                    | `"fill"`                  | No       |
| `textCase`       | `"none" \| "capitalize" \| "uppercase" \| "lowercase" \| "initial" \| "inherit"` | Defines the text case transformation for the label.                | `"uppercase"`             | No       |
| `icon`           | `React.FC<AssetProps>`                  | The icon to be displayed in the button.                             | `undefined`               | No       |
| `iconAtEnd`      | `boolean`                               | Whether to display the icon at the end of the button.               | `false`                   | No       |
| `label`          | `string`                                | The text label to be displayed inside the button.                   | `undefined`               | No       |
| `color`          | `string`                                | The color of the text and icon inside the button.                   | `globalColor.foreground`  | No       |
| `backgroundColor`| `string`                                | The background color of the button.                                 | `globalColor.accent100`   | No       |
| `borderColor`    | `string`                                | The border color of the button.                                     | `globalColor?.border100`  | No       |
| `borderRadius`   | `number`                                | The border radius of the button.                                    | `0.3`                     | No       |
| `iconSize`       | `number`                                | The size of the icon inside the button.                             | `0.8`                     | No       |

## Example Use Case

### Example 1: Primary Button
A primary button that triggers a form submission.
```jsx
<Button
  type="fill"
  label="Submit"
  color="#fff"
  backgroundColor="#007bff"
/>
```


# Checkbox

## Description
The `Checkbox` component is a customizable UI element used to capture user input in the form of a boolean value. It supports indeterminate states, custom labels, and callback functions for change events. The component is designed to be easily integrated into forms and other interactive parts of an application.

## Use Case
The `Checkbox` component is ideal for:
- Capturing user agreement (e.g., terms and conditions).
- Toggling settings on or off.
- Selecting multiple items from a list.
- Displaying an indeterminate state for partially selected groups.

## Props Table

| Prop Name          | Type                           | Description                                                        | Default Value     | Required |
|--------------------|--------------------------------|--------------------------------------------------------------------|-------------------|----------|
| `label`            | `string`                       | The text label to be displayed next to the checkbox.               | `undefined`       | No       |
| `showIndeterminate`| `boolean`                      | Whether to display the checkbox in an indeterminate state.         | `false`           | No       |
| `onUpdate`         | `(value: boolean) => void`     | Callback function to be called when the checkbox state changes.    | `undefined`       | No       |
| `value`            | `boolean`                      | The initial checked state of the checkbox.                         | `false`           | No       |
| `disabled`         | `boolean`                      | Whether the checkbox is disabled.                                  | `undefined`       | No       |

## Example Use Case

### Example 1: Simple Checkbox
A simple checkbox to accept terms and conditions.
```jsx
<Checkbox
  label="I agree to the terms and conditions"
  onUpdate={(value) => console.log(value)}
/>
```


# Code

## Description
The `Code` component is a flexible and customizable UI element for displaying code snippets in various programming languages. It supports syntax highlighting, formatting, and can be editable or non-editable based on the requirements. This component can be used in blogs, documentation sites, or any application that needs to present code to users.

## Use Case
The `Code` component is ideal for:
- Displaying code snippets in different programming languages with syntax highlighting.
- Allowing users to edit and format code in real-time.
- Embedding formatted code within articles, tutorials, or documentation.

## Props Table

| Prop Name        | Type                                    | Description                                                        | Default Value     | Required |
|------------------|-----------------------------------------|--------------------------------------------------------------------|-------------------|----------|
| `code`           | `string`                                | The code snippet to be displayed.                                  | `undefined`       | Yes      |
| `language`       | `'html' \| 'css' \| 'JS' \| 'js' \| 'jsx' \| 'javascript' \| 'rust' \| 'sql' \| 'php' \| 'python' \| 'auto'` | The programming language of the code for syntax highlighting.     | `'auto'`          | No       |
| `editable`       | `boolean`                               | Whether the code is editable by the user.                           | `false`           | No       |
| `codeClassName`  | `string`                                | Additional class name for the code element.                         | `undefined`       | No       |
| `babel`          | `boolean`                               | Whether to use Babel for formatting the code.                       | `false`           | No       |
| `span`           | `boolean`                               | Whether to render the code inside a `span` element.                 | `false`           | No       |

## Example Use Case

### Example 1: Displaying HTML Code
A non-editable code snippet displaying HTML code.
```jsx
<Code
  code="<div>Hello, World!</div>"
  language="html"
/>
```


# Dialogue

## Description
The `Dialogue` component is a modal dialog box used to display important information and actions to the user. It supports customizable titles, descriptions, buttons, and icons. The component can be aligned in different ways and is suitable for various use cases such as confirmations, alerts, or detailed messages.

## Use Case
The `Dialogue` component is ideal for:
- Displaying confirmation dialogs for user actions.
- Showing alerts or error messages.
- Providing detailed information with optional actions.
- Any scenario where a modal dialog is required to capture user attention and interaction.

## Props Table

| Prop Name            | Type                                                                    | Description                                                                   | Default Value     | Required |
|----------------------|-------------------------------------------------------------------------|-------------------------------------------------------------------------------|-------------------|----------|
| `visible`            | `boolean`                                                               | Whether the dialogue is visible.                                              | `false`           | No       |
| `actionBtnType`      | `'primary' \| 'secondary' \| 'both' \| 'none'`                          | The type of action buttons to display.                                        | `'none'`          | No       |
| `contentAlign`       | `'left' \| 'center' \| 'right'`                                         | The alignment of the content inside the dialogue.                             | `'left'`          | No       |
| `primaryBtnOnPress`  | `(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void`      | Callback function for primary button press event.                             | `undefined`       | No       |
| `secondaryBtnOnPress`| `(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void`      | Callback function for secondary button press event.                           | `undefined`       | No       |
| `primaryBtnLabel`    | `string`                                                                | Label for the primary button.                                                 | `'Submit'`        | No       |
| `secondaryBtnLabel`  | `string`                                                                | Label for the secondary button.                                               | `'Cancel'`        | No       |
| `primaryIcon`        | `React.FC<AssetProps>`                                                  | Icon for the primary button.                                                  | `LmCkCheckCircle` | No       |
| `secondaryIcon`      | `React.FC<AssetProps>`                                                  | Icon for the secondary button.                                                | `LmCkClose`       | No       |
| `title`              | `string`                                                                | The title of the dialogue.                                                    | `undefined`       | No       |
| `description`        | `string`                                                                | The description or detailed message of the dialogue.                          | `undefined`       | No       |
| `closeIcon`          | `boolean`                                                               | Whether to show a close icon in the dialogue.                                 | `false`           | No       |
| `onClose`            | `() => void`                                                            | Callback function to be called when the dialogue is closed.                   | `undefined`       | No       |

## Example Use Case

### Example 1: Confirmation Dialogue
A confirmation dialogue with primary and secondary buttons.
```jsx
<Dialogue
  visible={true}
  title="Delete Item"
  description="Are you sure you want to delete this item?"
  actionBtnType="both"
  primaryBtnLabel="Delete"
  secondaryBtnLabel="Cancel"
  primaryBtnOnPress={() => console.log('Item deleted')}
  secondaryBtnOnPress={() => console.log('Action cancelled')}
  onClose={() => console.log('Dialogue closed')}
  closeIcon={true}
/>
```

# HorizontalModal

## Description
The `ModalHorizontalIn` component is a customizable slide-in modal dialog that appears from either the left or right side of the screen. It supports visibility toggling, customizable direction, and an optional close function triggered when clicking outside the modal.

## Use Case
The `ModalHorizontalIn` component is ideal for:
- Displaying off-canvas menus or side panels.
- Implementing slide-in dialogs for notifications or additional content.
- Creating interactive interfaces where modal dialogs need to appear from the sides of the screen.

## Props Table

| Prop Name    | Type                                      | Description                                                        | Default Value | Required |
|--------------|-------------------------------------------|--------------------------------------------------------------------|---------------|----------|
| `visible`    | `boolean`                                 | Whether the modal is visible.                                      | `false`       | No       |
| `direction`  | `'left' \| 'right'`                       | The direction from which the modal slides in.                      | `'left'`      | No       |
| `closeIcon`  | `boolean`                                 | Whether to show a close icon in the modal.                         | `false`       | No       |
| `onClose`    | `() => void`                              | Callback function to be called when the modal is closed.           | `undefined`   | No       |

## Example Use Case

### Example 1: Left Slide-In Modal
A modal that slides in from the left side of the screen.
```jsx
<ModalHorizontalIn
  visible={true}
  direction="left"
  onClose={() => console.log('Modal closed')}
>
  <p>This is a left slide-in modal.</p>
</ModalHorizontalIn>
```

# Link

## Description
The `Link` component is a customizable anchor element used for navigation. It extends the native HTML anchor element, allowing you to use all the default anchor attributes while providing additional styling and functionality as needed. This component can be used for both internal and external navigation in your application.

## Use Case
The `Link` component is ideal for:
- Navigating to different pages within your application.
- Linking to external websites or resources.
- Creating styled hyperlinks that match the design system of your application.

## Props Table

| Prop Name    | Type                                             | Description                                                         | Default Value     | Required |
|--------------|--------------------------------------------------|---------------------------------------------------------------------|-------------------|----------|
| `href`       | `string`                                         | The URL that the hyperlink points to.                               | `undefined`       | Yes      |
| `target`     | `"_self" \| "_blank" \| "_parent" \| "_top"`     | Specifies where to open the linked document.                        | `"_self"`         | No       |
| `rel`        | `string`                                         | Specifies the relationship between the current document and the linked document. | `undefined`       | No       |
| `children`   | `React.ReactNode`                                | The content inside the link.                                        | `undefined`       | Yes      |

## Example Use Case

### Example 1: Basic Link
A basic link to an external website.
```jsx
<Link href="https://www.example.com">
  Visit Example
</Link>
```

# listComponent

## Description
The `ListComponent` is a flexible and customizable component for rendering nested lists. It supports both ordered and unordered lists and can handle multiple levels of nesting. This component is ideal for displaying hierarchical data or creating structured content.

## Use Case
The `ListComponent` is ideal for:
- Displaying hierarchical data such as organizational structures or file directories.
- Creating structured content with nested lists.
- Generating lists with different bullet or numbering styles for each level.

## Props Table

| Prop Name | Type                                      | Description                                                        | Default Value      | Required |
|-----------|-------------------------------------------|--------------------------------------------------------------------|--------------------|----------|
| `items`   | `ListItem[]`                              | Array of list items to be rendered. Each item can have nested children. | `[]`               | Yes      |
| `type`    | `'ordered-list' \| 'unordered-List'`      | Defines whether the list is ordered or unordered.                  | `'unordered-List'` | No       |

## ListItem Interface

| Prop Name  | Type         | Description                                                        | Default Value | Required |
|------------|--------------|--------------------------------------------------------------------|---------------|----------|
| `text`     | `string`     | The text content of the list item.                                 | `undefined`   | Yes      |
| `level`    | `number`     | The level of the list item (used for styling nested lists).        | `1`           | Yes      |
| `children` | `ListItem[]` | Array of child list items for creating nested lists.               | `undefined`   | No       |

## Example Use Case

### Example 1: Unordered List
A basic unordered list with nested items.
```jsx
const items = [
  {
    text: 'Item 1',
    level: 1,
    children: [
      {
        text: 'Item 1.1',
        level: 2,
      },
      {
        text: 'Item 1.2',
        level: 2,
        children: [
          {
            text: 'Item 1.2.1',
            level: 3,
          },
        ],
      },
    ],
  },
  {
    text: 'Item 2',
    level: 1,
  },
];

<ListComponent items={items} type="unordered-List" />
```

# Modal

## Description
The `Modal` component is a customizable dialog box used to display important information and actions to the user. It supports customizable titles, descriptions, primary and secondary buttons, and icons. The component is suitable for various use cases such as confirmations, alerts, or detailed messages.

## Use Case
The `Modal` component is ideal for:
- Displaying confirmation dialogs for user actions.
- Showing alerts or error messages.
- Providing detailed information with optional actions.
- Any scenario where a modal dialog is required to capture user attention and interaction.

## Props Table

| Prop Name            | Type                                                                    | Description                                                                   | Default Value     | Required |
|----------------------|-------------------------------------------------------------------------|-------------------------------------------------------------------------------|-------------------|----------|
| `visible`            | `boolean`                                                               | Whether the modal is visible.                                                 | `false`           | No       |
| `actionBtnType`      | `'primary' \| 'secondary' \| 'both' \| 'none'`                          | The type of action buttons to display.                                        | `'none'`          | No       |
| `actionBtnAlign`     | `'left' \| 'center' \| 'right'`                                         | The alignment of the action buttons.                                          | `'left'`          | No       |
| `primaryBtnOnPress`  | `(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void`      | Callback function for primary button press event.                             | `undefined`       | No       |
| `secondaryBtnOnPress`| `(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void`      | Callback function for secondary button press event.                           | `undefined`       | No       |
| `primaryBtnLabel`    | `string`                                                                | Label for the primary button.                                                 | `'Submit'`        | No       |
| `secondaryBtnLabel`  | `string`                                                                | Label for the secondary button.                                               | `'Cancel'`        | No       |
| `primaryIcon`        | `React.FC<AssetProps>`                                                  | Icon for the primary button.                                                  | `LmCkCheckCircle` | No       |
| `secondaryIcon`      | `React.FC<AssetProps>`                                                  | Icon for the secondary button.                                                | `LmCkClose`       | No       |
| `title`              | `string`                                                                | The title of the modal.                                                       | `undefined`       | No       |
| `description`        | `string`                                                                | The description or detailed message of the modal.                             | `undefined`       | No       |
| `closeIcon`          | `boolean`                                                               | Whether to show a close icon in the modal.                                    | `false`           | No       |
| `onClose`            | `() => void`                                                            | Callback function to be called when the modal is closed.                      | `undefined`       | No       |

## Example Use Case

### Example 1: Confirmation Modal
A confirmation modal with primary and secondary buttons.
```jsx
<Modal
  visible={true}
  title="Delete Item"
  description="Are you sure you want to delete this item?"
  actionBtnType="both"
  actionBtnAlign="right"
  primaryBtnLabel="Delete"
  secondaryBtnLabel="Cancel"
  primaryBtnOnPress={() => console.log('Item deleted')}
  secondaryBtnOnPress={() => console.log('Action cancelled')}
  onClose={() => console.log('Modal closed')}
  closeIcon={true}
/>
```

# Pagination

## Description
The `Pagination` component is a versatile and customizable UI element used for navigating through paginated content. It supports displaying page numbers, next and previous buttons, and ellipsis for a compact representation of large page ranges. This component is ideal for applications with paginated data or content that needs easy navigation.

## Use Case
The `Pagination` component is ideal for:
- Navigating through paginated data such as tables, lists, or galleries.
- Providing users with an intuitive way to jump to specific pages.
- Displaying a compact pagination interface for large sets of pages.

## Props Table

| Prop Name          | Type                                       | Description                                                         | Default Value     | Required |
|--------------------|--------------------------------------------|---------------------------------------------------------------------|-------------------|----------|
| `pageNumber`       | `number`                                   | The current page number.                                            | `undefined`       | Yes      |
| `totalPages`       | `number`                                   | The total number of pages.                                          | `undefined`       | Yes      |
| `onPressNext`      | `() => void`                               | Callback function to be called when the next button is pressed.     | `undefined`       | Yes      |
| `onPressPrevious`  | `() => void`                               | Callback function to be called when the previous button is pressed. | `undefined`       | Yes      |
| `onPressPageNumber`| `(page: number) => void`                   | Callback function to be called when a page number is pressed.       | `undefined`       | Yes      |

## Example Use Case

### Example 1: Basic Pagination
A basic pagination component for navigating through 10 pages.
```jsx
<Pagination
  pageNumber={1}
  totalPages={10}
  onPressNext={() => console.log("Next page")}
  onPressPrevious={() => console.log("Previous page")}
  onPressPageNumber={(page) => console.log(`Page ${page}`)}
/>
```

# Profile

## Description
The `Profile` component is a flexible and customizable UI element used to display profile information. It supports displaying an avatar, title, subtitle, and an optional action icon. This component is ideal for use in user profile cards, contact lists, or any interface requiring a compact representation of a user's profile.

## Use Case
The `Profile` component is ideal for:
- Displaying user profile information in a card format.
- Presenting contact information in lists.
- Creating profile sections in dashboards or user interfaces.

## Props Table

| Prop Name  | Type                                      | Description                                                        | Default Value     | Required |
|------------|-------------------------------------------|--------------------------------------------------------------------|-------------------|----------|
| `title`    | `string`                                  | The main title or name to be displayed in the profile.             | `undefined`       | No       |
| `subtitle` | `string`                                  | The subtitle or additional information to be displayed.            | `undefined`       | No       |
| `actionIcon`| `React.FC<AssetProps>`                   | An optional icon for actions, such as settings or editing.         | `undefined`       | No       |
| `avatar`   | `string`                                  | The URL of the avatar image to be displayed in the profile.        | `undefined`       | No       |

## Example Use Case

### Example 1: Basic Profile
A basic profile displaying an avatar, title, and subtitle.
```jsx
<Profile
  title="John Doe"
  subtitle="Software Engineer"
  avatar="https://example.com/avatar.jpg"
/>
```

# Radio

## Description
The `Radio` component is a customizable UI element used for single selection from multiple options. It supports labels, checked state, and can be disabled. This component is ideal for forms or any other input scenarios where users need to select one option from a set.

## Use Case
The `Radio` component is ideal for:
- Creating single-select options in forms.
- Implementing radio button groups for surveys or questionnaires.
- Any scenario where a user needs to select one option from multiple choices.

## Props Table

| Prop Name  | Type                                      | Description                                                        | Default Value | Required |
|------------|-------------------------------------------|--------------------------------------------------------------------|---------------|----------|
| `label`    | `string`                                  | The label to be displayed next to the radio button.                | `undefined`   | No       |
| `disabled` | `boolean`                                 | Whether the radio button is disabled.                              | `false`       | No       |
| `checked`  | `boolean`                                 | Whether the radio button is checked.                               | `false`       | No       |

## Example Use Case

### Example 1: Basic Radio Button
A basic radio button with a label.
```jsx
<Radio
  label="Option 1"
  checked={true}
  onChange={(e) => console.log(e.target.checked)}
/>
```

# Switch

## Description
The `Switch` component is a customizable toggle switch used for enabling or disabling options. It supports labels, active and inactive colors, and can handle state changes through a toggle function. This component is ideal for settings or any scenario where a binary choice needs to be made.

## Use Case
The `Switch` component is ideal for:
- Toggling settings or preferences on or off.
- Creating binary choices in forms.
- Implementing on/off switches for features.

## Props Table

| Prop Name     | Type                                       | Description                                                        | Default Value            | Required |
|---------------|--------------------------------------------|--------------------------------------------------------------------|--------------------------|----------|
| `label`       | `string`                                   | The label to be displayed next to the switch.                      | `undefined`              | No       |
| `activeColor` | `string`                                   | The color of the switch when it is active.                         | `color.accent100`        | No       |
| `inactiveColor`| `string`                                  | The color of the switch when it is inactive.                       | `color.foregroundInverse300` | No       |
| `value`       | `boolean`                                  | The current value of the switch.                                   | `false`                  | Yes      |
| `onToggle`    | `(value: boolean) => void`                 | Callback function to be called when the switch value changes.      | `undefined`              | No       |

## Example Use Case

### Example 1: Basic Switch
A basic switch with a label.
```jsx
<Switch
  label="Enable Notifications"
  value={true}
  onToggle={(newValue) => console.log("Switch toggled:", newValue)}
/>
```

# Ticker

## Description
The `Ticker` component is a customizable scrolling ticker used to display continuous information, such as news headlines or stock prices. It supports various settings like speed, direction, delay, background color, and whether the ticker should stop on hover. This component is ideal for applications requiring a scrolling text or marquee effect.

## Use Case
The `Ticker` component is ideal for:
- Displaying continuous news headlines or updates.
- Showing stock prices or financial data.
- Any scenario where a scrolling text effect is needed.

## Props Table

| Prop Name       | Type                                      | Description                                                        | Default Value          | Required |
|-----------------|-------------------------------------------|--------------------------------------------------------------------|------------------------|----------|
| `stopOnHover`   | `boolean`                                 | Whether the ticker should stop scrolling when hovered over.        | `false`                | No       |
| `backgroundColor`| `string`                                 | The background color of the ticker.                                | `hexToRGBA(color.foreground, 0)` | No       |
| `speed`         | `1 \| 2 \| 3 \| 4 \| 5 \| 6 \| 7 \| 8 \| 9 \| 10 \| 20 \| 30 \| 40 \| 50` | The speed of the scrolling text.                                   | `10`                   | No       |
| `delay`         | `number`                                  | The delay before the ticker starts scrolling.                      | `0`                    | No       |
| `direction`     | `"normal" \| "reverse" \| "alternate" \| "alternate-reverse"` | The direction of the scrolling text.                               | `"normal"`             | No       |
| `loop`          | `boolean`                                 | Whether the ticker should loop continuously.                       | `true`                 | No       |

## Example Use Case

### Example 1: Basic Ticker
A basic ticker displaying continuous text.
```jsx
<Ticker>
  Breaking News: This is an example of a basic ticker.
</Ticker>
```

## Input

# PinInput

## Description
The `PinInput` component is a customizable UI element used for capturing multi-digit inputs, such as PIN codes or verification codes. It supports different input styles, secret mode for sensitive inputs, and validation mechanisms. This component is ideal for applications requiring secure and user-friendly PIN or code entry.

## Use Case
The `PinInput` component is ideal for:
- Capturing PIN codes for authentication.
- Inputting verification codes sent via SMS or email.
- Securely entering multi-digit passwords or access codes.

## Props Table

| Prop Name       | Type                                       | Description                                                        | Default Value     | Required |
|-----------------|--------------------------------------------|--------------------------------------------------------------------|-------------------|----------|
| `fillType`      | `"fill" \| "transparent" \| "outlined" \| "bottom"` | Defines the style of the input fields.                              | `"fill"`          | No       |
| `numberOfFields`| `4 \| 5 \| 6`                              | The number of input fields.                                         | `4`               | No       |
| `onValueChange` | `(pinValue: string) => void`               | Callback function to be called when the PIN value changes.          | `undefined`       | Yes      |
| `value`         | `string`                                   | The current value of the PIN input.                                 | `""`              | Yes      |
| `label`         | `string`                                   | The label to be displayed above the input fields.                   | `""`              | No       |
| `labelPosition` | `'center' \| 'start' \| 'end'`             | The alignment of the label.                                         | `'start'`         | No       |
| `validations`   | `((...args: unknown[]) => void)[]`         | Array of validation functions to validate the PIN value.            | `undefined`       | No       |
| `secret`        | `boolean`                                  | Whether to hide the input values (e.g., for PIN or password entry). | `false`           | No       |

## Example Use Case

### Example 1: Basic PIN Input
A basic PIN input with 4 fields.
```jsx
<PinInput
  value="1234"
  onValueChange={(pin) => console.log(pin)}
/>
```

# SearchInput

## Description
The `SearchInput` component is a versatile and customizable UI element used for search functionality. It supports different input styles, auto-search capabilities, and can display suggestions based on the input. This component can be used to enhance the user experience by providing real-time search results and suggestions.

## Use Case
The `SearchInput` component is ideal for:
- Implementing search functionality in applications.
- Providing a search bar with real-time suggestions.
- Creating dropdown search inputs for selecting from a list of options.

## Props Table

| Prop Name        | Type                                     | Description                                                         | Default Value     | Required |
|------------------|------------------------------------------|---------------------------------------------------------------------|-------------------|----------|
| `type`           | `"default" \| "outline" \| "shadow"`     | Defines the style of the search input container.                     | `"default"`       | No       |
| `resultsStyleType`| `"default" \| "outline" \| "alternative-fill"` | Defines the style of the search results container.                   | `undefined`       | No       |
| `inputType`      | `"search" \| "dropdown"`                 | Defines the type of the input, whether it's a search or dropdown.    | `"search"`        | No       |
| `searchString`   | `string`                                 | The initial search string value.                                     | `""`              | No       |
| `label`          | `string`                                 | The label to be displayed above the search input.                    | `undefined`       | No       |
| `autoSearch`     | `boolean`                                | Whether to perform the search automatically as the user types.       | `false`           | No       |
| `suggestions`    | `boolean`                                | Whether to display search suggestions.                               | `true`            | No       |
| `handleSearch`   | `(value: string) => void`                | Callback function to handle the search action.                       | `undefined`       | No       |
| `dataset`        | `T[]`                                    | The dataset to be used for displaying search suggestions.            | `undefined`       | No       |
| `renderItem`     | `(item: T, index: number) => React.JSX.Element` | Function to render each item in the search suggestions list.         | `undefined`       | No       |
| `placeholder`    | `string`                                 | The placeholder text for the search input.                           | `""`              | No       |
| `onValueChange`  | `(value: string) => void`                | Callback function to be called when the input value changes.         | `undefined`       | No       |

## Example Use Case

### Example 1: Basic Search Input
A basic search input with a search button.
```jsx
<SearchInput
  placeholder="Search..."
  handleSearch={(value) => console.log("Search for:", value)}
/>
```

# Slider

## Description
The `Slider` component is a customizable UI element used for selecting a value from a range. It supports different styles, customizable colors, and can display the selected value as a percentage. This component is ideal for applications requiring user input for adjustable settings or preferences.

## Use Case
The `Slider` component is ideal for:
- Adjusting settings such as volume, brightness, or other preferences.
- Selecting a value from a range in forms or settings pages.
- Providing a visual representation of progress or value selection.

## Props Table

| Prop Name        | Type                                     | Description                                                         | Default Value                   | Required |
|------------------|------------------------------------------|---------------------------------------------------------------------|---------------------------------|----------|
| `type`           | `"slide" \| "progress"`                  | Defines the style of the slider.                                    | `"slide"`                       | No       |
| `onChange`       | `(event: React.ChangeEvent<HTMLInputElement>) => void` | Callback function to be called when the slider value changes.       | `undefined`                     | No       |
| `value`          | `number`                                 | The current value of the slider.                                    | `0`                             | Yes      |
| `showPercentage` | `boolean`                                | Whether to display the value as a percentage next to the slider.     | `false`                         | No       |
| `label`          | `string`                                 | The label to be displayed above the slider.                         | `undefined`                     | No       |
| `progressColor`  | `string`                                 | The color of the progress bar in the slider.                        | `color?.accent100`              | No       |
| `backgroundColor`| `string`                                 | The background color of the slider.                                 | `color?.foregroundInverse300`   | No       |

## Example Use Case

### Example 1: Basic Slider
A basic slider to adjust a value.
```jsx
<Slider
  value={50}
  onChange={(e) => console.log(e.target.value)}
/>
```

# TextArea

## Description
The `Textarea` component is a customizable and versatile UI element used for capturing multi-line text input. It supports different styles, labels, validation messages, and placeholders. This component is ideal for forms or any other input scenarios where users need to enter longer text.

## Use Case
The `Textarea` component is ideal for:
- Capturing user input in forms.
- Providing an area for comments or feedback.
- Allowing multi-line text entry in applications.

## Props Table

| Prop Name     | Type                                       | Description                                                         | Default Value       | Required |
|---------------|--------------------------------------------|---------------------------------------------------------------------|---------------------|----------|
| `type`        | `"fill" \| "outlined" \| "outline-only"`   | Defines the style of the textarea.                                  | `"fill"`            | No       |
| `label`       | `string`                                   | The label to be displayed above the textarea.                       | `undefined`         | No       |
| `errorMessage`| `string`                                   | The error message to be displayed if validation fails.              | `undefined`         | No       |
| `placeholder` | `string`                                   | The placeholder text for the textarea.                              | `"Enter your text"` | No       |
| `onChange`    | `(event: React.ChangeEvent<HTMLTextAreaElement>) => void` | Callback function to be called when the textarea value changes. | `undefined`         | No       |
| `value`       | `string`                                   | The current value of the textarea.                                  | `""`                | No       |
| `validations` | `((...args: unknown[]) => void)[]`         | Array of validation functions to validate the textarea value.       | `undefined`         | No       |

## Example Use Case

### Example 1: Basic Textarea
A basic textarea for user input.
```jsx
<Textarea
  placeholder="Enter your comments"
  onChange={(e) => console.log(e.target.value)}
  value=""
/>
```

# TextInput

## Description
The `TextInput` component is a customizable and versatile UI element used for capturing single-line text input. It supports different input types, styles, labels, validation messages, and placeholders. This component is ideal for forms or any other input scenarios where users need to enter text.

## Use Case
The `TextInput` component is ideal for:
- Capturing user input in forms.
- Providing an input field for passwords, emails, numbers, or plain text.
- Displaying validation messages for user input.

## Props Table

| Prop Name     | Type                                       | Description                                                         | Default Value       | Required |
|---------------|--------------------------------------------|---------------------------------------------------------------------|---------------------|----------|
| `type`        | `"fill" \| "outlined" \| "outline-only"`   | Defines the style of the text input.                                | `"fill"`            | No       |
| `inputType`   | `"text" \| "number" \| "password" \| "email"` | Defines the type of input.                                           | `"text"`            | No       |
| `label`       | `string`                                   | The label to be displayed above the text input.                     | `undefined`         | No       |
| `errorMessage`| `string`                                   | The error message to be displayed if validation fails.              | `undefined`         | No       |
| `placeholder` | `string`                                   | The placeholder text for the text input.                            | `"Enter your text"` | No       |
| `onChange`    | `(event: React.ChangeEvent<HTMLInputElement>) => void` | Callback function to be called when the text input value changes. | `undefined`         | No       |
| `value`       | `string`                                   | The current value of the text input.                                | `""`                | No       |
| `validations` | `((...args: unknown[]) => void)[]`         | Array of validation functions to validate the text input value.     | `undefined`         | No       |

## Example Use Case

### Example 1: Basic TextInput
A basic text input for user input.
```jsx
<TextInput
  placeholder="Enter your name"
  onChange={(e) => console.log(e.target.value)}
  value=""
/>
```

## Disclosure

# Accordion

## Description
The `Accordion` component is a collapsible UI element used to hide and show content. It supports customizable headers and can be used to organize information in a compact and user-friendly way. This component can be integrated into various parts of an application where content needs to be expandable and collapsible.

## Use Case
The `Accordion` component is ideal for:
- Displaying FAQs where each question can be expanded to reveal the answer.
- Organizing content in a compact manner where sections can be expanded and collapsed.
- Providing a navigable list of items or options where details are hidden until needed.

## Props Table

| Prop Name   | Type                         | Description                                                         | Default Value | Required |
|-------------|------------------------------|---------------------------------------------------------------------|---------------|----------|
| `headerText`| `string`                     | The text to be displayed in the header of the accordion.            | `""`          | Yes      |
| `children`  | `React.ReactNode`            | The content to be displayed inside the accordion body.              | `undefined`   | No       |
| `hidden`    | `boolean`                    | Whether the accordion content is initially hidden.                  | `false`       | No       |

## Example Use Case

### Example 1: Simple Accordion
A simple accordion to display additional information.
```jsx
<Accordion
  headerText="More Information"
>
  <p>This is the hidden content that is revealed when the accordion is expanded.</p>
</Accordion>
```

# Card

## Description
The `Card` component is a versatile and customizable UI element used to display information in a concise and visually appealing manner. It supports different styles, optional images, titles, descriptions, and additional interactive elements such as switches and action buttons. This component can be used to present various types of content in a structured format.

## Use Case
The `Card` component is ideal for:
- Displaying product information with images, titles, and descriptions.
- Showing user profiles or contact information.
- Presenting articles or blog post summaries.
- Providing an interactive element like a switch for toggling states.

## Props Table

| Prop Name       | Type                                         | Description                                                        | Default Value | Required |
|-----------------|----------------------------------------------|--------------------------------------------------------------------|---------------|----------|
| `type`          | `"default" \| "fill" \| "outlined"`          | Defines the style of the card.                                      | `"default"`   | No       |
| `image`         | `string`                                     | The URL of the image to be displayed in the card.                   | `undefined`   | No       |
| `title`         | `string`                                     | The title of the card.                                              | `undefined`   | Yes      |
| `description`   | `string`                                     | The description or detailed message of the card.                    | `undefined`   | Yes      |
| `displaySwitch` | `boolean`                                    | Whether to display a switch in the card.                            | `undefined`   | No       |
| `toggleValue`   | `boolean`                                    | The initial value of the switch.                                    | `false`       | No       |
| `onToggle`      | `(value: boolean) => void`                   | Callback function to be called when the switch value changes.       | `undefined`   | No       |
| `actionElement` | `React.ReactNode`                            | Additional interactive element to be displayed in the card.         | `undefined`   | No       |
| `width`         | `string`                                     | The width of the card.                                              | `"22rem"`     | No    


# Tabs

## Description
The `Tabs` component is a versatile UI element used for navigation or switching between different views or content sections. It supports horizontal and vertical orientations, custom icons, labels, and different selection styles. This component can be used to enhance the user experience by organizing content in a structured and easily accessible manner.

## Use Case
The `Tabs` component is ideal for:
- Navigating between different sections of a single-page application.
- Switching between various views or data sets within a page.
- Creating a tabbed interface for content that needs to be categorized or segmented.

## Props Table

| Prop Name    | Type                                         | Description                                                        | Default Value     | Required |
|--------------|----------------------------------------------|--------------------------------------------------------------------|-------------------|----------|
| `direction`  | `"horizontal" \| "vertical"`                 | Defines the direction of the tabs.                                  | `"horizontal"`    | No       |
| `selectType` | `"select-100" \| "select-200" \| "select-300"`| Defines the selection style of the tabs.                            | `"select-100"`    | No       |
| `label`      | `string`                                     | The text label to be displayed inside the tab.                      | `undefined`       | No       |
| `icon`       | `React.FC<AssetProps>`                       | The icon to be displayed inside the tab.                            | `undefined`       | No       |
| `selected`   | `boolean`                                    | Whether the tab is currently selected.                              | `false`           | No       |
| `color`      | `string`                                     | The color of the text and icon inside the tab.                      | `undefined`       | No       |
| `iconSize`   | `number`                                     | The size of the icon inside the tab.                                | `0.7`             | No       |
| `disabled`   | `boolean`                                    | Whether the tab is disabled.                                        | `false`           | No       |
| `onClick`    | `() => void`                                  | Callback function to be called when the tab is clicked.             | `undefined`       | No       |

## Example Use Case

### Example 1: Horizontal Tabs
A set of horizontal tabs for navigating between different sections.
```jsx
<Tabs
  label="Home"
  icon={HomeIcon}
  selected={true}
  onClick={() => console.log('Home clicked')}
/>
<Tabs
  label="Profile"
  icon={ProfileIcon}
  onClick={() => console.log('Profile clicked')}
/>
<Tabs
  label="Settings"
  icon={SettingsIcon}
  onClick={() => console.log('Settings clicked')}
/>
```

## View

# DataTable

# DataTable Component Documentation

## Description
The `DataTable` component is a versatile and customizable table component designed for displaying tabular data. It supports features such as pagination, search functionality, and row click handling, making it suitable for a wide range of applications where data needs to be presented in a tabular format.

## Use Case
This component is ideal for:
- Displaying lists of items in a tabular format.
- Providing search functionality to filter data.
- Enabling pagination to navigate through large datasets.
- Handling row clicks for interactive data tables.

## Props Table

| Prop Name          | Type                                                       | Description                                                                 | Default Value          | Required |
|--------------------|------------------------------------------------------------|-----------------------------------------------------------------------------|------------------------|----------|
| `dataset`          | `T[]`                                                      | The array of data items to be displayed in the table. Each item should be an object with key-value pairs representing columns and their values. | N/A                    | Yes      |
| `headerLabels`     | `string[]`                                                 | An array of strings representing the labels for the table headers.          | `undefined`            | No       |
| `pagination`       | `boolean`                                                  | A boolean indicating whether pagination is enabled.                         | `true`                 | No       |
| `paginationType`   | `"infinite-loading" \| "default"`                          | The type of pagination to be used (`"infinite-loading"` or `"default"`).    | `"default"`            | No       |
| `onClickRow`       | `(label: string, index: number) => void`                   | Callback function to handle row clicks. Receives the label and index of the clicked row as parameters. | `undefined`            | No       |
| `numberOfRows`     | `number`                                                   | The number of rows to display per page.                                     | `10`                   | No       |
| `rowStyleTypes`    | `"transparent" \| "outline" \| "alternative-fill"`         | The style type for rows.                                                    | `"transparent"`        | No       |
| `searchBarPosition`| `"start" \| "center" \| "end"`                             | The position of the search bar.                                             | `"end"`                | No       |

## Example

```typescript
import React from "react";
import DataTable from "./DataTable";
import { DataTableItemType } from "./datatable.types";

const dataset: DataTableItemType[] = [
  { name: "John Doe", age: 30, email: "john@example.com" },
  { name: "Jane Smith", age: 25, email: "jane@example.com" },
  // ...more data items
];

const headerLabels = ["Name", "Age", "Email"];

const App: React.FC = () => {
  const handleRowClick = (label: string, index: number) => {
    console.log(`Clicked row with label ${label} at index ${index}`);
  };

  return (
    <DataTable
      dataset={dataset}
      headerLabels={headerLabels}
      onClickRow={handleRowClick}
    />
  );
};

export default App;
```


# Flex

## Description
The `Flex` component is a versatile layout component that utilizes CSS flexbox to arrange its children. It supports various flex properties such as direction, wrapping, and flexible weights for child elements.

## Use Case
This component is ideal for:
- Creating flexible and responsive layouts.
- Aligning and distributing space among items in a container.
- Building complex grid systems using flex properties.

## Props Table

| Prop Name | Type | Description | Default Value | Required |
|-----------|------|-------------|---------------|----------|
| `direction` | `"row" \| "column" \| "row-reverse" \| "column-reverse"` | Defines the direction of the flex container's main axis. | `"row"` | No |
| `weight` | `number[]` | An array of numbers defining the flex-grow values for each child element. The number of elements in the array must match the number of children. | `undefined` | No |
| `wrap` | `boolean` | Determines whether the flex container's children should wrap onto multiple lines. | `false` | No |
| `maxRow` | `number` | The maximum number of rows. (Not used in the current implementation but included for extensibility.) | `undefined` | No |

## Example

```typescript
import React from "react";
import { Flex } from "./Flex";

const App: React.FC = () => {
  return (
    <Flex direction="row" weight={[1, 2, 1]} wrap={true} className="customClass">
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </Flex>
  );
};

export default App;
```


# Image

## Description
The `Image` component is a flexible and customizable image container that supports various properties such as overlay, aspect ratio, border radius, and object fit. It also allows for additional functionalities like update options and icons.

## Use Case
This component is ideal for:
- Displaying images with specific styles and properties.
- Adding overlays and icons to images.
- Handling image updates with custom update UI options.

## Props Table

| Prop Name                    | Type                                          | Description                                                                 | Default Value         | Required |
|------------------------------|-----------------------------------------------|-----------------------------------------------------------------------------|-----------------------|----------|
| `title`                      | `string`                                      | The title of the image, used for accessibility.                             | `"Image Component"`   | No       |
| `numberOfLinesForTitle`      | `number`                                      | Number of lines for the title text.                                         | `undefined`           | No       |
| `description`                | `string`                                      | The description of the image.                                               | `undefined`           | No       |
| `numberOfLinesForDescription`| `number`                                      | Number of lines for the description text.                                   | `undefined`           | No       |
| `overlay`                    | `boolean`                                     | Whether to display an overlay over the image.                               | `undefined`           | No       |
| `overlayOpacity`             | `number`                                      | The opacity of the overlay.                                                 | `undefined`           | No       |
| `source`                     | `string`                                      | The source URL of the image.                                                | `undefined`           | Yes      |
| `icon`                       | `React.FC<AssetProps>`                        | An optional icon to be displayed over the image.                            | `undefined`           | No       |
| `aspectRatio`                | `number`                                      | The aspect ratio of the image.                                              | `undefined`           | No       |
| `canUpdate`                  | `boolean`                                     | Whether the image can be updated.                                           | `undefined`           | No       |
| `updateUI`                   | `"overlay" \| "pen"`                          | The UI option for updating the image.                                       | `undefined`           | No       |
| `onUpdate`                   | `(url: string, file: Blob) => void`           | Callback function to handle image updates.                                  | `undefined`           | No       |
| `accepted`                   | `string`                                      | The accepted file types for image updates.                                  | `undefined`           | No       |
| `fit`                        | `"contain" \| "cover" \| "fill" \| "scale-down" \| "none"` | How the image should fit within its container.                              | `"cover"`             | No       |
| `borderRadius`               | `number`                                      | The border radius of the image container.                                   | `spacing.borderRadius.r2` | No       |

## Example

```typescript
import React from "react";
import { Image } from "./Image";

const App: React.FC = () => {
  return (
    <Image
      source="https://example.com/image.jpg"
      title="Sample Image"
      description="This is a sample image."
      overlay={true}
      overlayOpacity={0.5}
      borderRadius={10}
      fit="cover"
    />
  );
};

export default App;
```


# ListView

## Description
The `ListView` component is a flexible container for rendering lists of items. It supports horizontal and vertical orientations, and allows for custom headers and footers. The component utilizes a render prop pattern for rendering each item in the list, providing maximum flexibility.

## Use Case
This component is ideal for:
- Rendering lists of data with custom item components.
- Displaying lists in either horizontal or vertical orientation.
- Adding custom headers and footers to lists.

## Props Table

| Prop Name                   | Type                                                          | Description                                                                 | Default Value | Required |
|-----------------------------|---------------------------------------------------------------|-----------------------------------------------------------------------------|---------------|----------|
| `dataset`                   | `T[]`                                                         | The array of data items to be displayed in the list.                        | N/A           | Yes      |
| `renderItem`                | `(item: T, index: number) => React.JSX.Element`               | A function that returns the JSX element for each item in the list.          | `undefined`   | No       |
| `header`                    | `React.JSX.Element`                                           | A custom header element to be displayed at the top of the list.             | `undefined`   | No       |
| `footer`                    | `React.JSX.Element`                                           | A custom footer element to be displayed at the bottom of the list.          | `undefined`   | No       |
| `horizontal`                | `boolean`                                                     | If `true`, the list is displayed horizontally.                              | `false`       | No       |
| `ListHeaderComponentStyle`  | `CSSProperties`                                               | Custom styles for the header component.                                     | `undefined`   | No       |
| `ListFooterComponentStyle`  | `CSSProperties`                                               | Custom styles for the footer component.                                     | `undefined`   | No       |

## Example

```typescript
import React from "react";
import ListView from "./ListView";

const dataset = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];

const renderItem = (item: { id: number; name: string }, index: number) => (
  <div key={item.id}>
    {item.name}
  </div>
);

const App: React.FC = () => {
  return (
    <ListView
      dataset={dataset}
      renderItem={renderItem}
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      horizontal={true}
    />
  );
};

export default App;
```


# Row

## Description
The `Row` component is a flexible row layout component that extends the `Flex` component to include additional styling options. It supports different style types for various use cases such as outlined borders and alternating row fills.

## Use Case
This component is ideal for:
- Rendering rows within a table or list with specific styling needs.
- Applying alternating background colors or borders to rows.
- Creating structured row layouts with flexible weights for child elements.

## Props Table

| Prop Name   | Type                                                       | Description                                                           | Default Value | Required |
|-------------|------------------------------------------------------------|-----------------------------------------------------------------------|---------------|----------|
| `styleType` | `"transparent" \| "outline" \| "alternative-fill"`         | Defines the style type for the row.                                   | `"transparent"` | No       |
| `weight`    | `number[]`                                                 | An array of numbers defining the flex-grow values for each child.     | `undefined`   | No       |
| `index`     | `number`                                                   | The index of the row, used for applying styles based on row position. | `undefined`   | No       |

## Example

```typescript
import React from "react";
import { Row } from "./Row";

const dataset = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];

const App: React.FC = () => {
  return (
    <div>
      {dataset.map((item, index) => (
        <Row key={item.id} styleType="alternative-fill" index={index}>
          <div>{item.name}</div>
        </Row>
      ))}
    </div>
  );
};

export default App;
```


# SplitPane

## Description
The `SplitPane` component allows for the creation of resizable panes within a container. It supports both horizontal and vertical orientations, and enables users to adjust the size of the panes by dragging a resize handle.

## Use Case
This component is ideal for:
- Creating split views with adjustable pane sizes.
- Building layouts that require resizable sections, such as sidebars, content areas, or panels.
- Enhancing user interfaces with flexible, interactive components.

## Props Table

| Prop Name       | Type                                            | Description                                                          | Default Value | Required |
|-----------------|-------------------------------------------------|----------------------------------------------------------------------|---------------|----------|
| `initialSizes`  | `number[]`                                      | Initial sizes of the panes as percentages of the total container size.| `[50, 50]`    | No       |
| `minSizes`      | `number[]`                                      | Minimum sizes of the panes as percentages of the total container size.| `[10, 10]`    | No       |
| `maxSizes`      | `number[]`                                      | Maximum sizes of the panes as percentages of the total container size.| `[90, 90]`    | No       |
| `orientation`   | `"horizontal" \| "vertical"`                    | Orientation of the split panes.                                       | `"horizontal"`| No       |
| `onPaneResize`  | `(sizes: number[]) => void`                     | Callback function triggered when the pane sizes are adjusted.         | `undefined`   | No       |
| `className`     | `string`                                        | Additional class names for custom styling.                            | `undefined`   | No       |
| `style`         | `React.CSSProperties`                           | Inline styles for custom styling.                                     | `undefined`   | No       |
| `children`      | `React.ReactNode`                               | Child components to be rendered inside the panes.                     | `undefined`   | Yes      |

## Example

```typescript
import React from "react";
import SplitPane from "./SplitPane";

const App: React.FC = () => {
  return (
    <SplitPane initialSizes={[30, 70]} minSizes={[20, 20]} maxSizes={[80, 80]} orientation="vertical">
      <div style={{ background: "#f0f0f0", height: "100%" }}>Pane 1</div>
      <div style={{ background: "#e0e0e0", height: "100%" }}>Pane 2</div>
    </SplitPane>
  );
};

export default App;
```


## layout

# Prism

## Description
The `PrismLayout` component is a comprehensive layout component designed to manage the navigation, settings, notifications, and content sections of an application. It includes customizable tabs, search functionality, and integrates with horizontal modals for displaying notifications and settings.

## Use Case
The `PrismLayout` component is ideal for:
- Creating a structured layout for applications with multiple sections.
- Managing navigation between different tabs or sections.
- Integrating notifications and settings modals within the layout.

## Props Table

### PrismLayoutProps

| Prop Name                     | Type                                      | Description                                                        | Default Value            | Required |
|-------------------------------|-------------------------------------------|--------------------------------------------------------------------|--------------------------|----------|
| `showNotifications`           | `boolean`                                 | Whether to show the notifications icon.                            | `false`                  | No       |
| `showSettingIcon`             | `boolean`                                 | Whether to show the settings icon.                                 | `false`                  | No       |
| `logo`                        | `string`                                  | URL of the logo to be displayed in the header.                     | `undefined`              | No       |
| `settingComponent`            | `React.FC`                                | Component to be displayed in the settings modal.                   | `undefined`              | No       |
| `notificationComponent`       | `React.FC`                                | Component to be displayed in the notifications modal.              | `undefined`              | No       |
| `notificationCount`           | `number`                                  | Number of unread notifications.                                    | `0`                      | No       |
| `navigationFooterComponent`   | `React.FC`                                | Component to be displayed in the navigation footer.                | `undefined`              | No       |
| `tabsData`                    | `PrismLayoutTab[]`                        | Array of tab data objects.                                         | `undefined`              | No       |
| `onTabClick`                  | `(tab: PrismLayoutTab) => void`           | Callback function when a tab is clicked.                           | `undefined`              | No       |
| `handleSearch`                | `(value: string) => void`                 | Callback function when the search value changes.                   | `undefined`              | No       |
| `SearchResultsComponent`      | `React.FC<SearchResultProps>`             | Component to be displayed for search results.                      | `undefined`              | No       |
| `searchPlaceholder`           | `string`                                  | Placeholder text for the search input.                             | `"Search Here..."`       | No       |

### PrismLayoutTab

| Prop Name            | Type                           | Description                                                        | Default Value   | Required |
|----------------------|--------------------------------|--------------------------------------------------------------------|-----------------|----------|
| `id`                 | `number`                       | Unique identifier for the tab.                                     | `undefined`     | Yes      |
| `icon`               | `React.FC<AssetProps>`         | Icon to be displayed in the tab.                                   | `undefined`     | Yes      |
| `title`              | `string`                       | Title of the tab.                                                  | `undefined`     | Yes      |
| `selected`           | `boolean`                      | Whether the tab is currently selected.                             | `false`         | No       |
| `component`          | `ReactNode`                    | Component to be displayed when the tab is selected.                | `undefined`     | No       |
| `disabled`           | `boolean`                      | Whether the tab is disabled.                                       | `false`         | No       |
| `actionButtonEnabled`| `boolean`                      | Whether the action button is enabled for the tab.                  | `false`         | No       |
| `actionModalComponent`| `ReactNode`                   | Component to be displayed in the action modal for the tab.         | `undefined`     | No       |

## Example Use Case

### Example 1: Basic PrismLayout
A basic layout with tabs and notifications enabled.
```jsx
import React from 'react';
import { PrismLayout } from './PrismLayout';

const tabsData = [
  { id: 1, icon: IconComponent1, title: "Home", component: <HomeComponent /> },
  { id: 2, icon: IconComponent2, title: "Profile", component: <ProfileComponent /> }
];

const App = () => (
  <PrismLayout
    logo="https://example.com/logo.png"
    showNotifications={true}
    showSettingIcon={true}
    tabsData={tabsData}
  />
);

export default App;
```

## Providers

# LumiaProvider

## Description
The `LumiaProvider` component is a higher-order component that wraps around your application to provide global context and functionality for notifications and modals. It uses various providers to manage notifications, standard modals, and horizontal modals, ensuring that these features are available throughout the application.

## Use Case
The `LumiaProvider` component is ideal for:
- Setting up global state and context for notifications and modal dialogs.
- Providing a consistent and centralized way to manage modals and notifications in your application.
- Ensuring that modals and notifications can be accessed and used from any part of the application.

## Props Table

| Prop Name  | Type               | Description                               | Default Value | Required |
|------------|--------------------|-------------------------------------------|---------------|----------|
| `children` | `React.ReactNode`  | The child components to be wrapped by the provider. | `undefined`   | Yes      |

## Example Use Case

### Example 1: Wrapping an Application with LumiaProvider
Wrap your application with the `LumiaProvider` to enable notifications and modals.
```jsx
import React from "react";
import ReactDOM from "react-dom";
import LumiaProvider from "./LumiaProvider";
import App from "./App";

ReactDOM.render(
  <LumiaProvider>
    <App />
  </LumiaProvider>,
  document.getElementById("root")
);
```

# NotificationProvider

# NotificationProvider Component Documentation

## Description
The `NotificationProvider` component is a context provider that manages the state and functionality for notifications in your application. It uses a reducer to handle actions such as adding a new notification and marking notifications as read. This provider makes it easy to manage and display notifications across your application.

## Use Case
The `NotificationProvider` component is ideal for:
- Managing application-wide notifications.
- Keeping track of unread notifications and displaying them in a user interface.
- Providing a centralized way to add, update, and read notifications.

## Props Table

### NotificationProvider
| Prop Name  | Type               | Description                               | Default Value | Required |
|------------|--------------------|-------------------------------------------|---------------|----------|
| `children` | `React.ReactNode`  | The child components to be wrapped by the provider. | `undefined`   | Yes      |

### Notification
| Prop Name   | Type                           | Description                                                         | Default Value | Required |
|-------------|--------------------------------|---------------------------------------------------------------------|---------------|----------|
| `id`        | `string`                       | Unique identifier for the notification.                             | `undefined`   | Yes      |
| `type`      | `"default" \| "flat" \| "outlined"`| Type of notification style.                                       | `"default"`   | No       |
| `title`     | `string`                       | Title of the notification.                                          | `undefined`   | Yes      |
| `description`| `string`                      | Description of the notification.                                    | `undefined`   | No       |
| `date`      | `Date`                         | Date when the notification was created.                             | `undefined`   | Yes      |
| `read`      | `boolean`                      | Whether the notification has been read.                             | `false`       | Yes      |
| `icon`      | `React.FC<AssetProps>`         | Icon to be displayed with the notification.                         | `undefined`   | No       |
| `image`     | `string`                       | Image to be displayed with the notification.                        | `undefined`   | No       |

## Example Use Case

### Example 1: Using NotificationProvider
Wrap your application with the `NotificationProvider` to enable notifications.
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { NotificationProvider } from './NotificationProvider';
import App from './App';

ReactDOM.render(
  <NotificationProvider>
    <App />
  </NotificationProvider>,
  document.getElementById('root')
);
```

# StandardModalProvider || HorizontalModalProvider

## Description
The `StandardModal` and `HorizontalModal` components are specialized modal dialogs used to display various content types within your application. These modals are integrated with providers (`StandardModalProvider` and `HorizontalModalProvider`) to manage their state and visibility. The `StandardModal` is a centered modal, while the `HorizontalModal` slides in from the left or right.

## Use Case
The `StandardModal` and `HorizontalModal` components are ideal for:
- Displaying content in modal dialogs.
- Providing additional information or forms without navigating away from the current page.
- Implementing modal-based interactions with different display styles.

## Props Table

### StandardModal
| Prop Name    | Type               | Description                                                         | Default Value     | Required |
|--------------|--------------------|---------------------------------------------------------------------|-------------------|----------|
| `isVisible`  | `boolean`          | Whether the modal is visible.                                       | `false`           | Yes      |
| `hideModal`  | `() => void`       | Function to hide the modal.                                         | `undefined`       | Yes      |
| `Component`  | `React.FC \| null` | The component to be displayed inside the modal.                     | `null`            | No       |

### HorizontalModal
| Prop Name    | Type               | Description                                                         | Default Value     | Required |
|--------------|--------------------|---------------------------------------------------------------------|-------------------|----------|
| `isVisible`  | `boolean`          | Whether the modal is visible.                                       | `false`           | Yes      |
| `hideModal`  | `() => void`       | Function to hide the modal.                                         | `undefined`       | Yes      |
| `Component`  | `React.FC \| null` | The component to be displayed inside the modal.                     | `null`            | No       |
| `direction`  | `"left" \| "right"`| The direction from which the modal slides in.                       | `"left"`          | No       |

## Example Use Case

### Example 1: Using StandardModal
A component that displays a standard modal.
```jsx
import React from 'react';
import { useStandardModal } from './StandardModalProvider';
import { StandardModal } from './Modals';

const MyComponent: React.FC = () => {
  const { showModal } = useStandardModal();

  return (
    <div>
      <button onClick={() => showModal(MyModalContent)}>Show Modal</button>
      <StandardModal />
    </div>
  );
};

const MyModalContent: React.FC = () => <div>Modal Content</div>;
```

# ThemeProvider

## ThemeProvider Documentation

### Description

The `ThemeProvider` component is designed to manage theme-related properties in your application, allowing you to toggle between light and dark themes. It leverages `styled-components` for theming and provides a context for accessing and modifying the current theme throughout your application.

### Use Case

Use the `ThemeProvider` to wrap your application's root component. This enables you to define and switch between different themes (e.g., light and dark) easily. The `useTheme` hook can be utilized in any component within the `ThemeProvider` to access the current theme and toggle between themes.

### Props Table

| Prop Name | Type               | Description                               | Default Value | Required |
|-----------|--------------------|-------------------------------------------|---------------|----------|
| theme     | `Theme`            | The theme object to be used for styling   | `defaultTheme`| Yes      |
| children  | `ReactNode`        | The child components to be wrapped by the provider | N/A           | Yes      |

### Example Use Case

Here's an example of how you can use the `ThemeProvider` and `useTheme` hook in your application:

```typescript
import React from "react";
import { ThemeProvider, useTheme } from "./themeProvider";
import { defaultTheme } from "./themeProvider.constants";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <div style={{ background: theme.background.app, color: theme.color.foreground }}>
        <h1>Hello, World!</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </ThemeProvider>
  );
};

export default App;```


