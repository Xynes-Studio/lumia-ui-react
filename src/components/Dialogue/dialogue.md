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