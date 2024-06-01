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