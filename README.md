# Lumia UI Library

Welcome to the Lumia UI Library! This repository houses a collection of React components designed to make your development process smoother and your applications more visually appealing. Let's dive into the details of each component and how you can use them in your projects.

## Installation

You can install the Lumia UI Library via npm:

```bash
npm install @lumia/ui-library
```

## Components

### Headings

The `Headings` component provides various heading styles ranging from `<H1>` to `<H6>`. It supports dynamic font styling, max lines limit, and editing mode.

#### Props

| Prop          | Type     | Description                                           |
|---------------|----------|-------------------------------------------------------|
| type          | string   | Font style type ("sans" or "serif")                   |
| numberOfLines | number   | Maximum number of lines displayed                     |
| editable      | boolean  | Enable editing mode                                   |
| onUpdate      | function | Callback function triggered on text update            |

Example usage:
```jsx
<Headings type="sans" numberOfLines={3} editable onUpdate={handleUpdate} />
```

### Text

The `Text` component provides dynamic text styling and handles different text cases. It also supports an editing mode and an onUpdate callback.

#### Props

| Prop       | Type     | Description                                     |
|------------|----------|-------------------------------------------------|
| type       | string   | Text style type ("error", "body", "caption")    |
| textCase   | string   | Transform text case ("capitalize", "uppercase") |
| editable   | boolean  | Enable editing mode                            |
| onUpdate   | function | Callback function triggered on text update      |

Example usage:
```jsx
<Text type="error" textCase="uppercase" editable onUpdate={handleUpdate} />
```

### Flex

The `Flex` component provides flexible layout options with support for direction, weight distribution, and wrapping.

#### Props

| Prop      | Type     | Description                            |
|-----------|----------|----------------------------------------|
| direction | string   | Flex direction ("row", "column", etc.) |
| weight    | number[] | Weight distribution for children       |
| wrap      | boolean  | Enable flex wrapping                   |

Example usage:
```jsx
<Flex direction="row" weight={[1, 2, 1]} wrap />
```

### LMAsset

The `LMAsset` component displays icons from the Lumia Icons collection. It accepts the icon name and size as props.

#### Props

| Prop   | Type   | Description              |
|--------|--------|--------------------------|
| name   | string | Name of the Lumia icon   |
| size   | number | Size of the icon (in px) |

Example usage:
```jsx
<LMAsset name="icon-name" size={24} />
```

### Code

The `Code` component provides syntax highlighting for code blocks. It supports various languages and custom class names.

#### Props

| Prop          | Type   | Description                                 |
|---------------|--------|---------------------------------------------|
| code          | string | Code block                                  |
| language      | string | Language type ('html', 'css', 'JS', etc.)  |
| codeClassName | string | Custom class names for code block styling  |

Example usage:
```jsx
<Code code="const hello = 'world';" language="javascript" codeClassName="custom-code" />
```

### Image

The `Image` component displays images with optional overlays for title, description, and icons. It supports updating images and handles data updates via a callback function.

#### Props

| Prop        | Type     | Description                                            |
|-------------|----------|--------------------------------------------------------|
| title       | string   | Title for the image overlay                            |
| description | string   | Description for the image overlay                      |
| overlay     | boolean  | Enable/disable the image overlay                       |
| canUpdate   | boolean  | Allow users to update the image from their file manager|
| onUpdate    | function | Callback function for handling data updates             |

Example usage:
```jsx
<Image title="Sample" description="Lorem ipsum" overlay canUpdate onUpdate={handleUpdate} />
```

### TextInput

The `TextInput` component provides an input field with support for various types, including password fields. It displays error messages and allows custom validation.

#### Props

| Prop      | Type     | Description                                         |
|-----------|----------|-----------------------------------------------------|
| type      | string   | Input field type ('text', 'password', etc.)         |
| error     | string   | Error message to display                             |
| validate  | function | Custom validation function for input field          |
| label     | string   | Label text for the input field                      |

Example usage:
```jsx
<TextInput type="text" error="Field is required" validate={customValidation} label="Username" />
```

### Checkbox

The `Checkbox` component allows users to select or deselect options. It supports an indeterminate state and provides a callback function to capture value changes.

#### Props

| Prop      | Type     | Description                                 |
|-----------|----------|---------------------------------------------|
| value     | boolean  | Checkbox value (true or false)              |
| indeterminate | boolean | Enable an indeterminate state              |
| label     | string   | Label text for the checkbox                 |
| onUpdate  | function | Callback function for value changes         |

Example usage:
```jsx
<Checkbox value={true} indeterminate label="Check me" onUpdate={handleUpdate} />
```

### Switch

The `Switch` component provides a toggle switch for boolean values. It supports a callback function to handle state changes and includes an optional label.

#### Props

| Prop      | Type     | Description                                 |
|-----------|----------|---------------------------------------------|
| value     | boolean  | Switch value (true or false)                |
| label     | string   | Label text for the switch                   |
| onToggle  | function | Callback function for state changes         |

Example usage:
```jsx
<Switch value={true} label="Toggle" onToggle={handleToggle} />
```

### PinInput

The `PinInput` component allows users to input a PIN through multiple fields. It automatically transitions to the next field upon key press and supports a hidden mode.

#### Props

| Prop          | Type     | Description                                      |
|---------------|----------|--------------------------------------------------|
| numberOfFields| number   | Number of PIN input fields                       |
| hidden        | boolean  | Enable/disable hidden mode for PIN input         |
| label         | string   | Label text for the PIN input fields              |
| onValueChange | function | Callback function for handling input data        |

Example usage:
```jsx
<PinInput numberOfFields={4} hidden label="Enter PIN" onValueChange={handleValueChange} />
```

### Button

The `Button` component provides a versatile user interface element with options for different types, icons, and labels.

#### Props

| Prop        | Type     | Description                                           |
|-------------|----------|-------------------------------------------------------|
| type        | string   | Button type ('fill', 'outlined', 'label')             |
| iconAtEnd   | boolean  | Position of the icon (true for end, false for start)  |
| label       | string   | Button label text                                     |
| icon        | function | Icon component for the button                         |
| onClick     | function | Callback function for button click                    |

