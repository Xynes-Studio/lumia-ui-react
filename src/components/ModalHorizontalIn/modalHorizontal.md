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