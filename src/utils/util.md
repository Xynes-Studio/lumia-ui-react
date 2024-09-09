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