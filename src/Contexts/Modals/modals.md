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