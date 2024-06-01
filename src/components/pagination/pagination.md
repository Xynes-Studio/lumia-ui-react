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