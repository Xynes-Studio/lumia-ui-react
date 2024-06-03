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
