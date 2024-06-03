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