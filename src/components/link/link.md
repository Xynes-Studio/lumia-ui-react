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